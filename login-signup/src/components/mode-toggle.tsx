import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { setTheme } = useTheme();

  return <div></div>;
}
