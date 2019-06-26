import { useEffect } from 'react';

export const useIntersectionObserver = ({
  onIntersect,
  root,
  target,
  threshold = 1.0,
  rootMargin = '0px',
}) => {
  useEffect(() => {
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(onIntersect, {
      root: root ? root.current : null,
      rootMargin,
      threshold,
    });

    observer.observe(target.current);
    return () => {
      observer.unobserve(target.current);
    };
  });
};
