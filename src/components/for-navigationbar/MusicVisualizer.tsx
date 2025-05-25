"use client";
import { useEffect, useRef } from 'react'
import { useContext } from 'react';
import { SetMusicIdContext } from './music-context';
import MusicList from "@root/MusicList"

// 在文件顶部添加类型声明
declare global {
    interface Window {
        webkitAudioContext: typeof AudioContext;
    }
}
export default function MusicVisualizer() {
    const setMusicId = useContext(SetMusicIdContext)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const audioContextRef = useRef<AudioContext | null>(null)
    const analyserRef = useRef<AnalyserNode | null>(null)
    const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
    const animationIdRef = useRef<number | null>(null)
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const renderFrame = () => {
            const analyser = analyserRef.current
            if (!analyser) {
                animationIdRef.current = requestAnimationFrame(renderFrame)
                return
            }

            const bufferLength = analyser.frequencyBinCount
            const dataArray = new Uint8Array(bufferLength)
            analyser.getByteFrequencyData(dataArray)

            const WIDTH = canvas.width
            const HEIGHT = canvas.height

            ctx.clearRect(0, 0, WIDTH, HEIGHT)

            const barWidth = (WIDTH / bufferLength) * 8
            let x = 0

            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i] / 6
                ctx.fillStyle = `#9B9B9B`
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)
                x += barWidth + 1
            }

            animationIdRef.current = requestAnimationFrame(renderFrame)
        }

        const handleAudioPlay = () => {
            const audioElements = document.getElementsByTagName('audio')
            if (audioElements.length === 0 || !audioElements[0]) return

            if (sourceRef.current) return

            const audio = audioElements[0]
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const analyser = audioContext.createAnalyser()
            analyser.fftSize = 256

            const source = audioContext.createMediaElementSource(audio)
            source.connect(analyser)
            analyser.connect(audioContext.destination)

            audioContextRef.current = audioContext
            analyserRef.current = analyser
            sourceRef.current = source
        }

        document.addEventListener('play', handleAudioPlay, true)
        renderFrame()

        return () => {
            document.removeEventListener('play', handleAudioPlay, true)
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current)
            }
            if (audioContextRef.current?.state !== 'closed') {
                audioContextRef.current?.close()
            }
            sourceRef.current = null
        }
    }, [])

    return (
        <canvas
            onClick={() => {
                setMusicId(Math.floor(Math.random() * MusicList.length))
            }}
            ref={canvasRef}
            width={400}
            height={45}
            className="lg:backdrop-blur-sm  lg:rounded-xl lg:max-h-10/12 max-[760px]:hidden lg:block "
        />
    )
}
