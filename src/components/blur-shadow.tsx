import React from "react";

interface BlurShadowProps {
  className?: string;
}

const BlurShadow: React.FC<BlurShadowProps> = ({ className = "" }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t   to-transparent pointer-events-none z-50 ${className}`}
    />
  );
};

export default BlurShadow;
