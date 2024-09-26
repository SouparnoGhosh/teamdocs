import { ChevronDown, List, AlignLeft, Folder } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DocumentHeader() {
  return (
    <div className="flex justify-between items-center pb-4 border-b border-border">
      <h2 className="text-2xl font-semibold text-foreground">Recent documents</h2>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-foreground hover:!bg-hoverPrimary rounded-xl">
              Owned by me <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-card text-card-foreground rounded-xl">
            <DropdownMenuItem className="hover:!bg-hoverPrimary hover:!text-hoverPrimary-foreground">
              Shared with me
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:!bg-hoverPrimary hover:!text-hoverPrimary-foreground">
              Owned by me
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="icon">
          <List className="h-5 w-5 text-muted" />
        </Button>
        <Button variant="ghost" size="icon">
          <AlignLeft className="h-5 w-5 text-muted" />
        </Button>
        <Button variant="ghost" size="icon">
          <Folder className="h-5 w-5 text-muted" />
        </Button>
      </div>
    </div>
  )
}