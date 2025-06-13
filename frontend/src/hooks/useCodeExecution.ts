import { useState } from 'react';
import { api } from '../services/api';

export const useCodeExecution = () => {
  const [codeOutput, setCodeOutput] = useState('');
  const [error, setError] = useState('');

  const runCode = async (code: string, type: string = "") => {
    try {
      const data = await api.runCode(code, 'python', type);
      setCodeOutput(data.stdout || data.stderr || JSON.stringify(data));
      setError('');
    } catch (err) {
      setError('Failed to run code');
      console.error('Run code error:', err);
    }
  };

  return { codeOutput, error, runCode };
}; 