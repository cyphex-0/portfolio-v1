'use client';

import { useState, useCallback, useEffect } from 'react';
import type { Project } from '@/types/project.types';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

export function useProjectDialog() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Automatically lock/unlock body scroll
  useBodyScrollLock(Boolean(selectedProject));

  const openProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Close modal when user presses Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return {
    selectedProject,
    openProject,
    closeProject,
  };
}

export default useProjectDialog;
