import { useContext, useEffect, useState } from "react"
import { SetMusicIdContext, AudioRef, MusicIdContext } from "./music-context"
import MusicList from "@root/MusicList"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "../ui/button"

import ModeToggle from './ModeToggle'
export default function LeftLogo() {
    const setMusicId = useContext(SetMusicIdContext)
    const musicId = useContext(MusicIdContext)
    const audioRef = useContext(AudioRef)
    const [isPlaying, setPlaying] = useState(false)
    useEffect(() => {
        audioRef.current?.addEventListener('ended', () => {
            setPlaying(false)
            setMusicId(musicId => (musicId + 1) % MusicList.length)
        })
        audioRef.current?.addEventListener('pause', () => {
            setPlaying(false)
        })
        audioRef.current?.addEventListener('play', () => {
            setPlaying(true)
        })
    })

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load()
            if (isPlaying) {
                audioRef.current.play().catch(() => { })
            }
        }
    }, [musicId, isPlaying, audioRef,])
    return (
        <div className="flex items-center justify-center">
            {isPlaying ? (<Button variant='ghost' className="font-semibold tracking-wider text-lg" onClick={
                () => {
                    if (isPlaying) {
                        audioRef.current?.pause()
                    } else {
                        audioRef.current?.play()
                    }
                }
            }>Skywalkerch</Button>) : (
                <AlertDialog >
                    <AlertDialogTrigger asChild>
                        <Button variant='ghost' className="font-semibold tracking-wider text-lg border-0">Skywalkerch</Button>
                    </AlertDialogTrigger >
                    <AlertDialogContent className="border-0 bg-[#f5f5f5] dark:bg-[#1e1d20]">
                        <AlertDialogHeader >
                            <AlertDialogTitle className="dark:text-gray-300">可是这不是首页链接🎵!</AlertDialogTitle>
                            <AlertDialogDescription className="text-gray-950 dark:text-gray-100">
                                这是我埋的一个雷，如果确定之后会播放音乐哦！音乐播放后，还会有另一个隐藏的按钮！
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="dark:bg-[#e5dfd3]">不想听歌</AlertDialogCancel>
                            <AlertDialogAction onClick={
                                () => {
                                    if (isPlaying) {
                                        audioRef.current?.pause()
                                    } else {
                                        audioRef.current?.play()
                                    }
                                }
                            }>听一下歌</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog >
            )
            }
            <audio ref={audioRef}>
                <source src={MusicList[musicId].url} type={MusicList[musicId].type} />
            </audio>
            <ModeToggle />
        </div >
    )
}