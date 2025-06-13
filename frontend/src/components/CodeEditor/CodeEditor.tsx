import { useState } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';

interface CodeEditorProps {
  onRunCode: (code: string) => Promise<void>;
  error?: string;
}

export const CodeEditor = ({ onRunCode, error }: CodeEditorProps) => {
  const [code, setCode] = useState('# Enter your code here');  
  const [selectedDataStructure, setSelectedDataStructure] = useState('None');

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

  const handleResetCode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCode("# Enter your code here\n");
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDataStructure(e.target.value);
  };

  const dataStructureOptions = [
    { value: 'None', label: 'Select Data Structure' },
    { value: 'List', label: 'List' },
    { value: 'Stack', label: 'Stack' },
    { value: 'Queue', label: 'Queue' },
    { value: 'Tree', label: 'Tree' },
  ];

  return (
    <div className="w-1/2">
      <h1 className="text-3xl font-semibold mb-4 text-center">Code Visualizer</h1>      
      <div ref={setContainer} className="mb-4" />
      <div className="flex flex-row gap-4">
      <Select
          value={selectedDataStructure}
          onChange={handleSelectChange}
          options={dataStructureOptions}
          className="w-[200px]"
        />
        <Button onClick={handleRunCode} variant="primary">
          Run Code
        </Button>
        <Button onClick={handleResetCode} variant="secondary">
          Reset Code
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