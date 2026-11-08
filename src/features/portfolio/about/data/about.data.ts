import type { EducationItem, OfflinePursuitItem } from '@/types/portfolio.types';

export const ABOUT_DATA = {
  leadStatement:
    'My name is Shah Makdum, a Software and AI Engineer who enjoys building applications that are not only functional but also intelligent.',
  paragraphs: [
    'My interest in programming started with a simple curiosity about how software works. Over time, that curiosity grew into a passion for creating scalable applications, exploring artificial intelligence, and building systems that solve real-world problems.',
    'I enjoy working across the full stack, from designing clean backend architectures and cloud-based solutions to developing AI-powered applications using modern machine learning techniques and large language models. I believe good software should be reliable, efficient, and easy to maintain, and I always strive to write clean, thoughtful code.',
  ],
  timeline: [
    {
      year: '2022',
      title: 'HSC',
      description: 'Govt BL College',
    },
    {
      year: 'Expected 2028',
      title: 'BSc in Computer Science',
      description: 'North Western University',
    },
  ] as EducationItem[],
  offlinePursuits: [
    {
      title: 'Wanderlust',
      iconType: 'compass',
      description:
        'Outside of terminal windows, I explore geography. Traveling refreshes my mental scope, forcing me to appreciate diverse human perspectives and offline cultures.',
    },
    {
      title: 'Food Culture',
      iconType: 'coffee',
      description:
        'An avid explorer of traditional food cultures. I see culinary arts as another form of design—perfect balance, raw passion, and meticulous ingredient orchestration.',
    },
  ] as OfflinePursuitItem[],
} as const;
