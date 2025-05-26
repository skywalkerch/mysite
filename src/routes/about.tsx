import { createFileRoute } from '@tanstack/react-router'
import { TH1, TH3, TP, TBlockquote, TList, TInlineCode } from '@/components/custom/Typography'

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
      这里是我的个人网站，记录一些自己的日常和学习。刚开始建立这个站点仅仅只是为了想做点有意思的东西，不得已补充了一下前端基础，然而仅仅几天的学习，前端知识掌握的并不全面，很多地方比较粗糙，不过前端的技术海洋足够宽广，为我提供了慢慢打磨的无限可能。
    </TP>
    <TP>目前网站内容十分匮乏，在初期并不去追求什么访问量，<span className='font-bold'>只是想在互联网中留下我来过的足迹，做个扫地僧即可</span>。虽然这可能听起来是一件很没有意义的行为，但是能在这里发挥自己的创意与想象对于我来说或许是一件很棒的事情呢。
      在此之前，我尝试了多种建站方案，包括<TInlineCode>hexo wordpress typecho docusaurus</TInlineCode>，虽然这些工具很纯粹，不需要使用者有足够多的前端知识，但与此同时也带来了自定义功能上的局限，我是个不喜欢给自己设限的人，因此我尝试学习了React，并利用nextjs完全了本网站的第一个demo。
    </TP>
    <TBlockquote >
      目前本网站所用的技术有<TInlineCode>Vite+React+TanStackRouter+Tailwindcss+ShadecnUI</TInlineCode>
    </TBlockquote>
    <TH3>联系我</TH3>
    <TBlockquote>可能你是我的朋友，也可能是我不认识的陌生人。</TBlockquote>
    <TList>
      <li> <a href="mailto://skywalkerch@outlook.com" className=' hover:underline hover:decoration-wavy'>给我发邮件</a></li>
    </TList>
  </div>

}
