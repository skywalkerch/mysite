import { Link } from "@tanstack/react-router";
import { Image } from "primereact/image";
export default function NewNavigation() {
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
              相册
            </Link>
          </li>
          <li className="hover:underline hover:decoration-wavy   pr-4 border-r-[#d44375] border-r-[1px] border-dotted">
            <Link to="/">瞬间</Link>
          </li>
          <li className="hover:underline hover:decoration-wavy   pr-4 border-r-[#d44375] border-r-[1px] border-dotted">
            <Link to="/about">关于</Link>
          </li>
          <li className="hover:underline hover:decoration-wavy   pr-4 border-r-[#d44375] border-r-[1px] border-dotted">
            <Link to="/">搜索</Link>
          </li>
          <li className="hover:underline hover:decoration-wavy   pr-4  ">
            <Link to="/todo">计划</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
