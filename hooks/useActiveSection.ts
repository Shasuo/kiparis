import { useEffect, useState } from 'react';

interface Section {
  id: string;
  name: string;
}

export function useActiveSection(sections: Section[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = null;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const topOffset = rect.top;

        if (topOffset <= 250) {
          currentActive = section.name;
        } else {
          break;
        }
      }

      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, activeSection]);

  return activeSection;
}