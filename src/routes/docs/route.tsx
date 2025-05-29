import { createFileRoute } from "@tanstack/react-router"
import { Outlet } from "@tanstack/react-router"
import { useNavigate } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
export const Route = createFileRoute('/docs')({
    component: DocsLayout,
})
import { Waline } from '@/components/custom/Waline'
import CustomMDXProvider from "@/components/custom/MDXProvider"
import { TOCGenerator } from '@/components/custom/TOCGenerator'
import { useState, useEffect } from "react"
export default function DocsLayout() {
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {
        let scrollTimer: number
        let lastScrollY = window.scrollY

        const checkIfStopped = () => {
            if (window.scrollY === lastScrollY) {
                setTimeout(() => {
                     setIsScrolling(false)
                }, 500);
               
            } else {
                lastScrollY = window.scrollY
                scrollTimer = requestAnimationFrame(checkIfStopped)
            }
        }

        const handleScroll = () => {
            if (!isScrolling) setIsScrolling(true)
            cancelAnimationFrame(scrollTimer)
            scrollTimer = requestAnimationFrame(checkIfStopped)
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            cancelAnimationFrame(scrollTimer)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [isScrolling])
    const navigation = useNavigate({ from: '/' })
    return (
        <CustomMDXProvider>
            <Drawer>
                <DrawerTrigger className={`block sticky top-[40%] -translate-y-1/2 right-5 z-10 float-right   h-15 w-15 hover:h-20 hover:w-20  hover:shadow-lg hover:shadow-gray-700 hover:bg-amber-50  hover:border-blue-400 border-[#d44375] max-[760px]:border-blue-400 max-[760px]:bg-amber-50 max-[760px]:shadow-lg max-[760px]:shadow-gray-700 border-4 transition-all duration-500  rounded-full ${isScrolling?'opacity-0':'opacity-100'}`}>侧栏</DrawerTrigger>
                <DrawerContent data-vaul-drawer-direction='right' className="bg-[#e2e0de]">
                    <DrawerHeader >
                        <DrawerTitle className="text-center text-3xl">目录</DrawerTitle>
                        <DrawerDescription className="flex justify-center">
                            <TOCGenerator
                                containerClassName={`space-y-10`}
                                itemClassName="text-gray-900 text-lg"
                                activeItemClassName="text-pink-600 font-semibold"
                                subItemClassName="ml-6 text-md"
                                activeSubItemClassName="text-blue-500 text-md"
                            /></DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter >
                        <DrawerClose className="flex justify-center gap-6">
                            <Button onClick={() => {
                                navigation({ to: '/' })
                            }}>首页</Button>
                            <Button variant="outline">返回</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <div className="docs m-auto block  mt-2 min-h-screen min-w-7/12 ">

                <Outlet />
                <Waline
                    path="/docs"  // 必填参数
                    serverURL="https://waline-ashen-xi.vercel.app"  // Waline 服务端地址
                    comment={true}
                    pageview={true}
                    search={true}
                    emoji={['https://unpkg.com/@waline/emojis@1.2.0/bmoji', '//unpkg.com/@waline/emojis@latest/weibo', 'https://unpkg.com/@waline/emojis@1.2.0/bilibili', 'https://unpkg.com/@waline/emojis@1.2.0/tieba', 'https://unpkg.com/@waline/emojis@1.2.0/qq', 'https://unpkg.com/@waline/emojis@1.2.0/soul-emoji']} />
            </div>

        </CustomMDXProvider >
    )
}
