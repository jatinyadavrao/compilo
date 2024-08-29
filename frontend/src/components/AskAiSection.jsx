import React, { useState } from 'react';

const AskAISection = ({ handleAskAI }) => {
  const [result, setResult] = useState('');

  const handleButtonClick = async () => {
    const aiResult = await handleAskAI();
    setResult(aiResult);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg h-full">
      <button
        onClick={handleButtonClick}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-4"
      >
        Ask AI
      </button>
      <div className="bg-gray-900 rounded-lg p-4 overflow-auto h-[70%]">
        <h2 className="text-sm font-semibold mb-2 text-white">AI Suggestions:</h2>
        <pre className="text-gray-300 whitespace-pre-wrap">{result}</pre>
      </div>
    </div>
  );
};

export default AskAISection;
