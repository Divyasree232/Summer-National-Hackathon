export interface AnalysisMarker {
  label: string;
  status: "suspicious" | "warning" | "normal";
}

export interface EngagementMultiplier {
  label: string;
  percentage: number;
  status: "suspicious" | "warning" | "normal";
}

export interface AnalysisResult {
  verdict: "AUTHENTIC" | "SYNTHETIC" | "SUSPICIOUS";
  trustScore: number;
  syntheticProbability: number;
  behavioralUniformity: number;
  languagePatterns: number;
  networkInfluence: number;
  analysisTitle: string;
  analysisDescription: string;
  reasons: string[];
  markers: AnalysisMarker[];
  engagementMultipliers: EngagementMultiplier[];
  engineMode?: string;
}

export interface UserInput {
  platform: string;
  trend: string;
  accountName: string;
  postContent: string;
  likes: number | "";
  comments: number | "";
  shares: number | "";
  views: number | "";
}

export interface SampleData {
  title: string;
  input: UserInput;
}
