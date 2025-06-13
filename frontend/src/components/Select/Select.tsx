interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  className?: string;
}

export const Select = ({ 
  value, 
  onChange, 
  options,
  className = '' 
}: SelectProps) => {
  const baseStyles = 'p-2 rounded-md text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
  
  return (
    <select
      value={value}
      onChange={onChange}
      className={`${baseStyles} ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}; 