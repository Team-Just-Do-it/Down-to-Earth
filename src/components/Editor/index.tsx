import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { EditorProps } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const Editor = dynamic<EditorProps>(
  () => import("@toast-ui/react-editor").then((m) => m.Editor),
  { ssr: false }
);

const ToastEditorComponent: React.FC = () => {
  return (
    <Editor
      initialValue="상세 설명"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
};

export default ToastEditorComponent;
