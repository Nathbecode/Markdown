import React from 'react';

const clasName = 'text-lg bg-indigo-700 hover:bg-indigo-500 text-white py-1.5 px-4 rounded w-[170px] rounded-md';

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
}) {
  return (
    <div className="text-3xl font-bold">
      <section className="flex flex-wrap gap-3">
        <button
          onClick={heading1}
          className={clasName}>
          Heading 1
        </button>
        <button
          onClick={heading2}
          className={clasName}>
          Heading 2
        </button>
        <button
          onClick={heading3}
          className={clasName}>
          Heading 3
        </button>
        <button
          onClick={bold}
          className={clasName}>
          Bold
        </button>
        <button
          onClick={italic}
          className={clasName}>
          Italic
        </button>
        <button
          onClick={underline}
          className={clasName}>
          Underline
        </button>
        <button
          onClick={strikethrough}
          className={clasName}>
          Strikethrough
        </button>
        <button
          onClick={blockquote}
          className={clasName}>
          Blockquote
        </button>
        <button
          onClick={code}
          className={clasName}>
          Code
        </button>
        <button
          onClick={unorderedList}
          className={clasName}>
          Unordered List
        </button>
        <button
          onClick={orderedList}
          className={clasName}>
          Ordered List
        </button>
        <button
          onClick={link}
          className={clasName}>
          Link
        </button>
        <button
          onClick={image}
          className={clasName}>
          Image
        </button>
        <button
          onClick={horizontalLine}
          className={clasName}>
          Horizontal Line
        </button>
      </section>
    </div>
  );
}

export default Controls;
