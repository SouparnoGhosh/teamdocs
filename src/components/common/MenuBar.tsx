import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ProfileAvatar from "./ProfileAvatar";
import GoogleDocsOutlineIcon from "@/assets/icons/GoogleDocsOutlineIcon";
import ShareMenu from "./ShareMenu";
const menuItems = [
  "File",
  "Edit",
  "View",
  "Insert",
  "Format",
  "Tools",
];

export default function MenuBar() {
  return (
    <div className="flex items-center justify-between bg-white border-b border-slate-200 px-2 py-1">
      <div className="flex">
        <GoogleDocsOutlineIcon className="w-12 h-12 mt-1 text-blue-600" />
        <div className="flex-col">
          <div className="px-1 flex items-center font-medium text-lg text-slate-700">
            Untitled document
          </div>

          <div className="flex items-center space-x-1">
            {menuItems.map((item) => (
              <DropdownMenu key={item}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-slate-700 hover:bg-slate-100 px-1 py-1 h-auto text-sm"
                  >
                    {item}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-slate-700 border-slate-200">
                  <DropdownMenuItem className="hover:bg-slate-100">
                    Menu Item 1
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-100">
                    Menu Item 2
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-100">
                    Menu Item 3
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ShareMenu />
        <ProfileAvatar />
      </div>
    </div>
  );
}
