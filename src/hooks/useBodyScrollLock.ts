'use client';

import { useEffect } from 'react';

/**
 * Hook to lock or unlock document body scrolling.
 * Automatically restores body overflow when unmounted or unlocked.
 */
export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLocked]);
}

export default useBodyScrollLock;
