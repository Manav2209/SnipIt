"use client";
import CodeEditor from "@/components/CodeEditor";
import MenuBar from "@/components/MenuBar";
import { fonts, themes } from "@/lib/options";
import { codeAtom } from "@/store/codeAtom";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
export default function Home() {
  const code = useRecoilValue(codeAtom);
  const theme = code.theme;
  const fontStyle = code.fontStyle;


  // Track whether the component is mounted
  const [mounted, setMounted] = useState(false);

  const editorRef = useRef<HTMLDivElement>(null);

  // Ensure client-side only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Skip rendering until the component is mounted


  return (
    <main className="flex flex-col relative justify-center items-center h-[100vh] ">
      <link rel="stylesheet" href={themes[theme].theme} />
      <link
        rel="stylesheet"
        href={fonts[fontStyle].src}
        crossOrigin="anonymous"
      />
      <div ref={editorRef} className="z-0">
        <CodeEditor />
      </div>
      <div className="absolute top-[80%] z-10">
        <MenuBar reff={editorRef}/>
      </div>
    </main>
  );
}
