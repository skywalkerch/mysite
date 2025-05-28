import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { useNavigate } from '@tanstack/react-router'
export type PhotoType = {
    url: string,
    device?: string,
    focallenth?: string,
    focal?: string,
    time?: string,
    ISO?: string,
}

export default function GalleryPlayer({ picturesList, bgMusicPath }: { picturesList: PhotoType[], bgMusicPath: string }) {
    const [userInteracted, setUserInteracted] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [fadeIn, setFadeIn] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isEnded, setIsEnded] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const bgMusicRef = useRef<HTMLAudioElement | null>(null)
    const navigation = useNavigate({ from: '/' })
    const cameraMusicRef = useRef<HTMLAudioElement | null>(null)
    useEffect(() => {

        if (!bgMusicRef.current) {
            bgMusicRef.current = new Audio(bgMusicPath)
            bgMusicRef.current.loop = false
            bgMusicRef.current.volume = 1
        }

        if (!cameraMusicRef.current) {
            cameraMusicRef.current = new Audio('/musics/camera.mp3')
            cameraMusicRef.current.volume = 1
        }
        if (bgMusicRef.current) {
            bgMusicRef.current.addEventListener('ended', () => {
                setIsEnded(true)
            })
        }
        let loadedCount = 0
        picturesList.forEach((item) => {
            const img = new Image()
            img.src = item.url
            img.onload = () => {
                loadedCount++
                if (loadedCount === picturesList.length) {
                    setIsLoaded(true)
                }
            }
            img.onerror = () => {
                loadedCount++
                if (loadedCount === picturesList.length) {
                    setIsLoaded(true)
                }
            }
        })
    }, [])
    useEffect(() => {
        if (!isLoaded || !userInteracted) return
        if (isEnded) {
            cameraMusicRef.current = null;
            setTimeout(() => {
                setFadeIn(false)
            }, 300);
            return;
        }

        const interval = setInterval(
            () => {

                setFadeIn(false) // 开始淡出
                setTimeout(() => {
                    setCurrentIndex((prev) => {
                        return (prev + 1) % picturesList.length
                    })
                    setTimeout(() => {
                        setFadeIn(true) // 开始淡入
                    }, 100) // 这里可根据动画时长调节
                }, 500) // 淡出时间
                setTimeout(() => {
                    cameraMusicRef.current?.play()
                }, 80)
            }, 5000)

        return () => clearInterval(interval)
    }, [userInteracted, isEnded, isLoaded])
    useEffect(() => {
        if (isEnded) {
            setTimeout(() => {
                navigation({ to: '/' })
            }, 9000)
        }
    }, [isEnded])
    return (
        <div className="h-screen bg-white flex justify-center items-center">
            {
                userInteracted ?
                    isLoaded ?
                        (<div><div className={`transtition-all duration-1000 ${isEnded ? 'opacity-0' : 'opacity-100'}`}>
                            <img
                                key={picturesList[currentIndex].url}
                                src={picturesList[currentIndex].url}
                                alt="head-picture"
                                className={`m-auto relative bottom-15 rounded-2xl lg:max-w-[50%] max-w-[90%] shadow-lg shadow-zinc-400 h-auto object-contain transition-opacity duration-700 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                            <img alt={picturesList[currentIndex].url} src="/pictures/sonylogo.svg" className={`max-w-40 m-auto relative bottom-10 transtition ${fadeIn ? 'opacity-100' : 'opacity-0'}`} />
                            <div className={` mx-auto text-xl text-center transtition flex flex-col justify-center ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                                <p>{picturesList[currentIndex].device}</p>
                                <p className='flex flex-row justify-center gap-2 font-bold'>
                                    <span>{picturesList[currentIndex].focal}</span>
                                    <span>{picturesList[currentIndex].focallenth}</span>
                                    <span>{picturesList[currentIndex].time}</span>
                                    <span>ISO{picturesList[currentIndex].ISO}</span>
                                </p>
                            </div>
                        </div>
                            <div className={` text-center m-auto text-3xl font-bold transition-opacity duration-5000 ease-in-out ${isEnded ? 'opacity-100 relative bottom-80' : 'opacity-0'}`}>
                                用镜头与光线丈量这个美丽的世界
                            </div>
                        </div>
                        ) : (<></>)
                    :
                    (
                        <div>
                            <img src="/pictures/arrow.svg" alt=" arrow" className={` m-auto w-20 h-20 transition-all duration-4000 text-[#d44375] ${clicked ? "opacity-0" : "opacity-100"} `} />
                            <Button onClick={
                                () => {
                                    bgMusicRef.current?.play()
                                    setClicked(true)
                                    setTimeout(() => {
                                        setUserInteracted(true)
                                    }, 5000);
                                }
                            } className={`transition-all text-2xl  lg:min-w-[30%]  max-[760px]:max-w-[90%] h-auto rounded-3xl shadow-lg shadow-zinc-400 bg-[#e2e0de]  duration-4000 text-[#d44375] ${clicked ? "opacity-0" : "opacity-100"}`}>
                                WelCome Home
                            </Button></div>

                    )
            }
        </div>
    )

}
