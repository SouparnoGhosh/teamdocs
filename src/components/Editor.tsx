import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import EditorToolbar from "@/components/EditorToolbar";
import styles from "./Editor.module.css"; // Import the CSS module

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: "Start typing here...",
      }),
    ],
    // content: "<p>Start typing here...</p>",
    editorProps: {
      attributes: {
        class: styles.editorContent, // Apply the CSS module class
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col w-full">
      <EditorToolbar editor={editor} />
      <div className="flex-grow overflow-auto container mx-auto">
        <div className="max-w-full my-8 bg-card shadow-md">
          <div className="w-full border border-border p-8 bg-card">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
