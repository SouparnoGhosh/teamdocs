import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import EditorToolbar from "@/components/EditorToolbar";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import EditorToolBar from "@/components/EditorToolbar";
import styles from "./Editor.module.css"; // Import the CSS module

const Editor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          class: "my-custom-paragraph",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class: "my-custom-heading",
        },
      }),
      Text,
      StarterKit,
      // TextAlign.configure({
      //   types: ["heading", "paragraph"],
      // }),
      Placeholder.configure({
        placeholder: "Start typing here...",
      }),
    ],
    content: "<p>Start typing here...</p>",
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
    <div className={styles.editorContainer}>
      {/* <div className="min-h-screen bg-background flex flex-col w-full"> */}
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
