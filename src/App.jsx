import React, { useState, useEffect } from "react";
import "./styles/tailwind.css";
import ReactDOM from 'react-dom';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import Controls from "./components/controls"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  }

  useEffect(() => {
    const el = document.querySelector('.react-markdown-test');
    if (el) {
        setHtml(el.innerHTML);
    }
  }, [markdown]);

  const expresion = ['\n#', '\n##', '\n###', '**Bold Text**', '_Italic Text_', '__Underline Text__', '~~Strikethrough Text~~', '\n> Blockquote', '`Inline Code`', '\n-', '\n1.', '[Link Text](url)', '![Alt Text](url)', '\n---'];

  function heading1F() { setMarkdown(markdown + expresion[0]); }
  function heading2F() { setMarkdown(markdown + expresion[1]); }
  function heading3F() { setMarkdown(markdown + expresion[2]); }
  function boldF() { setMarkdown(markdown + expresion[3]); }
  function italicF() { setMarkdown(markdown + expresion[4]); }
  function underlineF() { setMarkdown(markdown + expresion[5]); }
  function strikethroughF() { setMarkdown(markdown + expresion[6]); }
  function blockquoteF() { setMarkdown(markdown + expresion[7]); }
  function codeF() { setMarkdown(markdown + expresion[8]); }
  function unlistF() { setMarkdown(markdown + expresion[9]); }
  function orlistF() { setMarkdown(markdown + expresion[10]); }
  function linkF() { setMarkdown(markdown + expresion[11]); }
  function imgF() { setMarkdown(markdown + expresion[12]); }
  function lineF() { setMarkdown(markdown + expresion[13]); }

  return (
    <div className="App">
      <header className="min-h-[25vh] bg-gray-700 flex gap-10 p-20 justify-center items-center">
        <h1 className="text-white text-3xl font-bold">Markdown Preview and HTML Converter</h1>
      </header>
      <main className="App-header min-h-[50vh] bg-gray-700 flex gap-10 px-12">
        <textarea 
          placeholder='Enter your markdown text'        
          className="w-1/3 p-5 text-2xl outline-none"
          value={markdown} 
          onChange={handleChange}
        />
        <div className="flex-1 p-5 outline-none bg-white text-black overflow-y-auto">
          <ReactMarkdown 
            className='reactMarkdownBox react-markdown-test'  
            children={markdown} 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
          />
        </div>
        <div className="flex-1 p-5 outline-none bg-white text-black overflow-y-auto">
          <div className="htmlbox">
            <p className="text-gray-600">Generated HTML:</p>
            <pre className="bg-white p-2 rounded h-full text-lg outline-none text-black overflow-y-auto">
              <code className="break-words">{html}</code>
            </pre>
          </div>        
        </div>
      </main>
      <footer className="bg-gray-700 flex gap-12 justify-center items-center min-h-[25vh] px-12">
        <Controls
          heading1={heading1F}
          heading2={heading2F}
          heading3={heading3F}
          bold={boldF}
          italic={italicF}
          underline={underlineF}
          strikethrough={strikethroughF}
          blockquote={blockquoteF}
          code={codeF}
          unorderedList={unlistF}
          orderedList={orlistF}
          link={linkF}
          image={imgF}
          horizontalLine={lineF}
        />
      </footer>
    </div>
  );
}

export default App;
