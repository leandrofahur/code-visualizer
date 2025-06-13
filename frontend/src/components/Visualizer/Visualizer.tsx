interface VisualizerProps {
  output: string;
}

export const Visualizer = ({ output }: VisualizerProps) => {
  return (
    <div className="w-1/2">
      <h1 className="text-3xl font-semibold mb-4 text-center">Visualizer</h1>
      <div className="p-1 bg-gray-100 border-gray-300 border border-l-0 h-[70vh] overflow-auto">      
          <pre className="whitespace-pre-wrap break-words font-mono">
            {output ? output : ""}
          </pre>        
      </div>
    </div>
  );
}; 