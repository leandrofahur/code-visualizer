import { useState } from "react";

import { useCodeMirror } from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

import { useQueryClient, useQuery } from "@tanstack/react-query";


function App() {  
  const [code, setCode] = useState("# Enter your code here");
  const [codeOutput, setCodeOutput] = useState("");
  const [health, setHealth] = useState("");
  const [error, setError] = useState("");
  // const queryClient = useQueryClient();

  const { setContainer } = useCodeMirror({
    extensions: [python()],
    value: code,
    height: "70vh",
    width: "100%",
    theme: "dark",
    onChange: (value) => {
      setCode(value);
    },
  });

  const checkHealth = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await fetch("http://localhost:8000/api/v1/health", {
        method: "GET",      
      });
      const data = await response.json();    
      setHealth(data);
      setError("");
    } catch (err) {
      setError("Health check failed");
      console.error("Health check error:", err);
    }
  }

  const runCode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await fetch("http://localhost:8000/api/v1/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language: "python" }),      
      });
      const data = await response.json();    
      setCodeOutput(data.stdout || data.stderr || JSON.stringify(data));
      setError("");
    } catch (err) {
      setError("Failed to run code");
      console.error("Run code error:", err);
    }
  }

  return (
    <div className="flex p-4 h-screen w-screen">
      <div className="w-1/2 p-1">
        <h1 className="text-3xl font-semibold mb-4 text-center">Code Visualizer</h1>      
        <div ref={setContainer} className="mb-4" />        
        <div className="flex flex-row gap-4">
          <button 
            type="button" 
            className="bg-blue-500 text-white p-2 rounded-md w-[150px] hover:bg-blue-600" 
            onClick={runCode}
          >
            Run Code
          </button>
          <button 
            type="button" 
            className="bg-red-500 text-white p-2 rounded-md w-[150px] hover:bg-red-600" 
            onClick={checkHealth}
          >
            Check Health
          </button>
        </div>
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
      </div>
      <div className="w-1/2 p-1">
        <h1 className="text-3xl font-semibold mb-4 text-center">Visualizer</h1>           
        <div className="p-4 bg-gray-100 rounded-md">
          {codeOutput && (
            <pre className="whitespace-pre-wrap break-words">
              {codeOutput}
            </pre>
          )}
        </div>   
      </div>
    </div>
  )
}

export default App
