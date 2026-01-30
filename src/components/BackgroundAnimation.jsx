import { useEffect, useState } from "react";

export default function BackgroundAnimation() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      
      {/* Top Left Green Glow */}
      <div
        className="absolute w-72 h-72 bg-green-400/30 rounded-full blur-3xl"
        style={{
          transform: `translateY(${offset * 0.2}px) translateX(-50px)`
        }}
      />

      {/* Right Side Deep Green Glow */}
      <div
        className="absolute right-10 top-40 w-96 h-96 bg-green-600/20 rounded-full blur-3xl"
        style={{
          transform: `translateY(${offset * 0.15}px)`
        }}
      />

      {/* Bottom Soft Dark Glow */}
      <div
        className="absolute bottom-10 left-1/3 w-80 h-80 bg-black/10 rounded-full blur-2xl"
        style={{
          transform: `translateY(${offset * 0.25}px)`
        }}
      />

    </div>
  );
}
