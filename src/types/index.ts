export interface Ad {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  targetUrl: string;
  status: 'active' | 'paused' | 'draft';
  impressions: number;
  clicks: number;
  ctr: number;
  budget: number;
  spent: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spent: number;
  startDate: Date;
  endDate: Date;
  ads: Ad[];
  targetAudience: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Analytics {
  totalImpressions: number;
  totalClicks: number;
  totalSpent: number;
  averageCtr: number;
  topPerformingAd: Ad | null;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: 'ad_created' | 'campaign_started' | 'budget_updated' | 'ad_paused';
  message: string;
  timestamp: Date;
  relatedId?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'manager' | 'viewer';
}
