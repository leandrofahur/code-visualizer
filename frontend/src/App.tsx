function App() {

  const checkHealth = async () => {
    const response = await fetch("http://localhost:8000/api/v1/health", {
      method: "GET",      
    });
    const data = await response.json();
    console.log(data);
  }

  const runCode = async () => {
    const response = await fetch("http://localhost:8000/api/v1/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ code: "a=[1,2,3,4,5]; print(sum(a))", language: "python" }),
      body: JSON.stringify({ code: "a=1; b=2; console.log(a+b)", language: "javascript" }),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Code Visualizer</h1>
      <button className="bg-red-500 text-white p-2 rounded-md w-1/2" onClick={checkHealth}>Check Health</button>
      <button className="bg-blue-500 text-white p-2 rounded-md w-1/2 mt-4" onClick={runCode}>Run Code</button>
    </div>
  )
}

export default App
