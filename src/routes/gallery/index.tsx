import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
export const Route = createFileRoute('/gallery/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <p>测试</p>
      <Link to="/gallery/2024">2024年度合集</Link>
    </div>)
}
