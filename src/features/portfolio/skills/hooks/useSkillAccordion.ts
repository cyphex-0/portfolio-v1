'use client';

import { useState, useCallback } from 'react';

export function useSkillAccordion(initialId: string | null = null) {
  const [expandedId, setExpandedId] = useState<string | null>(initialId);

  const toggleCategory = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return {
    expandedId,
    toggleCategory,
  };
}

export default useSkillAccordion;
