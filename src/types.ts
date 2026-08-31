export type ViewMode = 'slides' | 'presenter' | 'overview' | 'doc' | 'prototype' | 'calculator';

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  tagline?: string;
  speakerNotes: string;
  keyPoints: string[];
  metrics?: { label: string; value: string; change?: string; desc?: string }[];
  content: SlideContent;
}

export type SlideContent =
  | { type: 'hero'; heading: string; punchline: string; badges: string[]; ctaText: string }
  | { type: 'problem'; problems: { icon: string; title: string; desc: string; stat: string }[] }
  | { type: 'solution'; pillars: { icon: string; title: string; desc: string; benefit: string }[] }
  | { type: 'features'; coreFeatures: { id: string; name: string; tag: string; desc: string; details: string[]; icon: string; highlight: string }[] }
  | { type: 'architecture'; modules: { title: string; tech: string; items: string[] }[] }
  | { type: 'market'; tam: string; sam: string; som: string; growthRate: string; stats: { title: string; value: string; note: string }[] }
  | { type: 'business_model'; streams: { name: string; type: string; share: string; desc: string; example: string }[]; unitEconomics: { cac: string; ltv: string; aov: string; payback: string } }
  | { type: 'target_audience'; personas: { role: string; profile: string; painPoint: string; solution: string; share: string }[] }
  | { type: 'competition'; competitors: { name: string; type: string; pros: string; cons: string; tourestEdge: string }[]; matrix: { feature: string; tourest: boolean; booking: boolean; tripadvisor: boolean; localAgencies: boolean }[] }
  | { type: 'roadmap'; phases: { period: string; title: string; status: 'completed' | 'current' | 'planned'; deliverables: string[] }[] }
  | { type: 'financials'; years: { year: string; users: string; bookings: string; revenue: string; netProfit: string }[]; milestones: string[] }
  | { type: 'team'; members: { name: string; role: string; bio: string; prevExp: string; iconBg: string }[] }
  | { type: 'investment'; askAmount: string; equity: string; runway: string; allocation: { category: string; percent: number; amount: string; desc: string }[] }
  | { type: 'conclusion'; summaryPoints: string[]; contacts: { email: string; phone: string; web: string; address: string; telegram: string } };

export interface CityGuide {
  id: string;
  name: string;
  region: string;
  image: string;
  badge: string;
  rating: number;
  attractionsCount: number;
  description: string;
  popularSpots: string[];
}

export interface TourGuideProfile {
  id: string;
  name: string;
  languages: string[];
  city: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  hourlyRate: string;
  verified: boolean;
  specialty: string;
}
