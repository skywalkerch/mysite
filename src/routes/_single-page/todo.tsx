import { createFileRoute } from "@tanstack/react-router";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "@tanstack/react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export const Route = createFileRoute("/_single-page/todo")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigation = useNavigate({ from: "/" });
  return (
    <div className="m-auto  text-2xl flex-col mt-40 items-start space-x-2 justify-center max-w-150 max-[760px]:max-w-11/12">
      <Tooltip>
        <TooltipTrigger
          onClick={() => {
            navigation({ to: "/" });
          }}
        >
          网站建设计划清单
        </TooltipTrigger>
        <TooltipContent>
          <p>回到主页</p>
        </TooltipContent>
      </Tooltip>
      <div>
        <div>
          <Checkbox
            checked={false}
            id="terms2"
            className="bg-white w-4 h-4 mr-4"
          />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            添加“瞬间”页面
          </label>
        </div>

        <div>
          <Checkbox
            checked={false}
            id="terms2"
            className="bg-white w-4 h-4 mr-4"
          />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            添加搜索功能
          </label>
        </div>

        <div>
          <Checkbox
            checked={true}
            id="terms2"
            className="bg-white w-4 h-4 mr-4 "
          />
          <label
            htmlFor="terms2"
            className="text-sm text-indigo-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            [2025 5 28]：文档页面添加评论功能(部署于vercel的waline)
          </label>
        </div>

        <div>
          <Checkbox
            checked={false}
            id="terms2"
            className="bg-white w-4 h-4 mr-4"
          />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            [2025 5 29] 文档页面添加侧边栏目录(不太精致，凑合着用吧)
          </label>
        </div>

        <div>
          <Checkbox
            checked={false}
            id="terms2"
            className="bg-white w-4 h-4 mr-4"
          />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            添加友链页面
          </label>
        </div>
        <div>
          <Checkbox
            checked={true}
            id="terms2"
            className="bg-white w-4 h-4 mr-4"
          />
          <label
            htmlFor="terms2"
            className="text-sm text-indigo-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            [2025 5 27]：加入gallery播放功能(模仿一个B站up的年度摄影总结)
          </label>
        </div>
      </div>
    </div>
  );
}
