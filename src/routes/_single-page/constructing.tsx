import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_single-page/constructing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='text-center text-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>此页面还在建设中！</div>
}
