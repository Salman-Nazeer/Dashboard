function Badge({ children, className }) {
  return (
    <span className={`px-2 py-1 rounded text-white ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
