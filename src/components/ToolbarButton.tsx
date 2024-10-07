import React from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolbarButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  disabled: boolean;
  isActive: boolean;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  icon: Icon,
  onClick,
  disabled,
  isActive,
}) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onClick}
      disabled={disabled}
      className={isActive ? "bg-slate-300" : ""}
    >
      <Icon className={isActive ? "h-4 w-4 text-foreground" : "h-3 w-3 text-foreground"} />
    </Button>
  );
};

export default ToolbarButton;