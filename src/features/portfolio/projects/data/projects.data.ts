import type { Project } from '@/types/project.types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'folder-organizer',
    title: 'FOLDER ORGANIZER',
    subtitle: 'Automated File Sorting Engine',
    category: 'DESKTOP APPLICATION / AUTOMATION',
    image: '/project-1.png',
    demoUrl: '#',
    githubUrl: 'https://github.com/cyphex-0/Folder-Organizer.git',
    tech: ['Electron', 'React 19', 'Vite', 'Node.js', 'Chokidar', 'Lucide React'],
    description:
      'A smart, automated folder organizer desktop application that monitors specified directories and automatically sorts incoming files into designated folders based on configurable rules. It runs entirely offline and features custom sorting presets, undo capabilities, and conflict resolution.',
    challenges:
      'Handling file locks and race conditions when multiple files were being moved simultaneously across the file system using chokidar. Designed a robust queueing system inside the core backend monitor to safely process and manage file operations without data loss.',
    improvements:
      'Implement AI-based file categorization using a local LLM to sort files by semantic content rather than just file extensions.',
  },
  {
    id: 'rentnest',
    title: 'RENTNEST',
    subtitle: 'MODERN RENTAL MARKETPLACE PLATFORM',
    category: 'FULL-STACK APPLICATION / PROPERTY MANAGEMENT',
    image: '/project-2.png',
    demoUrl: 'https://buyrentnest.vercel.app/',
    githubUrl: 'https://github.com/cyphex-0/RentNest',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe'],
    description:
      'RentNest is a comprehensive, full-stack rental property marketplace built to seamlessly connect tenants, landlords, and platform administrators. It features dynamic, role-based dashboards where landlords can manage property listings and availability, while tenants can browse with advanced filtering, submit rental requests, and complete secure payments via Stripe. The platform ensures a high-performance experience with responsive design, secure JWT authentication, and optimized data management.',
    challenges:
      'Implementing secure, multi-tiered role-based access control (RBAC) across both the Next.js frontend middleware and the backend architecture. Additionally, managing the complex state of property availability and ensuring reliable payment processing required careful orchestration of Stripe webhooks to prevent booking conflicts and race conditions during simultaneous rental requests.',
    improvements:
      'Integrate an AI-powered recommendation engine to suggest properties to tenants based on their search history and saved preferences. Furthermore, implementing real-time WebSocket chat functionality between landlords and tenants would significantly streamline in-platform communication and user engagement.',
  },
];
