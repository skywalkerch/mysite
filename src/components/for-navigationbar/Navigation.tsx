import { Link } from "@tanstack/react-router";
import { SiTencentqq } from "react-icons/si";
import { FaGithub, FaTelegram, FaEnvelope } from "react-icons/fa";
import { Image } from "primereact/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Navigation() {
  return (
    <div className="pl-2 mb-8 flex max-w-5xs">
      <Image
        src="/pictures/mario.jpg"
        alt="头像"
        preview
        pt={{ image: { className: "rounded-full w-16 h-16 " } }}
      />
      <div className="ml-2 ">
        <Link className="text-3xl font-bold subpixel-antialiased" to="/">
          skywalkerch
        </Link>
        <ul className="mt-2 flex flex-wrap gap-4  text-xl text-[#d44375] leading-none py-0! ">
          <li className="hover:underline hover:decoration-wavy   pr-4 border-r-[#d44375] border-r-[1px] border-dotted">
            <Link className="inline-block leading-none" to="/gallery">
              <i className="pi pi-camera" style={{ fontSize: '1rem', }} />
              相册
            </Link>
          </li>
          <li className="hover:underline hover:decoration-wavy   pr-4 border-r-[#d44375] border-r-[1px] border-dotted">
            <Link to="/constructing">
              <i className="pi pi-pencil" style={{ fontSize: '1rem', }} />
              瞬间
            </Link>
          </li>
          <li className="hover:underline hover:decoration-wavy   pr-4 border-r-[#d44375] border-r-[1px] border-dotted">
            <Link to="/about">
              <i className="pi pi-address-book" style={{ fontSize: '1rem', }} />
              关于
            </Link>
          </li>
          <li className="hover:underline hover:decoration-wavy   pr-4 border-r-[#d44375] border-r-[1px] border-dotted">
            <Link to="/constructing">
              <i className="pi pi-search" style={{ fontSize: '1rem', }} />
              搜索
            </Link>
          </li>
          <li className="hover:underline hover:decoration-wavy   pr-4  ">
            <Link to="/todo">
              <i className="pi pi-book" style={{ fontSize: '1rem', }} />
              计划
            </Link>
          </li>
        </ul>
        <div className="flex gap-4 mt-5">

          <Tooltip>
            <TooltipTrigger
              onClick={() => {
                window.open('tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=941121767', '_blank')
              }}
            >
              <SiTencentqq size='30px' className="hover:scale-125 transition-transform duration-300" />
            </TooltipTrigger>
            <TooltipContent>
              <p>QQ</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              onClick={() => {
                window.open('mailto://skywalkerch@foxmail.com', '_self')
              }}
            >
              <FaEnvelope size='30px' className="hover:scale-125 transition-transform duration-300" />

            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>


          <Tooltip>
            <TooltipTrigger
              onClick={() => {
                window.open('https://github.com/skywalkerch', '_blank')
              }}
            >
              <FaGithub size='30px' className="hover:scale-125 transition-transform duration-300" />

            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              onClick={() => {
                window.open('https://t.me/+QLzcrAlZx2c4NTY9', '_blank')
              }}
            >
              <FaTelegram size='30px' className="hover:scale-125 transition-transform duration-300" />

            </TooltipTrigger>
            <TooltipContent>
              <p>Telegram</p>
            </TooltipContent>
          </Tooltip>

        </div>
      </div>
    </div>
  );
}
