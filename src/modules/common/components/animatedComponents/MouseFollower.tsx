import { useEffect, useState } from "react";

export const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setPosition({
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const tailwindClasses =
    "pointer-events-none lg:absolute fixed inset-0 z-30 transition duration-300";

  const gradientStyle = {
    background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };

  return <div className={tailwindClasses} style={gradientStyle} />;
};
