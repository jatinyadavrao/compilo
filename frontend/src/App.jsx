import React, { useState } from 'react';
import axios from 'axios';
import { FaPlay } from 'react-icons/fa';

import CodeEditor from './components/CodeEditor';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import AskAISection from './components/AskAiSection';
import './App.css'; // Ensure this file contains any necessary global styles or custom fonts

const App = () => {
  const [code, setCode] = useState(`import java.util.Scanner;
public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int number = scanner.nextInt();
    System.out.println(number);
  }
}`);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRunCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/compile', { code, input });
      setOutput(response.data.output);
    } catch (error) {
      console.error('Error running code:', error);
      setOutput('Failed to execute code');
    } finally {
      setLoading(false);
    }
  };

  const handleAskAI = async () => {
    try {
      // Replace the URL and payload with your actual endpoint and data
      // const response = await axios.post('http://localhost:5000/ask-ai', { code });
      // return response.data.suggestions || 'No suggestions available';
      console.log('right now ai not working')
    } catch (error) {
      console.error('Error asking AI:', error);
      return 'Failed to get suggestions';
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-900 text-gray-300 flex flex-col">
      <header className="flex items-center justify-between p-4 bg-gray-800">
        <h1 className="text-4xl font-bold text-white font-roboto-mono">
          COM<span className='text-4xl font-bold text-yellow-600 font-roboto-mono'>PILO</span>
        </h1>
        <div className="relative group">
          <button
            onClick={handleRunCode}
            disabled={loading}
            className="text-white p-2 rounded-full transition"
          >
            <FaPlay className="text-xl" />
          </button>
          <div className="absolute  hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
            Run
          </div>
        </div>
      </header>
      <div className="flex flex-grow p-4">
        <div className="w-[60%] h-full mr-4">
          <CodeEditor code={code} setCode={setCode} />
        </div>
        <div className="flex flex-col w-[40%] h-full">
          <div className="h-[20%] mb-4">
            <InputSection input={input} setInput={setInput} />
          </div>
          <div className="h-[35%] mb-4">
            <OutputSection output={output} loading={loading} />
          </div>
          <div className="h-[45%]">
            <AskAISection handleAskAI={handleAskAI} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
