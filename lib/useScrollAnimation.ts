"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    // Sayfa yüklendiğinde element zaten görünürse animasyonu tetikle
    const checkInitialVisibility = () => {
      if (ref.current && !hasTriggered.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        // Element viewport içindeyse animasyonu tetikle
        if (
          rect.top < windowHeight &&
          rect.bottom > 0 &&
          rect.left < windowWidth &&
          rect.right > 0
        ) {
          setIsVisible(true);
          hasTriggered.current = true;
        }
      }
    };

    // İlk kontrol - sayfa yüklendikten sonra
    const timeoutId = setTimeout(() => {
      checkInitialVisibility();
    }, 150);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          hasTriggered.current = true;
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Resize event'inde kontrol et (mobil için)
    const handleResize = () => {
      if (!hasTriggered.current && currentRef) {
        checkInitialVisibility();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

