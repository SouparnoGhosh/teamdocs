// Header.tsx
import React from 'react';

interface HeaderProps {
  heading: string;
  subheading: string;
}

const Header: React.FC<HeaderProps> = ({ heading, subheading }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold pb-2 text-foreground">{heading}</h2>
      <p className="text-muted text-left text-sm">{subheading}</p>
    </div>
  );
};

export default Header;