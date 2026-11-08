import type { ProfileConfig } from '@/types/profile.types';

export const PROFILE_CONFIG: ProfileConfig = {
  name: 'Shah Makhdum',
  brandName: 'MAKHDU.M',
  role: 'Software & AI Engineer',
  location: 'BASED IN BANGLADESH',
  status: 'SYS_STATUS: ACTIVE',
  email: 'contact.makhdum@gmail.com',
  phone: '+8801903458910',
  phoneFormatted: '+880 1903458910',
  whatsappUrl: 'https://wa.me/8801903458910',
  socialLinks: {
    github: {
      label: 'GitHub',
      url: 'https://github.com/cyphex-0',
      platform: 'github',
    },
    linkedin: {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shahmakhdum/',
      platform: 'linkedin',
    },
    whatsapp: {
      label: 'WhatsApp Link',
      url: 'https://wa.me/8801903458910',
      platform: 'whatsapp',
    },
  },
} as const;
