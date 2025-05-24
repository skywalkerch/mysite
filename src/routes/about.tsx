import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: 'About' },
      { name: 'description', content: 'About page' }
    ]
  })
})

function RouteComponent() {
  return <div>Hello "/about"!</div>
}
