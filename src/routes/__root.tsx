import { HeadContent, Scripts, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '@/components/custom/theme-provider'

import AnimatedCursor from "react-animated-cursor"
export const Route = createRootRoute({
  component: Root,
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

function Root() {
  return (
    <ThemeProvider>
      <HeadContent />
      <div
        className='hidden min-[1000px]:inline-block'
      ><AnimatedCursor
          innerSize={10}
          outerSize={15}
          color='193, 11, 111'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]}
        /></div>
      <Outlet />
      <Scripts />
      <TanStackRouterDevtools />
    </ThemeProvider >
  )
}
