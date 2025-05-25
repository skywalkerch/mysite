import { HeadContent, Scripts, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '@/components/custom/theme-provider'
import Navigation from '@/components/for-navigationbar/Navigation'
export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <div className=''>
        <HeadContent />
        <Navigation />
        <div className='flex-1 '>
          <Outlet />
        </div>
        <Scripts />
        <TanStackRouterDevtools />
      </div >
    </ThemeProvider >
  ),
  head: () => ({
    meta: [
      { name: 'description', content: 'Hello this is skywalkerch\'s site' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Skywalkerch',
      },
    ],

  })
})


