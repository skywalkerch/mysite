import { createFileRoute } from "@tanstack/react-router"
import { Outlet } from "@tanstack/react-router"
export const Route = createFileRoute('/docs')({
    component: DocsLayout,
})
import { Waline } from '@/components/custom/Waline'
import CustomMDXProvider from "@/components/custom/MDXProvider"
import { TOCGenerator } from '@/components/custom/TOCGenerator'
export default function DocsLayout() {
    return (
        <CustomMDXProvider>

            <TOCGenerator
                containerClassName="space-y-10 max-w-60 fixed top-[20%] right-[8%] "
                itemClassName="text-gray-900 text-2xl"
                activeItemClassName="text-red-500 font-semibold"
                subItemClassName="text-xl ml-6 text-sm"
                activeSubItemClassName="text-blue-500 text-lg"
            />
            <div className="docs m-auto mt-2 min-h-screen min-w-7/12 ">


                <Outlet />
                <Waline
                    path="/docs"  // 必填参数
                    serverURL="https://waline-ashen-xi.vercel.app"  // Waline 服务端地址
                    comment={true}
                    emoji={['https://unpkg.com/@waline/emojis@1.2.0/bmoji', '//unpkg.com/@waline/emojis@latest/weibo', 'https://unpkg.com/@waline/emojis@1.2.0/bilibili', 'https://unpkg.com/@waline/emojis@1.2.0/tieba', 'https://unpkg.com/@waline/emojis@1.2.0/qq', 'https://unpkg.com/@waline/emojis@1.2.0/soul-emoji']} />
            </div>
        </CustomMDXProvider >
    )
}
