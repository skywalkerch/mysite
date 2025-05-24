import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import { useTheme } from "@/components/custom/theme-provider";

import Typewriter from 'typewriter-effect';


export const Route = createFileRoute('/')({
  component: App,
  head: () => ({
    meta: [
      { name: 'description', content: 'Hello world' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'My App',
      },
    ],

  })
})

function HeadPicture() {
  const { theme } = useTheme()
  return <img className='fixed top-0 z-0 '
    src={theme === 'dark' ? "/pictures/head-picture.png" : "/pictures/head-picture-light.jpg"} alt="head-picture" />
}
function App() {
  // Hook

  return (
    <>
      <HeadPicture />
      <div className=' z-1 relative'>

        <Typewriter
          options={{
            strings: ['>_ [数字圣殿] 核心协议启动', '**// 警告：你已突破404次元壁 //**', '[!] 系统归属：SKYWALKERCH', '[√] 反爬虫协议：允许自由漫游'],
            cursor: '_',
            autoStart: true,
            loop: true,
            delay: 'natural',
          }}

        />
      </div>
    </>
  )
}
