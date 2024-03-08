/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

/* eslint-disable @typescript-eslint/ban-ts-comment */
export const useAddAnimationOnScroll = (
  containerRef: any,
  animationStateRef: any,
  selector: string,
) => {
  useEffect(() => {
    if (containerRef.current) {
      const elements =
        // @ts-ignore
        containerRef.current.querySelectorAll(selector);
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                entry.intersectionRatio > 0.5 &&
                // @ts-ignore
                !animationStateRef.current[entry.target.dataset.index]
              ) {
                // @ts-ignore
                const index = parseInt(entry.target.dataset.index, 10);
                const animationClass =
                  index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right";
                // @ts-ignore
                animationStateRef.current[entry.target.dataset.index] = true;
                entry.target.classList.add(animationClass);
              }
            });
          },
          {
            threshold: [0, 0.5, 1],
          },
        );

        elements.forEach((el: Element, index: number) => {
          // @ts-ignore
          el.dataset.index = index;
          observer.observe(el);
        });

        return () => elements.forEach((el: Element) => observer.unobserve(el));
      }
    }
  }, [animationStateRef, containerRef, selector]);
};
