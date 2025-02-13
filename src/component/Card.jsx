/* eslint-disable react/prop-types */
const Card = ({ children, className }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export { Card, CardContent };
