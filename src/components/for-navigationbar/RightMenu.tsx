import { Link } from "@tanstack/react-router";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";
export default function RightMenu() {
    return (
        <NavigationMenu className="">
            <NavigationMenuList className="flex gap-8">
                <NavigationMenuItem>
                    <Link to="/" >
                        首页
                    </Link>
                </NavigationMenuItem>

                {/* <NavigationMenuItem>
                    <Link to="/">
                        文档
                    </Link>
                </NavigationMenuItem> */}

                {/* 
                <NavigationMenuItem>
                    <Link to="/about" >
                        关于
                    </Link>
                </NavigationMenuItem> */}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
