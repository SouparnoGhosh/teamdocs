import { useState } from "react";
import { MoreVertical, Edit2, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MoreVerticalMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-border bg-background text-foreground hover:bg-hoverPrimary hover:text-hoverPrimary-foreground transition-colors"
        >
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">More options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card text-card-foreground" align="end">
        <DropdownMenuItem
          className=" hover:!bg-hoverPrimary hover:!text-hoverPrimary-foreground"
          onSelect={() => console.log("Rename")}
        >
          <Edit2 className="mr-2 h-4 w-4 text-primary" />
          <span>Rename</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:!bg-hoverPrimary hover:!text-hoverPrimary-foreground"
          onSelect={() => console.log("Delete")}
        >
          <Trash2 className="mr-2 h-4 w-4 text-primary" />
          <span>Delete</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:!bg-hoverPrimary hover:!text-hoverPrimary-foreground"
          onSelect={() => console.log("Open in New Tab")}
        >
          <ExternalLink className="mr-2 h-4 w-4 text-primary" />
          <span>Open in New Tab</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
