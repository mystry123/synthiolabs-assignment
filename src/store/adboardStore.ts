import { create } from 'zustand';
import type { Ad, Campaign, Analytics, ActivityItem, User } from '@/types';

interface AdboardState {
  // Data
  ads: Ad[];
  campaigns: Campaign[];
  analytics: Analytics;
  user: User | null;
  
  // UI State
  selectedCampaign: string | null;
  selectedAd: string | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setAds: (ads: Ad[]) => void;
  setCampaigns: (campaigns: Campaign[]) => void;
  setAnalytics: (analytics: Analytics) => void;
  setUser: (user: User) => void;
  setSelectedCampaign: (campaignId: string | null) => void;
  setSelectedAd: (adId: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Business Logic
  addAd: (ad: Omit<Ad, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateAd: (id: string, updates: Partial<Ad>) => void;
  deleteAd: (id: string) => void;
  addCampaign: (campaign: Omit<Campaign, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateCampaign: (id: string, updates: Partial<Campaign>) => void;
  deleteCampaign: (id: string) => void;
  toggleAdStatus: (id: string) => void;
  toggleCampaignStatus: (id: string) => void;
}

export const useAdboardStore = create<AdboardState>((set, get) => ({
  // Initial State
  ads: [],
  campaigns: [],
  analytics: {
    totalImpressions: 0,
    totalClicks: 0,
    totalSpent: 0,
    averageCtr: 0,
    topPerformingAd: null,
    recentActivity: [],
  },
  user: null,
  selectedCampaign: null,
  selectedAd: null,
  isLoading: false,
  error: null,

  // Setters
  setAds: (ads) => set({ ads }),
  setCampaigns: (campaigns) => set({ campaigns }),
  setAnalytics: (analytics) => set({ analytics }),
  setUser: (user) => set({ user }),
  setSelectedCampaign: (campaignId) => set({ selectedCampaign: campaignId }),
  setSelectedAd: (adId) => set({ selectedAd: adId }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  // Business Logic
  addAd: (adData) => {
    const newAd: Ad = {
      ...adData,
      id: `ad_${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ ads: [...state.ads, newAd] }));
  },

  updateAd: (id, updates) => {
    set((state) => ({
      ads: state.ads.map((ad) =>
        ad.id === id ? { ...ad, ...updates, updatedAt: new Date() } : ad
      ),
    }));
  },

  deleteAd: (id) => {
    set((state) => ({
      ads: state.ads.filter((ad) => ad.id !== id),
      selectedAd: state.selectedAd === id ? null : state.selectedAd,
    }));
  },

  addCampaign: (campaignData) => {
    const newCampaign: Campaign = {
      ...campaignData,
      id: `campaign_${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ campaigns: [...state.campaigns, newCampaign] }));
  },

  updateCampaign: (id, updates) => {
    set((state) => ({
      campaigns: state.campaigns.map((campaign) =>
        campaign.id === id ? { ...campaign, ...updates, updatedAt: new Date() } : campaign
      ),
    }));
  },

  deleteCampaign: (id) => {
    set((state) => ({
      campaigns: state.campaigns.filter((campaign) => campaign.id !== id),
      selectedCampaign: state.selectedCampaign === id ? null : state.selectedCampaign,
    }));
  },

  toggleAdStatus: (id) => {
    const { ads } = get();
    const ad = ads.find((a) => a.id === id);
    if (ad) {
      const newStatus = ad.status === 'active' ? 'paused' : 'active';
      get().updateAd(id, { status: newStatus });
    }
  },

  toggleCampaignStatus: (id) => {
    const { campaigns } = get();
    const campaign = campaigns.find((c) => c.id === id);
    if (campaign) {
      const newStatus = campaign.status === 'active' ? 'paused' : 'active';
      get().updateCampaign(id, { status: newStatus });
    }
  },
}));
