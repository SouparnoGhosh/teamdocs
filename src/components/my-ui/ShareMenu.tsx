import { Clock, MessageSquare, Video, ChevronDown, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DocIcons() {
  const handleShareClick = () => {
    // This function would open the dialog box
    console.log("Open share dialog")
  }

  return (
    <div className="flex items-center space-x-2 bg-white p-2">
      <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-100">
        <Clock className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-100">
        <MessageSquare className="h-5 w-5" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-100">
            <Video className="h-5 w-5" />
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Start video call</DropdownMenuItem>
          <DropdownMenuItem>Present to video call</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex">
        <Button 
          variant="outline" 
          className="rounded-pill rounded-r-none border-r-0 bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300"
          onClick={handleShareClick}
        >
          <Lock className="h-4 w-4 mr-2" />
          Share
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="rounded-pill rounded-l-none px-2 bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Share with others</DropdownMenuItem>
            <DropdownMenuItem>Get link</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}