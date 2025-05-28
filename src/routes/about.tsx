import { createFileRoute } from '@tanstack/react-router'
import { TH1, TH3, TP, TBlockquote, TList } from '@/components/custom/Typography'

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
  return <div className='m-auto max-w-7/12 relative top-10 flex flex-col  min-h-screen '>
    <TH1>关于本站</TH1>
    <TP> </TP>
    <TBlockquote>我是skywalkerch
      <img src="/pictures/mario.jpg" alt="" className='w-10 h-10 rounded-full inline' />
      ，一个喜欢用马里奥做头像的普通人，和来自遥远的你一样生活在这个平凡的世界。</TBlockquote>
    <TH3>网站简介</TH3>
    <TP>
      这里是我的个人网站，记录一些自己的日常和学习。
    </TP>
    <TH3>联系我</TH3>
    <TBlockquote>可能你是我的朋友，也可能是我不认识的陌生人。</TBlockquote>
    <TList>
      <li> <a href="mailto://skywalkerch@outlook.com" className=' hover:underline hover:decoration-wavy'>给我发邮件</a></li>
    </TList>
  </div>

}
