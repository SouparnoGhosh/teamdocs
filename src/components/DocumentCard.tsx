import React from "react";
import GoogleDocsOutlineIcon from "@/assets/GoogleDocsOutlineIcon";
import { MdMoreVert } from "react-icons/md"; // Importing kebab menu icon

const DocumentCard: React.FC = () => {
  return (
    <div className="flex flex-col h-full"> {/* Adjusted to make it a flex container */}
      <div className="relative bg-slate-200 p-4 py-3">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <GoogleDocsOutlineIcon className="w-8 h-8" />
            <div className="flex flex-col justify-end h-full ml-2">
              <p className="text-sm">Document name</p>
              <p className="text-xs text-gray-500">Updated 2 days ago</p>
            </div>
          </div>
          <MdMoreVert className="w-6 h-6" /> {/* Kebab menu icon */}
        </div>
      </div>
      <div className="bg-white flex-grow"></div>
    </div>
  );
};

export default DocumentCard;