"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/custom/theme-provider";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="default"
      className="
      hover:rounded-full
      "
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }}
    >
      <Sun className=" rotate-0 scale-150 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-150" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
