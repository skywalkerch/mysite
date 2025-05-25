import { createFileRoute } from "@tanstack/react-router"
import { Outlet } from "@tanstack/react-router"
export const Route = createFileRoute('/docs')({
    component: DocsLayout,
})
import CustomMDXProvider from "@/components/custom/MDXProvider"
export default function DocsLayout() {
    return (
        <CustomMDXProvider>
            <div className="docs m-auto mt-2 min-h-screen min-w-7/12 ">
                <Outlet />
            </div>
        </CustomMDXProvider >
    )
}
