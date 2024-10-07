import MenuBar from "@/components/common/MenuBar";
import Editor from "@/components/Editor";
import React from "react";

const Document: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <MenuBar />
      <div className="flex-grow container mx-auto p-4">
        <Editor />
      </div>
    </div>
  );
};

export default Document;
