import MenuBar from "@/components/common/MenuBar";
import Editor from "@/components/Editor";
import EditorTipTap from "@/components/EditorTipTap";
import React from "react";

const Document: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="sticky top-0 z-10">
        <MenuBar />
      </div>
      <div className="flex-grow w-full ">
        {/* <Editor /> */}
        <Editor/>
      </div>
    </div>
  );
};

export default Document;