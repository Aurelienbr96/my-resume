import { useRef, useEffect } from "react";

export function useSequentialAnimation<T extends HTMLDivElement>(
  onAnimationEnd: () => void,
  animationDuration: number,
): { ref: React.LegacyRef<T> | undefined } {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timer: string | number | NodeJS.Timeout | null | undefined = null;

    const handleAnimationEnd = () => {
      onAnimationEnd(); // Call the passed callback when animation ends
    };

    if (animationDuration && animationDuration > 200) {
      timer = setTimeout(onAnimationEnd, animationDuration - 500);
    }

    element.addEventListener("animationend", handleAnimationEnd);

    return () => {
      if (timer) clearTimeout(timer);
      element.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [animationDuration, onAnimationEnd]);

  return { ref };
}
