import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // استایل Quill

interface TextEditorProps {
   value: any,
   onChange: any
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function TextEditor({ value, onChange }: TextEditorProps) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
      [{ 'direction': 'rtl' }]
    ],
  };

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "color",
        "background",
        "align",
        "link",
        "image",
      ]}
      theme="snow"
      placeholder="متن خود را وارد کنید..."
    />
  );
}
