export interface IAdImage {
  key: string;
  width: number;
  height: number;
}

export interface IAdVideo extends IAdImage {
  duration: number;
}

export interface ICreateAdCampaign {
  // --- core ---
  type?: "display" | "video";
  businessName?: string;
  headline?: string; // Ad headline
  description?: string;
  finalURL?: string;

  // --- creatives ---
  images?: IAdImage[];
  logos?: string[];
  videos?: IAdVideo[];

  // --- bidding & budgets ---
  bidding?: string;
  totalBudgetCents?: number; // Total budget in chosen currency
  bidAmountCents?: number; // Cost per click/view/impression

  // --- targeting ---
  locations?: string[]; // e.g., ["IN", "US-CA"]
  languages?: string[]; // e.g., ["en","hi"]

  // --- lifecycle ---
  startDate?: string;
  endDate?: string;
  step?: string;
}

export interface IUpdateAdCampaign extends ICreateAdCampaign {
  // --- bidding & budgets ---
  dailyBudgetCents?: number;
  spentTodayCents?: number;
  spentTotalCents?: number;
  pacing?: "even" | "asap";

  // --- targeting ---
  sites?: string[]; // domains/bundles
  slots?: string[]; // "300x250","320x50","preroll"
  devices?: string[]; // "web","android","ios","ott"
  kv?: { [key: string]: string[] }; // { genre: ["music"], plan:["free"] }

  // --- lifecycle ---
  status?:
    | "active"
    | "paused"
    | "completed"
    | "inreview"
    | "suspended"
    | "readyToSubmit"
    | "draft";
}

export interface IActionOnCampaign {
  id: string[];
  action:
    | "activate"
    | "pause"
    | "complete"
    | "inreview"
    | "suspend"
    | "draft"
    | "readyToSubmit";
}

export interface IGetCampaignsQuery {
  page?: number;
  limit?: number;
  order?: "asc" | "desc";
  sortBy?: string;
  id?: string;
  q?: string;
  slug?: string;
  select?: string;
  filters?: object;
}

export interface IAdCampaign {
  // --- core ---
  _id: string;
  type: "display" | "video";
  businessName: string; // Advertiser/business name
  headline: string; // Ad headline
  description: string; // Ad description
  finalURL: string; // Landing page after click

  // --- creatives ---
  images: IAdImage[]; // Ad creative images
  logos: string[]; // Brand logos
  videos: IAdVideo[]; // Video creatives

  // --- bidding & budgets ---
  bidding: string; // "CPC", "CPV", "CPM", etc.
  bidAmountCents: number; // Cost per click/view/impression
  dailyBudgetCents: number; // Daily budget in chosen currency
  totalBudgetCents: number; // Total budget in chosen currency
  spentTodayCents: number; // Spent today in chosen currency
  spentTotalCents: number; // Spent total in chosen currency
  pacing: "even" | "asap"; // even means even distribution across days or asap means as soon as possible

  // --- targeting ---
  locations: string[]; // e.g., ["IN", "US-CA"]
  languages: string[]; // e.g., ["en","hi"]
  sites: string[]; // domains/bundles
  slots: string[]; // "300x250","320x50","preroll"
  devices: string[]; // "web","android","ios","ott"
  kv: { [key: string]: string[] }; // { genre: ["music"], plan:["free"] }

  // --- lifecycle ---
  startDate: string | Date;
  endDate: string | Date;
  status:
    | "active"
    | "paused"
    | "completed"
    | "inreview"
    | "suspended"
    | "draft"
    | "readyToSubmit";
  step: string;

  // --- metrics (aggregated) ---
  clicks: number; // Total clicks received
  impressions: number; // Total times ad shown
  skips: number; // Total times ad skipped
  ctr: number; // Click-through rate (clicks / impressions) * 100
  totalSpentCents: number; // Total amount spent

  // --- caps ---
  freqCapN: number; // how many times
  freqCapWindowSec: number; // time window in seconds

  // Audit & meta
  createdAt: string;
  updatedAt: string;
}

export interface IGetAdsQuery {
  type?: "display" | "video";
  duration?: number;
  limit?: number;
}

export interface IServeAd {
  adType: "video" | "display";
  position: number | undefined;
  skippableAfter: number | undefined;
  mediaUrl: string;
  clickUrl: string;
  overlay: {
    logo: string;
    headline: string;
    description: string;
  };
  tracking: {
    impression: string;
    click: string;
    skip: string;
  };
}

export interface IGenerateAdQuery {
  url: string;
}

export interface IAutoGenerate {
  metadata: {
    title: string;
    description: string;
    url: string;
    favicon: string | null;
  };
  ads: {
    headlines: string[];
    descriptions: string[];
  };
}
