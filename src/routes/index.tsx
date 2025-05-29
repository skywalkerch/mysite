import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from '@tanstack/react-router';
export const Route = createFileRoute('/')({
  component: App,

})
import Navigation from '@/components/for-navigationbar/Navigation';

function App() {
  const [text, setText] = useState('')
  useEffect(() => {
    const getHitokoto = async () => {
      try {
        const res = await fetch("https://v1.hitokoto.cn/?encode=json");
        if (!res.ok) {
          throw new Error("一言接口请求失败");
        }
        const data = await res.json();
        setText(data.hitokoto);
      }
      catch (error) {
        setText("任何人的一生都足以书写一本传奇")
      }
    }
    getHitokoto()
  }, [])

  return (
    <div className='px-2 sm:px-12 m-auto max-w-8/12 max-[760px]:max-w-full'>
      <div className='pt-16 flex flex-col justify-start'>
        <Navigation />
        <Typewriter options={{
          strings: [text],
          loop: true,
          autoStart: true,
          delay: 'natural',
        }} />
        <p className='mt-16 mb-4 text-3xl text-[#d44375] font-bold'>近期发布</p>
        <ul className='flex flex-auto post-list text-xl'>
          <li className='flex flex-col lg:flex-row'>
            <span className='mr-4 '><time dateTime="2023-08-01">2023-08-01</time></span>
            <span className='underline hover:decoration-wavy hover:decoration-[#d44375] decoration-dashed underline-offset-2'><Link to="/about">关于页面</Link></span>
          </li>
        </ul>
      </div>
    </div>

  )
}
