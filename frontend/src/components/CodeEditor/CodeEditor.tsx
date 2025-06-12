import { useState } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { Button } from '../Button/Button';

interface CodeEditorProps {
  onRunCode: (code: string) => Promise<void>;
  error?: string;
}

export const CodeEditor = ({ onRunCode, error }: CodeEditorProps) => {
  const [code, setCode] = useState('# Enter your code here');

  const { setContainer } = useCodeMirror({
    extensions: [python()],
    value: code,
    height: '70vh',
    width: '100%',
    theme: 'dark',
    onChange: (value) => setCode(value),
  });

  const handleRunCode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    await onRunCode(code);
  };

  return (
    <div className="w-1/2">
      <h1 className="text-3xl font-semibold mb-4 text-center">Code Area</h1>
      <div ref={setContainer} className="mb-4" />
      <div className="flex flex-row gap-4">
        <Button onClick={handleRunCode} variant="primary">
          Run Code
        </Button>
        
      </div>
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
}; 