import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
export const Route = createFileRoute('/docs/$slug')({
  component: PostComponent,
})

import { useState } from 'react'


function PostComponent() {
  const { slug } = Route.useParams()
  const [MDX, setMDX] = useState<React.ComponentType | null>(null)
  useEffect(() => {
    const loadMDX = async () => {
      const modules = import.meta.glob('@/docs/*.mdx')
      const moduleKey = `/src/docs/${slug}.mdx`
      const mod = await (modules[moduleKey] as () => Promise<{ default: React.ComponentType }>)()
      setMDX(() => mod.default)
    }
    loadMDX()
  }, [slug])

  return (
    <div className='m-auto lg:max-w-11/12 max-[760px]:max-w-full'>
      {MDX ? <MDX /> : <div>Loading...</div>}
    </div>
  )
}