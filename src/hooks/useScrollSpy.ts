import { useEffect } from 'react';

export const useScrollSpy = (setActiveSection: (section: string) => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'servicios', 'productos', 'blog', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);
};