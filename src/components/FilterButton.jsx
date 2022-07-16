export const FilterButton = ({ children, onClick }) => {
  return (
    <button
      className="bg-red-600 px-6 py-2 rounded-full font-medium text-xs hover:bg-red-700 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
