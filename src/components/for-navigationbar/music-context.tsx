import { useRef, useState, createContext, } from "react";
import type { ReactNode, Dispatch, SetStateAction, RefObject } from "react"
const MusicIdContext = createContext<number>(0);
const SetMusicIdContext = createContext<Dispatch<SetStateAction<number>>>(() => { });
const AudioRef = createContext<RefObject<HTMLAudioElement | null>>({ current: null })
export { MusicIdContext, SetMusicIdContext, AudioRef }
export function MusicContext({ children }: { children: ReactNode }) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [musicId, setMusicId] = useState(0)
    return (
        <MusicIdContext.Provider value={musicId}>
            <SetMusicIdContext.Provider value={setMusicId}>
                <AudioRef.Provider value={audioRef}>
                    {children}
                </AudioRef.Provider>
            </SetMusicIdContext.Provider>
        </MusicIdContext.Provider>
    )
}