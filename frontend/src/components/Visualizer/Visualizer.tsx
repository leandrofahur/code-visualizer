interface VisualizerProps {
  output: string;
}

export const Visualizer = ({ output }: VisualizerProps) => {
  return (
    <div className="w-1/2">
      <h1 className="text-3xl font-semibold mb-4 text-center">Visualizer</h1>
      <div className="p-4 bg-gray-100 rounded-md h-[70vh] overflow-auto">
        {output ? (
          <pre className="whitespace-pre-wrap break-words font-mono">
            {output}
          </pre>
        ) : (
          <div className="text-gray-500 text-center">
            Run some code to see the output here
          </div>
        )}
      </div>
    </div>
  );
}; 