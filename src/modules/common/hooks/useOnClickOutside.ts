/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useEffect } from 'react';

export function useOnClickOutside(ref: MutableRefObject<any>, handler: (event: any) => void) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
