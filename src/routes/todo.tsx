import { createFileRoute } from "@tanstack/react-router";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "@tanstack/react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export const Route = createFileRoute("/todo")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigation = useNavigate({ from: "/" });
  return (
    <div className="m-auto  text-2xl flex-col mt-40 items-start space-x-2 justify-center max-w-60">
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
            checked={false}
            id="terms2"
            className="bg-white w-4 h-4 mr-4 "
          />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            文档页面添加评论功能
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
            文档页面添加侧边栏目录
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
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            加入相册集功能
          </label>
        </div>
      </div>
    </div>
  );
}
