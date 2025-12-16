import { useCallback } from 'react';

interface ScrollOptions {
  offset?: number;
  behavior?: 'smooth' | 'auto';
}

export function useScrollToSection() {
  const scrollToSection = useCallback((id: string, options?: ScrollOptions) => {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Элемент с id="${id}" не найден`);
      return;
    }

    const { offset = 0, behavior = 'smooth' } = options || {};

    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.scrollY;
    const targetScrollTop = absoluteElementTop - offset;

    window.scrollTo({
      top: targetScrollTop,
      behavior,
    });
  }, []);

  return scrollToSection;
}