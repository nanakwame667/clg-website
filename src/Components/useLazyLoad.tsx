import { useState, useEffect, useRef } from "react";

export const useLazyLoad = (src: string, defaultSrc: string) => {
  const [source, setSource] = useState<string>(defaultSrc);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSource(src);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src]);

  return { source, imageRef };
};
