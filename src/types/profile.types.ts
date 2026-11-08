export type SocialPlatform = 'github' | 'linkedin' | 'whatsapp';

export interface SocialLink {
  label: string;
  url: string;
  platform: SocialPlatform;
}

export interface ProfileConfig {
  name: string;
  brandName: string;
  role: string;
  location: string;
  status: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  socialLinks: {
    github: SocialLink;
    linkedin: SocialLink;
    whatsapp: SocialLink;
  };
}
