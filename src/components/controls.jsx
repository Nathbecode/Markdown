import React from 'react';

function Controls({
  heading1,
  heading2,
  heading3,
  bold,
  italic,
  underline,
  strikethrough,
  blockquote,
  code,
  unorderedList,
  orderedList,
  link,
  image,
  horizontalLine,
  quoteBlock,
}) {
  return (
    <div className="text-3xl font-bold">
      <section className="flex flex-wrap gap-3">
        <button
          onClick={heading1}
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-[160px]">
          Heading 1
        </button>
        <button
          onClick={heading2}
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-[160px]">
          Heading 2
        </button>
        <button
          onClick={heading3}
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-[160px]">
          Heading 3
        </button>
        <button
          onClick={bold}
          className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Bold
        </button>
        <button
          onClick={italic}
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Italic
        </button>
        <button
          onClick={underline}
          className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Underline
        </button>
        <button
          onClick={strikethrough}
          className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Strikethrough
        </button>
        <button
          onClick={blockquote}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Blockquote
        </button>
        <button
          onClick={code}
          className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Code
        </button>
        <button
          onClick={unorderedList}
          className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Unordered List
        </button>
        <button
          onClick={orderedList}
          className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Ordered List
        </button>
        <button
          onClick={link}
          className="bg-pink-700 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Link
        </button>
        <button
          onClick={image}
          className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Image
        </button>
        <button
          onClick={horizontalLine}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-[160px]">
          Horizontal Line
        </button>
        <button
          onClick={quoteBlock}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-[160px]">
          Quote Block
        </button>
      </section>
    </div>
  );
}

export default Controls;
