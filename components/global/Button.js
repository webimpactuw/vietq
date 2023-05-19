export function FilledButton({ children, dark = true }) {
  return (
    <button
      className={`${
        dark
          ? "hover:bg-gray-700 hover:border-gray-600 bg-gray-900 border-gray-800 text-white"
          : "hover:bg-gray-300 hover:border-gray-500 bg-white border-gray-300 text-gray-900"
      } transition-colors cursor-pointer border text-sm rounded-full px-4 pt-1.5 pb-2.5 tracking-tight font-medium`}
    >
      {children}
    </button>
  );
}

export function OutlinedButton({ children }) {
  return <button></button>;
}
