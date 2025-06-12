import { CodeEditor } from './components/CodeEditor/CodeEditor';
import { Visualizer } from './components/Visualizer/Visualizer';
import { useCodeExecution } from './hooks/useCodeExecution';

function App() {
  const { codeOutput, error, runCode } = useCodeExecution();

  return (
    <div className="flex p-4 h-screen w-screen">
      <CodeEditor onRunCode={runCode} error={error} />
      <Visualizer output={codeOutput} />
    </div>
  );
}

export default App;
