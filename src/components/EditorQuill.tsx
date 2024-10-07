import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolbar from "@/components/EditorToolbar";

const SimpleGoogleDocsEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start typing here...</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <EditorToolbar editor={editor} />
      <div className="flex-grow overflow-auto">
        <div className="max-w-[816px] mx-auto my-8 bg-card shadow-md">
          <div className="w-full border border-border mx-auto p-8 bg-card">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleGoogleDocsEditor;
