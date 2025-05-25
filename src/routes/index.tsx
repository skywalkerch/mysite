import { createFileRoute } from '@tanstack/react-router'
import { useTheme } from "@/components/custom/theme-provider";
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';


export const Route = createFileRoute('/')({
  component: App,
 
})

function HeadPicture() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const picturesList = [['/pictures/head-picture.png', '/pictures/head-picture-light.jpg'], ['/pictures/wallhaven-xe5jwd_2160x3840.png', '/pictures/wallhaven-w58ywp_2383x4236.png']]
  console.log(width, height)
  const index = width > 1000 ? 0 : 1
  const { theme } = useTheme()
  return (
    <img className='fixed top-0 z-0 '
      src={theme === 'dark' ? picturesList[index][0] : picturesList[index][1]} alt="head-picture" />
  )
}
function App() {





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
