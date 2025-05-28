import { createFileRoute } from "@tanstack/react-router"
import { Outlet } from "@tanstack/react-router"
export const Route = createFileRoute('/docs')({
    component: DocsLayout,
})
import { Waline } from '@/components/custom/Waline'
import CustomMDXProvider from "@/components/custom/MDXProvider"
export default function DocsLayout() {



    return (
        <CustomMDXProvider>
            <div className="docs m-auto mt-2 min-h-screen min-w-7/12 ">
                <Outlet />
                <Waline path="/docs"  // 必填参数
                    serverURL="https://skywalkerch.vercel.app"  // Waline 服务端地址
                    // 其他可选参数...
                    comment={true}
                    emoji={['//unpkg.com/@waline/emojis@latest/weibo']} />
                <a href="https://skywalkerch.vercel.app/ui/register" target="_blank" rel="noopener noreferrer">
                    注册账户
                </a>
            </div>

        </CustomMDXProvider >
    )
}
