import React from 'react';

interface HomeProps {
  className?: string;
  size?: number;
  color?: string;
}

const Home: React.FC<HomeProps> = ({ 
  className = '', 
  size = 20, 
  color = '#232625' 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 2L3 8V18H8V12H12V18H17V8L10 2Z"
        fill={color}
      />
    </svg>
  );
};

export default Home;

