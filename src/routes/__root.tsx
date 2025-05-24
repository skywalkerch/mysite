import { HeadContent, Scripts, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '@/components/custom/theme-provider'
import Navigation from '@/components/for-navigationbar/Navigation'
export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <div className='min-h-screen bg-gray-200 dark:bg-gray-700'>
        <HeadContent />
        <Navigation />
       
        <Outlet />
        <Scripts />
        <TanStackRouterDevtools />
      </div>
    </ThemeProvider>
  ),
})


