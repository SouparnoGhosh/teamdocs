import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor: React.FC = () => {
  const [content, setContent] = useState("");

  const handleChange = (value: string) => {
    setContent(value);
  };

  const toolbarOptions = [
    [{ font: [] }] /* Font family */,
    [{ size: ["small", false, "large", "huge"] }] /* Font size */,
    ["bold", "italic", "underline"] /* Bold, italic, underline */,
    [{ list: "ordered" }, { list: "bullet" }] /* Ordered and bullet list */,
    [{ align: [] }] /* Text alignment */,
    ["link", "image"] /* Link and image */,
    ["clean"] /* Remove formatting */,
  ];

  return (
    <div className="flex justify-center p-4">
      <div className="w-[8.5in] h-[11in] p-4 pb-16 bg-white rounded shadow-md overflow-hidden">
        <ReactQuill
          className="h-full"
          value={content}
          onChange={handleChange}
          modules={{ toolbar: toolbarOptions }}
          formats={[
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "list",
            "bullet",
            "align",
            "link",
            "image",
          ]}
        />
      </div>
    </div>
  );
};

export default Editor;