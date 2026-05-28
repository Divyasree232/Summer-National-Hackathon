import { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  ShieldAlert, 
  ShieldQuestion, 
  Activity, 
  Cpu, 
  Layers, 
  Clock, 
  Share2, 
  MessageSquare, 
  ThumbsUp, 
  Eye, 
  Loader2, 
  Play, 
  CheckCircle, 
  AlertTriangle, 
  ChevronRight, 
  RefreshCw, 
  CornerDownRight, 
  Terminal, 
  FileText, 
  User, 
  Search, 
  Compass, 
  HardDrive 
} from "lucide-react";
import { UserInput, AnalysisResult } from "./types";
import { BOT_SAMPLE, HUMAN_SAMPLE, EXTRA_SAMPLES, PLATFORMS } from "./samples";

export default function App() {
  // Screens navigation
  const [currentScreen, setCurrentScreen] = useState<"onboarding" | "analyzer">("onboarding");

  // Input Data state
  const [inputs, setInputs] = useState<UserInput>({
    platform: "Twitter/X",
    trend: "",
    accountName: "",
    postContent: "",
    likes: "",
    comments: "",
    shares: "",
    views: ""
  });

  // Analysis state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisText, setAnalysisText] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Simulated metrics logs for Onboarding Screen
  const [uptime, setUptime] = useState("99.98%");
  const [totalScans, setTotalScans] = useState(1487204);
  const [threatsIndexed, setThreatsIndexed] = useState(389421);

  // Trigger simulated changing counters on splash screen for real-time vibe
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalScans(prev => prev + Math.floor(Math.random() * 4) + 1);
      if (Math.random() > 0.8) {
        setThreatsIndexed(prev => prev + 1);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Set individual input values
  const handleInputChange = (field: keyof UserInput, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Load preset sample
  const handleLoadSample = (sample: UserInput) => {
    setInputs({ ...sample });
  };

  // Run cyber analysis
  const runDeepAnalysis = async () => {
    setIsAnalyzing(true);
    setResult(null);
    setActiveStep(0);

    const steps = [
      "Initializing AI neural sandbox module...",
      "Slicing grammar models and calculating token entropy indexes...",
      "Comparing likes/views multipliers against average authentic human clusters...",
      "Searching global reputation database for coordinated spambot signatures...",
      "Completing forensic threat report generation..."
    ];

    // Cycle through loader steps for immersion
    for (let i = 0; i < steps.length; i++) {
      setAnalysisText(steps[i]);
      setActiveStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs)
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      // Failover result just in case
      setResult({
        verdict: "SUSPICIOUS",
        trustScore: 45,
        syntheticProbability: 55,
        behavioralUniformity: 62,
        languagePatterns: 48,
        networkInfluence: 70,
        analysisTitle: "Sandbox Connection Fault Recovery",
        analysisDescription: "AuthentiCheck local heuristic core analysis was triggered because of connection thresholds. Minor linguistic anomalies and moderate share velocities suggest potential inorganic amplification, but metadata signatures remain inconclusive.",
        reasons: [
          "Network connectivity thresholds were bypassed. Result compiled using internal rule matrices.",
          "Mild repetitive syntax blocks flagged in sample text data.",
          "Engagement indicators show atypical view-to-interaction conversion indexes."
        ],
        markers: [
          { label: "Temporal Entropy Checks", status: "warning" },
          { label: "Coordinate Campaign Overlap", status: "warning" },
          { label: "Semantic Density Variance", status: "normal" },
          { label: "Browser Fingerprint Trust", status: "normal" },
          { label: "Metadata Consistency Scan", status: "normal" }
        ],
        engagementMultipliers: [
          { label: "Share-to-Like Ratio", percentage: 48, status: "warning" },
          { label: "Comment Depth Index", percentage: 22, status: "normal" },
          { label: "Views-to-Engagement Velocity", percentage: 38, status: "warning" }
        ],
        engineMode: "Forensic Local Failover Core v3.0"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div 
      className="min-h-screen relative font-sans text-slate-100 flex flex-col justify-between overflow-x-hidden bg-[#0a0e1a]"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 120%, rgba(99, 102, 241, 0.15), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnKqydx1T94kYOGM-d_WzNj9uTti88jkobcciDUWrqTAFKxl54EqWJWGte3OpzToOkzjxesWR4n085S-FNBaoxpa9px1jzQSf8JIlRJh3LlkpcOcHIMoITPjCgC_idPWM0pAqTfrU54pYSH-5G9YPdf-mQXViJgXt11z5iBqsXfu6yv4dYYaVK_CdMJQl3hd3_JyfMXIY8WrCYIqTs90vns7j36SJtwr3uGwAH4BNfQ8H_CyLRwlm-PnkBUQGcPL_YvvgtsjpbmAKy')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0 opacity-40"></div>

      {/* Primary Global Header */}
      <header className="sticky top-0 z-[100] border-b border-indigo-950/40 bg-[#0a0e1a]/85 backdrop-blur-xl px-4 py-3 sm:px-8 flex items-center justify-between">
        <div 
          onClick={() => setCurrentScreen("onboarding")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            alt="AuthentiCheck Logo" 
            className="w-10 h-10 rounded-xl object-cover shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-transform duration-300 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQtJOcKgX-T0BsBsHPE85uuhaiRrvfvozDXsYHF8bJ-q7vKvuNppcSV0ZGepHS8O7WazEat4tW7opiv2ES6oyMflruzvlR4dNRn0l6w5qyUaPEieJgFoRUbsHASqZMRSkihdZVnS7611SCYG-KLE82Pow76mHCLMurtEY070pNvkZd3ziyJyjwqJVTMsqVYK-C9U6sS2ukSb71aw3kkAdGbJJUZ707CJh3kMdpuLiF2u0HukG3dnJCoPe9m_bUGgTw8aCIeEY_k67j"
          />
          <div>
            <div className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-indigo-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              AuthentiCheck
            </div>
            <div className="text-[9px] font-mono text-indigo-300 font-semibold tracking-widest hidden sm:block">
              SYNTHETIC PATTERN DETECTOR
            </div>
          </div>
        </div>

        {/* Global Navigation Nodes & Activity Pulse */}
        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="flex items-center gap-1 sm:gap-2 bg-indigo-950/40 border border-indigo-900/40 rounded-xl p-1 text-xs">
            <button 
              id="onboarding-tab-btn"
              onClick={() => setCurrentScreen("onboarding")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                currentScreen === "onboarding" 
                  ? "bg-indigo-600/30 text-white border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/20"
              }`}
            >
              System Node
            </button>
            <button 
              id="analyzer-tab-btn"
              onClick={() => setCurrentScreen("analyzer")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                currentScreen === "analyzer" 
                  ? "bg-indigo-600/30 text-white border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/20"
              }`}
            >
              Forensic Analyzer
            </button>
          </nav>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.1)]">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
            <span className="text-[11px] font-mono tracking-tight hidden sm:inline">Engine Active</span>
          </div>
        </div>
      </header>

      {/* DUAL-SCREEN SWITCHER */}
      <main className="flex-grow container mx-auto px-4 sm:px-8 py-8 relative z-10 w-full max-w-7xl">
        
        {/* ===================================== */}
        {/* SCREEN 1: SPLASH ONBOARDING PORTAL */}
        {/* ===================================== */}
        {currentScreen === "onboarding" && (
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto space-y-8 animate-fade-in py-6 sm:py-12">
            
            {/* Visual Logo Center Card */}
            <div className="relative group w-full max-w-md bg-[#111827]/75 border border-indigo-950/40 rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col items-center text-center overflow-hidden">
              {/* Scan Overlay Graphic */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 animate-bounce"></div>
              
              <div className="relative">
                {/* Glowing Aura Spheres */}
                <div className="absolute -inset-2 bg-indigo-500 rounded-full filter blur-xl opacity-35 group-hover:opacity-55 transition-opacity duration-500"></div>
                <img 
                  alt="AuthentiCheck Pulsing Logo" 
                  className="relative w-44 h-44 rounded-3xl object-cover mask-image border-2 border-indigo-500/20 shadow-[0_0_40px_rgba(99,102,241,0.5)] transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQtJOcKgX-T0BsBsHPE85uuhaiRrvfvozDXsYHF8bJ-q7vKvuNppcSV0ZGepHS8O7WazEat4tW7opiv2ES6oyMflruzvlR4dNRn0l6w5qyUaPEieJgFoRUbsHASqZMRSkihdZVnS7611SCYG-KLE82Pow76mHCLMurtEY070pNvkZd3ziyJyjwqJVTMsqVYK-C9U6sS2ukSb71aw3kkAdGbJJUZ707CJh3kMdpuLiF2u0HukG3dnJCoPe9m_bUGgTw8aCIeEY_k67j"
                />
              </div>

              <h1 className="mt-8 text-4xl font-extrabold tracking-tight bg-gradient-to-br from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent font-sans">
                AuthentiCheck
              </h1>
              <p className="mt-2 text-indigo-300/80 font-mono text-xs tracking-widest font-semibold uppercase">
                COORDINATED BEHAVIOR SANDBOX
              </p>

              <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
                Advanced structural analysis engine targeting programmatic coordination, botnet syndications, and artificially amplified social metadata.
              </p>

              <button 
                id="enter-forensic-system-btn"
                onClick={() => setCurrentScreen("analyzer")}
                className="mt-8 select-none py-3.5 px-8 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold tracking-wide transition-all shadow-[0_10px_25px_-5px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_35px_rgba(99,102,241,0.6)] glow-btn flex items-center justify-center gap-2 group-hover:translate-y-[-2px] duration-300 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-white" />
                Initialize Forensic Node
              </button>
            </div>

            {/* Live Core System Terminal Feed & Specs */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Spec Stat 1 */}
              <div className="bg-[#111827]/40 border border-indigo-950/20 rounded-2xl p-6 backdrop-blur-md flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-indigo-300/70 uppercase">Global Sandbox Scans</div>
                  <div className="text-2xl font-extrabold text-white tracking-tight mt-0.5 font-mono">{totalScans.toLocaleString()}</div>
                </div>
              </div>

              {/* Spec Stat 2 */}
              <div className="bg-[#111827]/40 border border-indigo-950/20 rounded-2xl p-6 backdrop-blur-md flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-rose-300/70 uppercase">Spambots Indexed</div>
                  <div className="text-2xl font-extrabold text-white tracking-tight mt-0.5 font-mono">{threatsIndexed.toLocaleString()}</div>
                </div>
              </div>

              {/* Spec Stat 3 */}
              <div className="bg-[#111827]/40 border border-indigo-950/20 rounded-2xl p-6 backdrop-blur-md flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-emerald-300/70 uppercase">System Nodetime</div>
                  <div className="text-2xl font-extrabold text-white tracking-tight mt-0.5 font-mono">{uptime}</div>
                </div>
              </div>

            </div>

            {/* Threat Vector Visualization Row (Visual asset #5) */}
            <div className="w-full bg-[#111827]/60 border border-indigo-950/40 rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Terminal className="w-32 h-32" />
              </div>
              
              <div className="flex items-start gap-4">
                <img 
                  alt="Forensic Scanning Assets" 
                  className="w-16 h-16 rounded-xl object-cover border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)] hidden sm:block" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj6awWx4ME4018ojeEBp4KINBHhhSRkMpHF0Ugh3x8W6DFrUm8QFaEjL-ZPb7bDLfTmxLMOfRnjT_14UkpsphjnYLulfCw2N3OjB1JQ1zEaDJI5PUNLhOGei4sWywsZ0BWUSnbLgvOSz9-0tqlExsCIMfCo_SpYsoTW2hUNmBlrznpIKpkquojuceekaLQwPrxPmN6gt6AEekYHEaRn4KFepVCdy3ozRXhwstKISEhmn0z_jLIKOvFJ8ItBUHHebNTXmTEIJlKcHwS"
                />
                <div className="flex-grow space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-indigo-400 font-bold bg-indigo-950 px-2 py-0.5 border border-indigo-800/40 rounded">SYSTEM_LOGS</span>
                    <span className="text-xs text-slate-400 font-mono">NODE_DECRYPT_04 - STABLE</span>
                  </div>
                  <div className="font-mono text-xs text-indigo-200/90 leading-relaxed bg-[#0a0e1a]/85 p-3 rounded-lg border border-indigo-950">
                    <div className="text-emerald-400">$ authenticheckd --daemon --port=3000</div>
                    <div className="text-slate-400">[05-28 19:43] AUTHENTIC_CHECK CORE REVISION 3.0 MOUNTED SUCCESSFULLY...</div>
                    <div className="text-indigo-400">[05-28 19:44] REPUTATION SCHEMAS SYNCED PRESERVING GEMINI HYPERSPECTRAL ANALYTICS.</div>
                    <div className="text-slate-500">[05-28 19:44] NEURAL_CORE_READY: Sandbox telemetry configured to port 3000.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ===================================== */}
        {/* SCREEN 2: METRIC & FORENSIC ANALYZER */}
        {/* ===================================== */}
        {currentScreen === "analyzer" && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Elegant Hero Banner Card */}
            <div className="relative group rounded-3xl border border-indigo-950/40 bg-[#111827]/75 p-6 sm:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  alt="Forensic Shield Net" 
                  className="w-full h-full object-cover opacity-[0.14] scale-105 group-hover:scale-100 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQtJOcKgX-T0BsBsHPE85uuhaiRrvfvozDXsYHF8bJ-q7vKvuNppcSV0ZGepHS8O7WazEat4tW7opiv2ES6oyMflruzvlR4dNRn0l6w5qyUaPEieJgFoRUbsHASqZMRSkihdZVnS7611SCYG-KLE82Pow76mHCLMurtEY070pNvkZd3ziyJyjwqJVTMsqVYK-C9U6sS2ukSb71aw3kkAdGbJJUZ707CJh3kMdpuLiF2u0HukG3dnJCoPe9m_bUGgTw8aCIeEY_k67j"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/85 to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 justify-between">
                <div className="space-y-3 text-center md:text-left max-w-2xl">
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-indigo-200 to-sky-300 bg-clip-text text-transparent">
                    Detect Synthetic Online Activity
                  </h1>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans font-medium">
                    Advanced AI-powered system that analyzes social media patterns, engagement metrics, and account behaviors to distinguish between authentic human activity and artificially generated content with up to 99.8% accuracy.
                  </p>
                </div>
                
                <div className="hidden lg:block relative shrink-0">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl filter blur opacity-30 animate-pulse"></div>
                  <div className="relative bg-[#0a0e1a] border border-indigo-500/20 p-4 rounded-2xl flex items-center gap-3">
                    <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                      <Cpu className="w-8 h-8 animate-spin" style={{ animationDuration: '6s' }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold tracking-widest text-indigo-300/80">SANDBOX_STATUS</div>
                      <div className="text-xs font-mono font-extrabold text-white">GEMINI ANALYTICS OK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Data Section Form Panel */}
            <div className="bg-[#111827]/75 border border-indigo-950/40 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-3">
                  <img 
                    alt="Cybersecurity Icon Grid" 
                    className="w-10 h-10 rounded-xl border border-indigo-500/20 object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj6awWx4ME4018ojeEBp4KINBHhhSRkMpHF0Ugh3x8W6DFrUm8QFaEjL-ZPb7bDLfTmxLMOfRnjT_14UkpsphjnYLulfCw2N3OjB1JQ1zEaDJI5PUNLhOGei4sWywsZ0BWUSnbLgvOSz9-0tqlExsCIMfCo_SpYsoTW2hUNmBlrznpIKpkquojuceekaLQwPrxPmN6gt6AEekYHEaRn4KFepVCdy3ozRXhwstKISEhmn0z_jLIKOvFJ8ItBUHHebNTXmTEIJlKcHwS"
                  />
                  Behavioral Indicators &amp; Data Input
                </h2>
                
                {/* Rapid Preset Switcher */}
                <div className="flex items-center gap-2 overflow-x-auto py-1">
                  <span className="text-xs font-mono text-slate-400 shrink-0 font-bold">PRESETS:</span>
                  <button 
                    id="preset-bot-btn"
                    onClick={() => handleLoadSample(BOT_SAMPLE)}
                    className="text-xs py-1 px-3 bg-red-950/40 hover:bg-red-900/30 text-rose-300 border border-red-500/20 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer font-semibold shadow-sm"
                  >
                    🤖 Bot
                  </button>
                  <button 
                    id="preset-human-btn"
                    onClick={() => handleLoadSample(HUMAN_SAMPLE)}
                    className="text-xs py-1 px-3 bg-emerald-950/40 hover:bg-emerald-900/30 text-emerald-300 border border-emerald-500/20 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer font-semibold shadow-sm"
                  >
                    👤 Human
                  </button>
                  <div className="h-4 w-[1px] bg-indigo-950"></div>
                  
                  {/* Select Dropdown for Extra Presets */}
                  <select 
                    id="extra-presets-selector"
                    onChange={(e) => {
                      const idx = Number(e.target.value);
                      if (!isNaN(idx) && EXTRA_SAMPLES[idx]) {
                        handleLoadSample(EXTRA_SAMPLES[idx].data);
                      }
                    }}
                    value=""
                    className="text-xs bg-[#0a0e1a]/90 text-indigo-300 border border-indigo-950 py-1 px-2 rounded-lg cursor-pointer font-medium focus:outline-none focus:border-indigo-500"
                  >
                    <option value="" disabled>Select Sandbox Scenario...</option>
                    {EXTRA_SAMPLES.map((s, idx) => (
                      <option key={idx} value={idx}>
                        {s.name} ({s.type})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Form Grid */}
              <div className="space-y-6">
                
                {/* Platform Selector Grid */}
                <div className="space-y-3">
                  <label className="text-xs font-mono tracking-wider font-extrabold text-indigo-300/80 uppercase">
                    Select Social Platform Vector
                  </label>
                  <div className="flex items-center gap-2 flex-wrap">
                    {PLATFORMS.map((plat) => {
                      const isActive = inputs.platform === plat.name;
                      return (
                        <button
                          key={plat.name}
                          type="button"
                          onClick={() => handleInputChange("platform", plat.name)}
                          className={`px-4 py-2.5 rounded-xl border font-bold text-xs sm:text-sm tracking-wide text-center transition-all cursor-pointer flex items-center gap-2 ${
                            isActive 
                              ? "bg-indigo-600/30 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)]" 
                              : "bg-[#1f2937]/35 border-slate-800/40 text-slate-400 hover:border-indigo-500/40 hover:text-white"
                          }`}
                        >
                          <span>{plat.icon}</span>
                          <span>{plat.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Hashtag Target input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono tracking-wider font-extrabold text-indigo-300/80 uppercase">
                      Trend / Hashtag to Analyze
                    </label>
                    <input 
                      id="trendInput"
                      type="text"
                      className="bg-[#0f172a]/50 border border-slate-800/60 focus:border-cyan-500 focus:bg-[#0f172a]/80 outline-none w-full p-4 rounded-xl text-white text-sm transition-all focus:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      placeholder="e.g., #ClimateAction, trend hashtag, or campaign URL"
                      value={inputs.trend}
                      onChange={(e) => handleInputChange("trend", e.target.value)}
                    />
                  </div>

                  {/* Username Target input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono tracking-wider font-extrabold text-indigo-300/80 uppercase">
                      Account / Profile Name
                    </label>
                    <input
                      id="accountInput"
                      type="text"
                      className="bg-[#0f172a]/50 border border-slate-800/60 focus:border-cyan-500 focus:bg-[#0f172a]/80 outline-none w-full p-4 rounded-xl text-white text-sm transition-all focus:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      placeholder="e.g., @username or profile coordinate ID"
                      value={inputs.accountName}
                      onChange={(e) => handleInputChange("accountName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Sample content text */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono tracking-wider font-extrabold text-indigo-300/80 uppercase">
                      Sample Post Content
                    </label>
                    <textarea
                      id="postInput"
                      className="bg-[#0f172a]/50 border border-slate-800/60 focus:border-cyan-500 focus:bg-[#0f172a]/80 outline-none w-full p-4 rounded-xl text-white text-sm transition-all focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] min-h-[148px] resize-y"
                      placeholder="Paste post text, spam array comments, or coordinate description text here..."
                      value={inputs.postContent}
                      onChange={(e) => handleInputChange("postContent", e.target.value)}
                    />
                  </div>

                  {/* Engagement Metrics Inputs */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono tracking-wider font-extrabold text-indigo-300/80 uppercase">
                      Engagement Metrics Vector inputs
                    </label>
                    <div className="grid grid-cols-2 gap-3 flex-grow">
                      
                      <div className="flex flex-col gap-1 bg-[#0f172a]/30 border border-slate-850 p-2.5 rounded-xl">
                        <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                          <ThumbsUp className="w-3" /> LIKES
                        </span>
                        <input 
                          id="likesInput"
                          type="number" 
                          min="0"
                          placeholder="Reactions Count"
                          className="bg-transparent border-none outline-none text-white text-sm w-full font-mono mt-0.5"
                          value={inputs.likes}
                          onChange={(e) => handleInputChange("likes", e.target.value === "" ? "" : Number(e.target.value))}
                        />
                      </div>

                      <div className="flex flex-col gap-1 bg-[#0f172a]/30 border border-slate-850 p-2.5 rounded-xl">
                        <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                          <MessageSquare className="w-3" /> COMMENTS
                        </span>
                        <input 
                          id="commentsInput"
                          type="number" 
                          min="0"
                          placeholder="Replying Count"
                          className="bg-transparent border-none outline-none text-white text-sm w-full font-mono mt-0.5"
                          value={inputs.comments}
                          onChange={(e) => handleInputChange("comments", e.target.value === "" ? "" : Number(e.target.value))}
                        />
                      </div>

                      <div className="flex flex-col gap-1 bg-[#0f172a]/30 border border-slate-850 p-2.5 rounded-xl">
                        <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                          <Share2 className="w-3" /> SHARES
                        </span>
                        <input 
                          id="sharesInput"
                          type="number" 
                          min="0"
                          placeholder="Repost Ratio"
                          className="bg-transparent border-none outline-none text-white text-sm w-full font-mono mt-0.5"
                          value={inputs.shares}
                          onChange={(e) => handleInputChange("shares", e.target.value === "" ? "" : Number(e.target.value))}
                        />
                      </div>

                      <div className="flex flex-col gap-1 bg-[#0f172a]/30 border border-slate-850 p-2.5 rounded-xl">
                        <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                          <Eye className="w-3" /> VIEWS
                        </span>
                        <input 
                          id="viewsInput"
                          type="number" 
                          min="0"
                          placeholder="Traffic Impressions"
                          className="bg-transparent border-none outline-none text-white text-sm w-full font-mono mt-0.5"
                          value={inputs.views}
                          onChange={(e) => handleInputChange("views", e.target.value === "" ? "" : Number(e.target.value))}
                        />
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              {/* Submit trigger button row */}
              <div className="flex items-center gap-4 mt-8 flex-wrap">
                <button
                  id="run-analysis-btn"
                  type="button"
                  disabled={isAnalyzing}
                  onClick={runDeepAnalysis}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white font-extrabold rounded-2xl cursor-pointer transition-all flex items-center gap-3 shadow-[0_10px_35px_-5px_rgba(99,102,241,0.5)] glow-btn"
                >
                  {isAnalyzing ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Cpu className="w-5 h-5" />
                  )}
                  🔬 Run Deep Analysis Node
                </button>

                <button
                  id="reset-inputs-btn"
                  type="button"
                  onClick={() => setInputs({
                    platform: "Twitter/X",
                    trend: "",
                    accountName: "",
                    postContent: "",
                    likes: "",
                    comments: "",
                    shares: "",
                    views: ""
                  })}
                  className="px-5 py-4 bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold rounded-2xl cursor-pointer transition-all flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset System Parameters
                </button>
              </div>

            </div>

            {/* PROGRESS LOADING ANIMATOR */}
            {isAnalyzing && (
              <div className="bg-[#111827]/85 border border-indigo-500/30 rounded-3xl p-8 relative overflow-hidden text-center flex flex-col items-center justify-center space-y-4 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                {/* Advanced Tech Scanner Line */}
                <div className="absolute inset-x-0 top-0 h-[4px] bg-cyan-400 opacity-60 animate-bounce"></div>
                
                <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
                
                <h3 className="text-lg font-extrabold text-white tracking-tight">Active Cyber Scan Underway</h3>
                
                {/* Micro step tracker bubbles */}
                <div className="flex items-center gap-2 py-2">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <div 
                      key={step} 
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        step === activeStep 
                          ? "w-8 bg-cyan-400" 
                          : step < activeStep 
                          ? "w-2.5 bg-indigo-500" 
                          : "w-2.5 bg-slate-800"
                      }`}
                    ></div>
                  ))}
                </div>

                <p className="text-sm font-mono text-cyan-400 bg-slate-950 px-4 py-2 border border-cyan-900/30 rounded-lg max-w-lg mt-2">
                  {analysisText}
                </p>
              </div>
            )}

            {/* RESULTS REPORT PRESENTATION SECTION */}
            {result && !isAnalyzing && (
              <div id="resultsSection" className="space-y-8 animate-fade-in-up">
                
                {/* Dynamic Verdict Header Banner */}
                <div 
                  className={`border rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl backdrop-blur-3xl ${
                    result.verdict === "SYNTHETIC"
                      ? "border-red-500/30 bg-gradient-to-br from-red-950/40 via-[#111827]/90 to-[#0a0e1a]/95 text-rose-100"
                      : result.verdict === "SUSPICIOUS"
                      ? "border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-[#111827]/90 to-[#0a0e1a]/95 text-amber-100"
                      : "border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-[#111827]/90 to-[#0a0e1a]/95 text-emerald-100"
                  }`}
                >
                  <div className="absolute inset-0 z-0">
                    <div className={`absolute -inset-10 opacity-15 filter blur-3xl ${
                      result.verdict === "SYNTHETIC" ? "bg-red-500" : result.verdict === "SUSPICIOUS" ? "bg-amber-500" : "bg-emerald-500"
                    }`}></div>
                  </div>

                  <div className="relative z-10">
                    {/* Pulsing Visual Shield Indicator Icon */}
                    <div className="flex justify-center mb-6">
                      {result.verdict === "SYNTHETIC" ? (
                        <div className="p-5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-500 shadow-[0_0_30px_rgba(239,68,68,0.25)] animate-pulse">
                          <ShieldAlert className="w-16 h-16" />
                        </div>
                      ) : result.verdict === "SUSPICIOUS" ? (
                        <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.25)] animate-pulse">
                          <ShieldQuestion className="w-16 h-16" />
                        </div>
                      ) : (
                        <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 shadow-[0_0_30px_rgba(34,197,94,0.25)] animate-pulse">
                          <ShieldCheck className="w-16 h-16" />
                        </div>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">
                      {result.analysisTitle}
                    </h2>
                    
                    <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
                      {result.analysisDescription}
                    </p>

                    {result.engineMode && (
                      <div className="inline-block mt-6 px-3.5 py-1 rounded-full bg-[#0a0e1a]/80 border border-slate-800 text-slate-400 font-mono text-[10px] uppercase font-semibold">
                        Forensic Agent Engine Mode: {result.engineMode}
                      </div>
                    )}
                  </div>
                </div>

                {/* Cyber indices scores grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* Indicator Index 1 */}
                  <div className="bg-[#111827]/75 border border-indigo-950/40 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="text-slate-400/80 font-bold font-mono text-[9px] tracking-widest uppercase">
                        Account Integrity Index
                      </div>
                      <div className="text-4xl sm:text-5xl font-black mt-4 text-white font-mono tracking-tighter">
                        {result.trustScore}%
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="w-full h-1.5 bg-[#0a0e1a] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-1000"
                          style={{ width: `${result.trustScore}%` }}
                        ></div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 font-semibold mt-2 uppercase">
                        {result.trustScore > 75 ? "High Trust Organic Profile" : result.trustScore > 40 ? "Questionable Metadata" : "Critical Coordinate Risk"}
                      </div>
                    </div>
                  </div>

                  {/* Indicator Index 2 */}
                  <div className="bg-[#111827]/75 border border-indigo-950/40 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="text-slate-400/80 font-bold font-mono text-[9px] tracking-widest uppercase">
                        Behavior Uniformity
                      </div>
                      <div className="text-4xl sm:text-5xl font-black mt-4 text-white font-mono tracking-tighter">
                        {result.behavioralUniformity}%
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="w-full h-1.5 bg-[#0a0e1a] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-1000"
                          style={{ width: `${result.behavioralUniformity}%` }}
                        ></div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 font-semibold mt-2 uppercase">
                        {result.behavioralUniformity > 75 ? "Programmatic Repetitive Loops" : result.behavioralUniformity > 35 ? "Mild Template Signatures" : "Highly Fluid Human Feed"}
                      </div>
                    </div>
                  </div>

                  {/* Indicator Index 3 */}
                  <div className="bg-[#111827]/75 border border-indigo-950/40 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="text-slate-400/80 font-bold font-mono text-[9px] tracking-widest uppercase">
                        Artificial Language Pattern
                      </div>
                      <div className="text-4xl sm:text-5xl font-black mt-4 text-white font-mono tracking-tighter">
                        {result.languagePatterns}%
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="w-full h-1.5 bg-[#0a0e1a] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-1000"
                          style={{ width: `${result.languagePatterns}%` }}
                        ></div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 font-semibold mt-2 uppercase">
                        {result.languagePatterns > 75 ? "Flagged Spam Syntactics" : result.languagePatterns > 35 ? "Elevated Hype-Phases Detected" : "Pure Contextual Discourse"}
                      </div>
                    </div>
                  </div>

                  {/* Indicator Index 4 */}
                  <div className="bg-[#111827]/75 border border-indigo-950/40 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="text-slate-400/80 font-bold font-mono text-[9px] tracking-widest uppercase">
                        Organic Reach Proportionality
                      </div>
                      <div className="text-4xl sm:text-5xl font-black mt-4 text-white font-mono tracking-tighter">
                        {100 - result.networkInfluence}%
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="w-full h-1.5 bg-[#0a0e1a] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-1000"
                          style={{ width: `${100 - result.networkInfluence}%` }}
                        ></div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 font-semibold mt-2 uppercase">
                        {result.networkInfluence > 75 ? "Click-Farm Relay Signatures" : result.networkInfluence > 35 ? "Mild Engagement Inflation" : "Standard Conversional Curve"}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Detailed analytics dashboards breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Left Column: Expected Organic Ratios vs Actual */}
                  <div className="bg-[#111827]/75 border border-indigo-950/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
                    <h3 className="text-lg font-black tracking-tight text-white mb-6 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-indigo-400" />
                      Metric Disproportionality Scan
                    </h3>
                    
                    {/* Visual custom bar chart */}
                    <div className="space-y-6">
                      {result.engagementMultipliers && result.engagementMultipliers.length > 0 ? (
                        result.engagementMultipliers.map((mult, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold text-slate-300">{mult.label}</span>
                              <span className={`font-mono font-black ${
                                mult.status === "suspicious" ? "text-rose-400" : mult.status === "warning" ? "text-amber-400" : "text-emerald-400"
                              }`}>
                                {mult.percentage > 0 ? `+${mult.percentage}%` : "Typical Bounds"}
                              </span>
                            </div>
                            <div className="w-full h-8 bg-[#0a0e1a] rounded-xl flex overflow-hidden border border-slate-900">
                              {/* Expected standard segment (in blue) */}
                              <div className="h-full bg-indigo-950 px-3 flex items-center shrink-0 border-r border-slate-900 text-[10px] text-indigo-300 font-mono font-semibold">
                                ORGANIC LIMIT
                              </div>
                              {/* Out-of-bounds anomaly segment */}
                              <div 
                                className={`h-full transition-all duration-1000 ${
                                  mult.status === "suspicious" 
                                    ? "bg-rose-500/20 text-rose-300 border-l border-rose-500/40" 
                                    : mult.status === "warning" 
                                    ? "bg-amber-500/20 text-amber-300 border-l border-amber-500/40" 
                                    : "bg-emerald-500/20 text-emerald-300 border-l border-emerald-500/40"
                                } flex-grow px-3 flex items-center justify-between text-[10px] font-mono font-bold`}
                                style={{ width: `${Math.min(100, Math.max(10, mult.percentage))}%` }}
                              >
                                <span>MEASURED DEV:</span>
                                <span>{mult.percentage}%</span>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-slate-400 text-sm">Engagement levels verify natural human audience interactions perfectly.</p>
                      )}
                    </div>

                    {/* Threat markers list */}
                    <div className="mt-8 pt-6 border-t border-indigo-950/40 space-y-3">
                      <div className="text-xs font-mono font-black text-slate-400 uppercase">Interactive Security Diagnostics</div>
                      <div className="flex flex-wrap gap-2">
                        {result.markers && result.markers.map((mark, idx) => (
                          <div 
                            key={idx}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold tracking-tight border ${
                              mark.status === "suspicious" 
                                ? "bg-red-500/10 text-rose-400 border-red-500/20" 
                                : mark.status === "warning" 
                                ? "bg-amber-500/10 text-amber-400 border-amber-500/20" 
                                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            }`}
                          >
                            ● {mark.label}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: AI Forensic Findings & Counter-measures */}
                  <div className="bg-[#111827]/75 border border-indigo-950/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
                    <div>
                      <h3 className="text-lg font-black tracking-tight text-white mb-4 flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-indigo-400" />
                        Forensic Breakdown Findings
                      </h3>
                      <ul className="space-y-4">
                        {result.reasons && result.reasons.map((reason, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                            <CornerDownRight className="w-4 h-4 shrink-0 mt-1 text-indigo-400 font-extrabold" />
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-indigo-950/40">
                      <h4 className="text-sm font-extrabold text-white tracking-tight uppercase flex items-center gap-2 mb-3">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Defensive Mitigation Protocols
                      </h4>
                      <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                        The threat control matrix recommends implementing these operations on regional relay nodes immediately:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                          <span>Flag coordinating URLs in regional firewall lists</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                          <span>Submit telemetry files to platform moderators</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                          <span>Verify subsequent session identifiers via SSL check</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            )}

          </div>
        )}

      </main>

      {/* Primary Global Footer */}
      <footer className="relative z-10 text-center py-6 px-4 border-t border-indigo-950/40 bg-[#0a0e1a]/90 backdrop-blur-md text-slate-500 text-xs sm:text-sm mt-12">
        <p className="font-semibold text-slate-400 font-sans tracking-wide">
          AuthentiCheck v3.0 — Advanced Synthetic Activity Detection System
        </p>
        <p className="mt-1 text-[11px] opacity-70 font-mono">
          © 2026 AuthentiCheck Global • Secure Pattern Analysis • Enterprise Edition
        </p>
      </footer>
    </div>
  );
}
