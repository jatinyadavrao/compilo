import React from 'react';

const InputSection = ({ input, setInput }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg h-full flex items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter input for the code..."
        className="w-full bg-gray-700 text-gray-300 font-mono text-sm outline-none px-2 py-1 rounded-md h-full"
      />
    </div>
  );
};

export default InputSection;
