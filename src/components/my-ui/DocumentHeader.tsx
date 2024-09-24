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
    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700">Recent documents</h2>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-gray-700">
              Owned by me <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Shared with me</DropdownMenuItem>
            <DropdownMenuItem>Owned by me</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="icon">
          <List className="h-5 w-5 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <AlignLeft className="h-5 w-5 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <Folder className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </div>
  )
}