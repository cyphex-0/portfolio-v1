import type { SkillCategory } from '@/types/portfolio.types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-ml',
    index: '01',
    title: 'AI & Machine Learning',
    iconType: 'cpu',
    summary: 'Architecting intelligent pipelines, agentic workflows, and semantic interfaces.',
    skills: [
      { name: 'LLM Development', level: 90, description: 'Gemini API, OpenAI API, Hugging Face' },
      { name: 'RAG & AI Agents', level: 85, description: 'LangChain, RAG Pipelines, Agentic Workflows' },
    ],
  },
  {
    id: 'backend',
    index: '02',
    title: 'Backend Engineering',
    iconType: 'server',
    summary: 'Building high-throughput, secure server nodes and relational schemas.',
    skills: [
      { name: 'Server Development', level: 92, description: 'Node.js, Express.js, FastAPI' },
      { name: 'API Engineering', level: 88, description: 'REST APIs, JWT Authentication, OAuth' },
      { name: 'Databases', level: 90, description: 'PostgreSQL, MongoDB, MySQL, Redis' },
      { name: 'Architecture', level: 85, description: 'Microservices, WebSockets, Performance Optimization' },
    ],
  },
  {
    id: 'frontend',
    index: '03',
    title: 'Frontend Architecture',
    iconType: 'code',
    summary: 'Crafting responsive, editorial visual layouts with micro-interactions.',
    skills: [
      { name: 'Frameworks', level: 95, description: 'React, Next.js' },
      { name: 'Languages', level: 90, description: 'JavaScript (ES6+), TypeScript' },
      { name: 'Styling', level: 98, description: 'Tailwind CSS, Material UI, CSS3' },
      { name: 'UI Engineering', level: 88, description: 'Responsive Design, State Management, Framer Motion' },
    ],
  },
  {
    id: 'tools',
    index: '04',
    title: 'Engineering Tools & Workflows',
    iconType: 'wrench',
    summary: 'Automating developer environments, container pipelines, and compilation.',
    skills: [
      { name: 'Version Control', level: 90, description: 'Git, GitHub' },
      { name: 'Containerization', level: 85, description: 'Docker, Docker Compose' },
      { name: 'Development Tools', level: 92, description: 'VS Code, Postman, Linux, Bash' },
      { name: 'Deployment & CI/CD', level: 86, description: 'Vercel, GitHub Actions, Render, Firebase' },
    ],
  },
];
