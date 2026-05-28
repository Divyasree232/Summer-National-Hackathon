import { UserInput } from "./types";

export const BOT_SAMPLE: UserInput = {
  platform: "Twitter/X",
  trend: "#GlobalCryptoBoost",
  accountName: "@TrendAmplifier_99",
  postContent: "🔥 HUGE OPPORTUNITY! Earn up to 500% returns in 24 hours! No risk, guaranteed payouts. Click the link in bio to join the elite group now! 🚀💰 #GlobalCryptoBoost #RichLife #CryptoFuture #Earning",
  likes: 4320,
  comments: 12,
  shares: 8940,
  views: 12500
};

export const HUMAN_SAMPLE: UserInput = {
  platform: "Twitter/X",
  trend: "#ClimateAction",
  accountName: "@sarah_k_dev",
  postContent: "Just finished looking through the latest solar cell research from MIT. The efficiency gains are promising, but grid-scale storage remains the ultimate bottleneck. What do you all think is the most viable solution for overnight load balancing? 🌱☀️",
  likes: 245,
  comments: 58,
  shares: 18,
  views: 3830
};

export const PLATFORMS = [
  { name: "Twitter/X", icon: "🐦" },
  { name: "Facebook", icon: "📘" },
  { name: "Instagram", icon: "📸" },
  { name: "TikTok", icon: "🎵" },
  { name: "YouTube", icon: "📺" },
  { name: "LinkedIn", icon: "💼" },
  { name: "Reddit", icon: "🔴" }
];

export const EXTRA_SAMPLES = [
  {
    name: "Coordinated Crypto (Bot)",
    type: "bot",
    data: BOT_SAMPLE
  },
  {
    name: "Academic Solar (Human)",
    type: "human",
    data: HUMAN_SAMPLE
  },
  {
    name: "LinkedIn PDF Bait (Bot)",
    type: "bot",
    data: {
      platform: "LinkedIn",
      trend: "#GenerativeAI",
      accountName: "@SynergyGPT_Group",
      postContent: "Incredible news! 🌟 We have integrated generative AI into 27 standard workflow processes. Efficiency is up 900%. Standard operations have been fully optimized. Like this post, comment 'GROWTH', and subscribe to get the full PDF slide deck sent directly to your screen! Let's scale up together.",
      likes: 1205,
      comments: 2432,
      shares: 41,
      views: 4890
    }
  },
  {
    name: "Rust Boba Dev (Human)",
    type: "human",
    data: {
      platform: "TikTok",
      trend: "DayInTheLife",
      accountName: "@boba.coder",
      postContent: "Day 43 of learning Rust and I still have no idea what the borrow checker wants from me but my boba was 10/10 today so we keep compiling 😭🧋 #coding #developer #productivity",
      likes: 18400,
      comments: 394,
      shares: 1202,
      views: 145000
    }
  },
  {
    name: "Subreddit Brigading (Bot)",
    type: "bot",
    data: {
      platform: "Reddit",
      trend: "r/PoliticalArena",
      accountName: "/u/AnonVote_X",
      postContent: "ALERT: Hostile takeover of the municipal ballot structure is currently underway. Check out these highly verified reports immediately. We need everyone to upvote this and cross-post to at least 5 other subreddits to bypass censorship. Link attached.",
      likes: 890,
      comments: 405,
      shares: 1230,
      views: 2400
    }
  }
];
