import React from 'react';

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg h-full w-full flex">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-full bg-transparent text-white font-mono text-sm outline-none resize-none"
        spellCheck="false"
      ></textarea>
    </div>
  );
};

export default CodeEditor;
