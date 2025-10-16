import cn from "@utils/cn";
import { StyleableFC } from "@utils/misc";
import type { MouseEvent } from "react";

type mode = "filled" | "outlined" | "text" | "icon";
type bordered = "squared" | "rounded";

const getPropsByMode: Record<mode, string> = {
  filled: "bg-primary text-white hover:bg-primary/90",
  outlined: "border border-primary text-primary hover:bg-primary/50",
  text: "text-primary hover:bg-primary/50",
  icon: "p-2",
};

const getPropsByBordered: Record<bordered, string> = {
  squared: "rounded-none",
  rounded: "rounded-lg",
};

const getPropsByExpanded = (expanded: boolean) => (expanded ? "w-full" : "");

type ButtonProps = {
  mode: mode;
  bordered: bordered;
  expanded: boolean;
  onClick?: (event: MouseEvent) => void;
  children: React.ReactNode;
};

const Button: StyleableFC<ButtonProps> = ({
  mode,
  bordered,
  expanded,
  className,
  onClick,
  children,
  style,
  ...props
}) => {
  return (
    <button
      className={cn(
        "relative justify-center items-center px-4 py-2.5",
        getPropsByBordered[bordered],
        getPropsByMode[mode],
        getPropsByExpanded(expanded),
        className
      )}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
