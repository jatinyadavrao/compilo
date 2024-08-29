import React from 'react';

const OutputSection = ({ output,loading }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg h-full flex flex-col">
      <h2 className="text-white font-semibold mb-2 h-[15%]">Output:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto flex-1 h-[80%]">
        {loading? "Loading Result Please wait...":output }
      </pre>
    </div>
  );
};

export default OutputSection;
