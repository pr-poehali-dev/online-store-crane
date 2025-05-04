
import * as React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export type IconProps = {
  name: keyof typeof LucideIcons;
  color?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
  onClick?: () => void;
};

const Icon = ({
  name,
  color,
  size = 24,
  strokeWidth = 2,
  className,
  fallback = "CircleAlert",
  onClick,
}: IconProps) => {
  const LucideIcon = LucideIcons[name] || LucideIcons[fallback];

  return (
    <LucideIcon
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      className={cn(className)}
      onClick={onClick}
    />
  );
};

export default Icon;
