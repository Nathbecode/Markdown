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

  const [markdown, setMarkdown] =useState('')
  const [html, setHtml] = useState("")
  // `# This is a header
  // and some **bold** text`

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  useEffect(() => {
    const el = document.querySelector('.react-markdown-test');
    if (el) {
        setHtml(el.innerHTML);
    }
}, [markdown]);

  return (
    <div className="App">
      <header className="max-h-96 bg-gray-700 flex gap-10 p-20 justify-center items-center">
        <h1 className="text-white text-3xl text-bold">Markdown to HTML Converter</h1>
      </header>
      <main className="App-header bg-gray-700 flex gap-10 p-20">
        <textarea 
        placeholder='Enter your markdown text'        
        className="w-1/2 h-screen/2 p-5 text-2xl 
        outline-none"
        value={markdown} 
        onChange={(e)=>handleChange(e)}
        />
        <div 
          className="w-1/2 h-screen/2 p-5 
          text-lg text-bold outline-none bg-white 
          text-black overflow-y-auto">
          <ReactMarkdown 
          className='reactMarkdownBox react-markdown-test hidden'  
          children={markdown} 
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}/>
            <div className="htmlbox ">
              <p className="text-gray-600">Generated HTML:</p>
              <pre className="bg-white p-2 rounded h-full text-lg 
                  outline-none bg-white text-black overflow-y-auto ">
              <code className="break-words">{html}</code>
              </pre>
          </div>        
        </div>
      </main>
      <footer>
        <Controls
        heading1={}
        heading2={}
        heading3={}
        bold={}
        italic={}
        underline={}
        strikethrough={}
        blockquote={}
        code={}
        unorderedList={}
        orderedList={}
        link={}
        image={}
        horizontalLine={}
        quoteBlock={}
        />
      </footer>
    </div>
  );
}

export default App;
