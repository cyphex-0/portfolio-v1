import type { NavigationItem } from '@/types/navigation.types';

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
] as const;

export const SECTION_IDS: readonly string[] = NAVIGATION_ITEMS.map((item) => item.sectionId);
