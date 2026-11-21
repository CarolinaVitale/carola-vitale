import { useEffect } from 'react';

export default function useScrollReveal(root) {
  useEffect(() => {
    const container = root.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!container) return undefined;
    const elements = container.querySelectorAll('h2, .pop-about-copy > p, .home-work-intro > p, .pop-contact p, .little-things > p, .little-copy p, .pop-button, .selected-work-all, .selected-project, .pop-highlight, .home-work-line, .craft-sticker, .etsy-review, .instagram-stat, .case-reveal');
    let observer;
    const showAll = () => {
      observer?.disconnect();
      elements.forEach(element => element.classList.add('is-revealed'));
    };
    if (!preference.matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      elements.forEach(element => {
        element.classList.add('scroll-reveal');
        observer.observe(element);
      });
    }
    const onPreferenceChange = () => { if (preference.matches) showAll(); };
    preference.addEventListener('change', onPreferenceChange);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, [root]);
}
