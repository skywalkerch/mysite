import { createFileRoute } from "@tanstack/react-router"
import { Outlet } from "@tanstack/react-router"
import { useNavigate } from "@tanstack/react-router"
export const Route = createFileRoute('/docs')({
    component: DocsLayout,
})
import { Waline } from '@/components/custom/Waline'
import CustomMDXProvider from "@/components/custom/MDXProvider"
import { TOCGenerator } from '@/components/custom/TOCGenerator'
import { useState } from "react"
export default function DocsLayout() {
    const [displayTOC, setDisPlayTOC] = useState(true)
    const navigation = useNavigate({ from: '/' })
    return (
        <CustomMDXProvider>
            <div className="fixed top-[20%] right-[8%]">
                <div className="flex gap-8 justify-center mb-4"> <i className="pi pi-backward text-[#d44375] text-xl hover:text-blue-400 hover:underline hover:decoration-wavy " onClick={() => {
                    navigation({ to: '/' })
                }}></i>
                    <i className="pi pi-align-right  text-[#d44375] text-xl hover:text-blue-400 hover:underline hover:decoration-wavy" onClick={() => {
                        displayTOC ? setDisPlayTOC(false) : setDisPlayTOC(true)
                    }}></i></div>

                <TOCGenerator
                    containerClassName={`space-y-10 max-w-60  max-[760px]:hidden ${displayTOC ? '' : 'hidden'}`}
                    itemClassName="text-gray-900 text-2xl"
                    activeItemClassName="text-red-500 font-semibold"
                    subItemClassName="text-xl ml-6 text-sm"
                    activeSubItemClassName="text-blue-500 text-lg"
                />
            </div>
            <div className="docs m-auto mt-2 min-h-screen min-w-7/12 ">
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
