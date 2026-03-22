import { useState } from "react";

// ─── TRANSLATIONS ───────────────────────────────────────────────
const T = {
  ua: {
    nav: { free: (n) => `${n} безкоштовних`, pro: "✦ Про версія" },
    hero: { tag: "Маркетинг у Threads", t1: "Рости у Threads.", t2: "Залучай клієнтів.", sub: "AI-інструмент для бізнесу, блогерів і фрілансерів" },
    tabs: ["✦ Тред", "📅 Контент-план"],
    modeLabel: "ХТО ТИ?",
    modes: [
      { id: "business", icon: "🏢", label: "Бізнес", desc: "Клієнти та продажі" },
      { id: "blogger", icon: "📱", label: "Блогер", desc: "Охоплення та підписники" },
      { id: "freelancer", icon: "🛠️", label: "Фрілансер", desc: "Замовлення та довіра" },
    ],
    nicheLabel: "НІША",
    niches: ["Будь-яка","Фітнес","Фінанси","IT / Tech","Маркетинг","Дизайн","Нерухомість","Психологія","Освіта","Краса","Їжа","Подорожі"],
    topicLabel: "ТЕМА ТРЕДУ",
    topicPlaceholder: "напр. Як я залучив перших 10 клієнтів без реклами",
    ctaLabel: "ЗАКЛИК ДО ДІЇ (необов'язково)",
    ctaPlaceholder: "напр. Запишись на консультацію: ваш-сайт.com",
    toneLabel: "ТОН",
    tones: ["Надихаючий","Навчальний","Провокаційний","Історія","Смішний"],
    lengthLabel: "ДОВЖИНА",
    lengths: ["Короткий","Середній","Довгий"],
    lengthTags: ["5 постів","8 постів","12 постів"],
    hot: "ТОП",
    generate: "✦ Згенерувати тред",
    generating: "Генерую...",
    planWeekLabel: "ТЕМА / НАПРЯМОК БІЗНЕСУ",
    planWeekPlaceholder: "напр. Я коуч з продуктивності, допомагаю підприємцям",
    generatePlan: "📅 Згенерувати контент-план",
    generatingPlan: "Генерую план...",
    planResult: "Контент-план на 7 днів ✦",
    planCopy: "Копіювати план",
    planCopied: "✓ Скопійовано!",
    result: "Твій тред ✦",
    resultSub: (n) => `${n} постів готові до публікації`,
    copyAll: "📋 Копіювати все",
    copiedAll: "✓ Скопійовано!",
    copy: "Копіювати",
    copied: "✓ ОК",
    regen: "↻ Згенерувати ще раз",
    hook: "ГАЧОК", cta_badge: "ЗАКЛИК",
    chars: (n) => `${n}/500`,
    postOf: (i, t) => `${i} з ${t}`,
    errTopic: "Введи тему треду!",
    errPlan: "Введи тему або напрямок!",
    errFail: "Помилка. Спробуй ще раз!",
    pw: {
      title: "Відкрий", sub: "Безліміт контенту щодня",
      features: [["✦","Необмежена генерація","#7B61FF"],["📅","Контент-план щодня","#FF9F43"],["🎯","Всі ніші та режими","#4F9EFF"],["🔥","Заклики до дії","#FF6B6B"],["📊","Аналітика (скоро)","#26de81"]],
      btn: "Почати безкоштовно →", note: "7 днів безкоштовно • Скасуй будь-коли", later: "Може пізніше",
    },
  },
  en: {
    nav: { free: (n) => `${n} free`, pro: "✦ Go Pro" },
    hero: { tag: "Threads Marketing Tool", t1: "Grow on Threads.", t2: "Get clients.", sub: "AI tool for businesses, bloggers & freelancers" },
    tabs: ["✦ Thread", "📅 Content Plan"],
    modeLabel: "WHO ARE YOU?",
    modes: [
      { id: "business", icon: "🏢", label: "Business", desc: "Clients & sales" },
      { id: "blogger", icon: "📱", label: "Blogger", desc: "Reach & followers" },
      { id: "freelancer", icon: "🛠️", label: "Freelancer", desc: "Orders & trust" },
    ],
    nicheLabel: "NICHE",
    niches: ["Any","Fitness","Finance","IT / Tech","Marketing","Design","Real Estate","Psychology","Education","Beauty","Food","Travel"],
    topicLabel: "THREAD TOPIC",
    topicPlaceholder: "e.g. How I got my first 10 clients without paid ads",
    ctaLabel: "CALL TO ACTION (optional)",
    ctaPlaceholder: "e.g. Book a consultation: your-site.com",
    toneLabel: "TONE",
    tones: ["Inspiring","Educational","Controversial","Storytelling","Funny"],
    lengthLabel: "LENGTH",
    lengths: ["Short","Medium","Long"],
    lengthTags: ["5 posts","8 posts","12 posts"],
    hot: "HOT",
    generate: "✦ Generate Thread",
    generating: "Generating...",
    planWeekLabel: "YOUR TOPIC / BUSINESS",
    planWeekPlaceholder: "e.g. I'm a productivity coach helping entrepreneurs",
    generatePlan: "📅 Generate Content Plan",
    generatingPlan: "Generating plan...",
    planResult: "7-Day Content Plan ✦",
    planCopy: "Copy plan",
    planCopied: "✓ Copied!",
    result: "Your Thread ✦",
    resultSub: (n) => `${n} posts ready to publish`,
    copyAll: "📋 Copy all",
    copiedAll: "✓ Copied!",
    copy: "Copy",
    copied: "✓ OK",
    regen: "↻ Regenerate",
    hook: "HOOK", cta_badge: "CTA",
    chars: (n) => `${n}/500`,
    postOf: (i, t) => `${i} of ${t}`,
    errTopic: "Enter a thread topic!",
    errPlan: "Enter your topic or business!",
    errFail: "Something went wrong. Try again!",
    pw: {
      title: "Unlock", sub: "Unlimited content every day",
      features: [["✦","Unlimited generation","#7B61FF"],["📅","Daily content plans","#FF9F43"],["🎯","All niches & modes","#4F9EFF"],["🔥","Custom CTAs","#FF6B6B"],["📊","Analytics (soon)","#26de81"]],
      btn: "Start Free Trial →", note: "7-day free trial • Cancel anytime", later: "Maybe later",
    },
  },
};

const TONE_EMOJIS = ["⚡","🧠","🔥","📖","😂"];
const COLORS = ["linear-gradient(135deg,#7B61FF,#4F9EFF)","linear-gradient(135deg,#FF6B6B,#FF9F43)","linear-gradient(135deg,#26de81,#20bf6b)","linear-gradient(135deg,#FF5EDF,#7B61FF)","linear-gradient(135deg,#4F9EFF,#26de81)"];
const FREE_LIMIT = 3;
const LENGTH_VALUES = [5, 8, 12];

function buildThreadPrompt(lang, mode, niche, topic, ctaText, tone, length) {
  const modeInstructions = {
    business: lang === "ua"
      ? "Мета — залучити потенційних клієнтів, показати цінність продукту/послуги, викликати довіру."
      : "Goal: attract potential clients, show product/service value, build trust.",
    blogger: lang === "ua"
      ? "Мета — максимальне охоплення, залучення нових підписників, вірусний потенціал."
      : "Goal: maximum reach, gain new followers, viral potential.",
    freelancer: lang === "ua"
      ? "Мета — продемонструвати експертизу, залучити замовлення, побудувати особистий бренд."
      : "Goal: demonstrate expertise, attract orders, build personal brand.",
  };
  const ctaInstruction = ctaText
    ? (lang === "ua"
        ? `Останній пост ОБОВ'ЯЗКОВО містить цей заклик до дії: "${ctaText}"`
        : `Last post MUST include this call to action: "${ctaText}"`)
    : (lang === "ua"
        ? "Останній пост — природний заклик до дії (підписатись, написати в DM, тощо)."
        : "Last post — natural CTA (follow, DM, etc).");

  if (lang === "ua") {
    return `Ти експерт зі створення вірусного маркетингового контенту для Threads (Meta).

Режим: ${mode === "business" ? "Бізнес" : mode === "blogger" ? "Блогер" : "Фрілансер"}
${modeInstructions[mode]}
Ніша: ${niche}
Тема: ${topic}
Тон: ${tone}
Кількість постів: ${length}

Правила:
- Кожен пост до 500 символів
- Перший пост — потужний гачок що зупиняє скрол
- ${ctaInstruction}
- Без хештегів
- Розмовна українська мова
- Кожен пост плавно переходить у наступний
- Контент реально корисний і специфічний для ніші

Відповідай ТІЛЬКИ валідним JSON масивом рядків. Без markdown, без пояснень.
["пост 1", "пост 2", ...]`;
  } else {
    return `You are an expert viral marketing content creator for Threads (Meta).

Mode: ${mode}
${modeInstructions[mode]}
Niche: ${niche}
Topic: ${topic}
Tone: ${tone}
Number of posts: ${length}

Rules:
- Each post max 500 characters
- First post: scroll-stopping hook
- ${ctaInstruction}
- NO hashtags
- Conversational English
- Each post flows naturally into the next
- Content is genuinely useful and niche-specific

Respond ONLY with a valid JSON array of strings. No markdown, no explanation.
["post 1", "post 2", ...]`;
  }
}

function buildPlanPrompt(lang, mode, niche, topic) {
  if (lang === "ua") {
    return `Ти контент-стратег для Threads (Meta).

Створи контент-план на 7 днів для:
Режим: ${mode === "business" ? "Бізнес" : mode === "blogger" ? "Блогер" : "Фрілансер"}
Ніша: ${niche}
Тема/Бізнес: ${topic}

Для кожного дня дай:
- День і назву
- Тему треду
- Тон
- Мету поста

Відповідай ТІЛЬКИ валідним JSON масивом з 7 об'єктів. Без markdown.
[{"day":"Понеділок","title":"назва","topic":"тема","tone":"тон","goal":"мета"}, ...]`;
  } else {
    return `You are a content strategist for Threads (Meta).

Create a 7-day content plan for:
Mode: ${mode}
Niche: ${niche}
Topic/Business: ${topic}

For each day provide:
- Day and title
- Thread topic
- Tone
- Post goal

Respond ONLY with a valid JSON array of 7 objects. No markdown.
[{"day":"Monday","title":"title","topic":"topic","tone":"tone","goal":"goal"}, ...]`;
  }
}

function Spinner() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" style={{ animation:"spin 0.7s linear infinite", flexShrink:0 }}>
      <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3"/>
      <path d="M12 2a10 10 0 0 1 10 10" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

function PostCard({ index, text, total, t }) {
  const [copied, setCopied] = useState(false);
  const grad = COLORS[index % COLORS.length];
  const copy = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div style={{ background:"#16161e", border:"1.5px solid #232336", borderRadius:16, overflow:"hidden", animation:"popIn 0.4s cubic-bezier(.34,1.56,.64,1) forwards", animationDelay:`${index*0.06}s`, opacity:0, transform:"scale(0.94)" }}>
      <div style={{ height:3, background:grad }}/>
      <div style={{ padding:"14px 16px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10, flexWrap:"wrap" }}>
          <div style={{ width:24, height:24, borderRadius:7, background:grad, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800, color:"#fff", flexShrink:0 }}>{index+1}</div>
          <span style={{ fontSize:10, color:"#555", fontWeight:600 }}>{t.postOf(index+1, total)}</span>
          {index===0 && <span style={{ background:"linear-gradient(90deg,#FF6B6B,#FF9F43)", color:"#fff", fontSize:9, fontWeight:700, padding:"2px 7px", borderRadius:20 }}>{t.hook}</span>}
          {index===total-1 && <span style={{ background:"linear-gradient(90deg,#26de81,#20bf6b)", color:"#fff", fontSize:9, fontWeight:700, padding:"2px 7px", borderRadius:20 }}>{t.cta_badge}</span>}
        </div>
        <p style={{ margin:0, color:"#d4d4f0", fontSize:14, lineHeight:1.65, fontFamily:"'Georgia',serif" }}>{text}</p>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:12 }}>
          <span style={{ fontSize:10, color:"#444" }}>{t.chars(text.length)}</span>
          <button onClick={copy} style={{ background:copied?"rgba(38,222,129,0.15)":"rgba(255,255,255,0.05)", border:`1px solid ${copied?"#26de81":"#2a2a3a"}`, color:copied?"#26de81":"#777", borderRadius:8, padding:"5px 12px", fontSize:12, fontWeight:600 }}>{copied?t.copied:t.copy}</button>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ item, index }) {
  const grad = COLORS[index % COLORS.length];
  const days_ua = ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];
  return (
    <div style={{ background:"#16161e", border:"1.5px solid #232336", borderRadius:14, overflow:"hidden", animation:"popIn 0.3s cubic-bezier(.34,1.56,.64,1) forwards", animationDelay:`${index*0.05}s`, opacity:0, transform:"scale(0.95)" }}>
      <div style={{ height:3, background:grad }}/>
      <div style={{ padding:"12px 14px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
          <div style={{ width:28, height:28, borderRadius:8, background:grad, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:900, color:"#fff", flexShrink:0 }}>{index+1}</div>
          <div>
            <div style={{ fontSize:13, fontWeight:800, color:"#fff" }}>{item.day}</div>
            <div style={{ fontSize:11, color:"#666" }}>{item.title}</div>
          </div>
        </div>
        <p style={{ margin:"0 0 6px", color:"#c8c8e8", fontSize:13, lineHeight:1.5 }}>{item.topic}</p>
        <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
          <span style={{ background:"rgba(123,97,255,0.15)", border:"1px solid rgba(123,97,255,0.3)", color:"#a78bfa", fontSize:10, fontWeight:600, padding:"2px 8px", borderRadius:10 }}>{item.tone}</span>
          <span style={{ background:"rgba(255,255,255,0.05)", border:"1px solid #2a2a3a", color:"#666", fontSize:10, padding:"2px 8px", borderRadius:10 }}>{item.goal}</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("ua");
  const t = T[lang];
  const [tab, setTab] = useState(0);
  const [mode, setMode] = useState("business");
  const [niche, setNiche] = useState(0);
  const [topic, setTopic] = useState("");
  const [ctaText, setCtaText] = useState("");
  const [toneIdx, setToneIdx] = useState(0);
  const [lengthIdx, setLengthIdx] = useState(1);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [planLoading, setPlanLoading] = useState(false);
  const [plan, setPlan] = useState([]);
  const [planTopic, setPlanTopic] = useState("");
  const [error, setError] = useState("");
  const [planError, setPlanError] = useState("");
  const [usedFree, setUsedFree] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [planCopied, setPlanCopied] = useState(false);

  const remaining = FREE_LIMIT - usedFree;

  const callAPI = async (prompt) => {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1500, messages:[{role:"user", content:prompt}] })
    });
    const data = await res.json();
    const raw = data.content?.[0]?.text || "[]";
    return JSON.parse(raw.replace(/```json|```/g,"").trim());
  };

  const generate = async () => {
    if (!topic.trim()) { setError(t.errTopic); return; }
    if (usedFree >= FREE_LIMIT) { setShowPaywall(true); return; }
    setError(""); setLoading(true); setPosts([]);
    try {
      const prompt = buildThreadPrompt(lang, mode, t.niches[niche], topic, ctaText, t.tones[toneIdx], LENGTH_VALUES[lengthIdx]);
      const result = await callAPI(prompt);
      setPosts(result);
      setUsedFree(u => u+1);
    } catch { setError(t.errFail); }
    setLoading(false);
  };

  const generatePlan = async () => {
    if (!planTopic.trim()) { setPlanError(t.errPlan); return; }
    if (usedFree >= FREE_LIMIT) { setShowPaywall(true); return; }
    setPlanError(""); setPlanLoading(true); setPlan([]);
    try {
      const prompt = buildPlanPrompt(lang, mode, t.niches[niche], planTopic);
      const result = await callAPI(prompt);
      setPlan(result);
      setUsedFree(u => u+1);
    } catch { setPlanError(t.errFail); }
    setPlanLoading(false);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(posts.map((p,i) => `[${i+1}/${posts.length}]\n${p}`).join("\n\n---\n\n"));
    setCopiedAll(true); setTimeout(()=>setCopiedAll(false),2000);
  };

  const copyPlan = () => {
    const text = plan.map(item => `${item.day} — ${item.title}\n📝 ${item.topic}\n🎯 ${item.tone} | ${item.goal}`).join("\n\n");
    navigator.clipboard.writeText(text);
    setPlanCopied(true); setTimeout(()=>setPlanCopied(false),2000);
  };

  return (
    <div style={{ minHeight:"100vh", background:"#0e0e16", fontFamily:"'Inter','Helvetica Neue',sans-serif", color:"#fff", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes popIn{to{opacity:1;transform:scale(1)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes gradShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
        *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
        textarea,input{outline:none!important;font-family:inherit;-webkit-appearance:none}
        textarea:focus,input:focus{border-color:#7B61FF!important;box-shadow:0 0 0 3px rgba(123,97,255,0.15)!important}
        button{cursor:pointer;-webkit-appearance:none;border:none;font-family:inherit}
        button:active{opacity:0.8;transform:scale(0.97)}
        select{outline:none!important;-webkit-appearance:none;font-family:inherit}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-thumb{background:#232336;border-radius:2px}
      `}</style>

      {/* Ambient */}
      <div style={{ position:"fixed", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
        <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", top:-150, right:-100, background:"radial-gradient(circle,rgba(123,97,255,0.1) 0%,transparent 65%)" }}/>
        <div style={{ position:"absolute", width:350, height:350, borderRadius:"50%", bottom:-80, left:-80, background:"radial-gradient(circle,rgba(255,107,107,0.07) 0%,transparent 65%)" }}/>
      </div>

      {/* NAV */}
      <nav style={{ position:"sticky", top:0, zIndex:50, borderBottom:"1px solid rgba(255,255,255,0.06)", background:"rgba(14,14,22,0.92)", backdropFilter:"blur(20px)", padding:"10px 16px" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:32, height:32, borderRadius:10, flexShrink:0, background:"linear-gradient(135deg,#7B61FF,#FF6B6B)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, animation:"float 3s ease-in-out infinite", boxShadow:"0 4px 16px rgba(123,97,255,0.4)" }}>🧵</div>
            <span style={{ fontWeight:800, fontSize:17, letterSpacing:"-0.3px" }}>
              Thread<span style={{ background:"linear-gradient(90deg,#7B61FF,#FF6B6B)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Craft</span>
            </span>
          </div>
          <div style={{ display:"flex", background:"#16161e", border:"1px solid #232336", borderRadius:8, overflow:"hidden" }}>
            {["ua","en"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ background:lang===l?"linear-gradient(135deg,#7B61FF,#4F9EFF)":"transparent", padding:"6px 12px", color:lang===l?"#fff":"#555", fontSize:12, fontWeight:700 }}>
                {l==="ua"?"🇺🇦 УКР":"🇬🇧 ENG"}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display:"flex", gap:8 }}>
          <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, background:remaining>0?"rgba(38,222,129,0.08)":"rgba(255,107,107,0.08)", border:`1px solid ${remaining>0?"rgba(38,222,129,0.25)":"rgba(255,107,107,0.25)"}`, borderRadius:10, padding:"7px 12px" }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:remaining>0?"#26de81":"#FF6B6B", flexShrink:0 }}/>
            <span style={{ fontSize:12, fontWeight:600, color:remaining>0?"#26de81":"#FF6B6B" }}>{t.nav.free(remaining)}</span>
          </div>
          <button onClick={() => setShowPaywall(true)} style={{ flex:1, background:"linear-gradient(135deg,#7B61FF,#FF6B6B)", borderRadius:10, padding:"7px 12px", color:"#fff", fontSize:13, fontWeight:700, boxShadow:"0 3px 12px rgba(123,97,255,0.4)" }}>{t.nav.pro}</button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ position:"relative", zIndex:1, textAlign:"center", padding:"28px 16px 16px", animation:"fadeIn 0.5s ease forwards" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"rgba(123,97,255,0.12)", border:"1px solid rgba(123,97,255,0.3)", borderRadius:16, padding:"5px 14px", marginBottom:12 }}>
          <span style={{ fontSize:11 }}>🚀</span>
          <span style={{ fontSize:11, fontWeight:600, color:"#a78bfa" }}>{t.hero.tag}</span>
        </div>
        <h1 style={{ fontSize:"clamp(24px,6.5vw,46px)", fontWeight:900, lineHeight:1.15, letterSpacing:"-1.5px", marginBottom:6 }}>
          <span style={{ background:"linear-gradient(90deg,#7B61FF,#FF6B6B,#FF9F43,#7B61FF)", backgroundSize:"300% 300%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:"gradShift 4s ease infinite" }}>{t.hero.t1}</span><br/>
          {t.hero.t2}
        </h1>
        <p style={{ fontSize:13, color:"#555", lineHeight:1.5 }}>{t.hero.sub}</p>
      </div>

      {/* MAIN */}
      <div style={{ position:"relative", zIndex:1, maxWidth:640, margin:"0 auto", padding:"0 12px 60px" }}>

        {/* MODE selector */}
        <div style={{ marginBottom:16 }}>
          <div style={{ fontSize:11, fontWeight:700, color:"#7B61FF", letterSpacing:1, marginBottom:8 }}>{t.modeLabel}</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8 }}>
            {t.modes.map(m => (
              <button key={m.id} onClick={() => setMode(m.id)} style={{
                background: mode===m.id ? "linear-gradient(135deg,rgba(123,97,255,0.3),rgba(79,158,255,0.2))" : "rgba(255,255,255,0.03)",
                border:`1.5px solid ${mode===m.id?"#7B61FF":"#232336"}`,
                borderRadius:14, padding:"12px 8px",
                boxShadow: mode===m.id ? "0 3px 14px rgba(123,97,255,0.3)" : "none",
              }}>
                <div style={{ fontSize:22, marginBottom:4 }}>{m.icon}</div>
                <div style={{ fontSize:13, fontWeight:700, color:mode===m.id?"#fff":"#888" }}>{m.label}</div>
                <div style={{ fontSize:10, color:mode===m.id?"#a78bfa":"#444", marginTop:2, lineHeight:1.3 }}>{m.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* NICHE */}
        <div style={{ marginBottom:16 }}>
          <div style={{ fontSize:11, fontWeight:700, color:"#7B61FF", letterSpacing:1, marginBottom:8 }}>{t.nicheLabel}</div>
          <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
            {t.niches.map((n, i) => (
              <button key={n} onClick={() => setNiche(i)} style={{
                background: niche===i ? "linear-gradient(135deg,#7B61FF,#4F9EFF)" : "rgba(255,255,255,0.04)",
                border:`1.5px solid ${niche===i?"transparent":"#232336"}`,
                borderRadius:20, padding:"6px 12px", color:niche===i?"#fff":"#666",
                fontSize:12, fontWeight:600,
                boxShadow: niche===i ? "0 2px 10px rgba(123,97,255,0.3)" : "none",
              }}>{n}</button>
            ))}
          </div>
        </div>

        {/* TABS */}
        <div style={{ display:"flex", background:"#16161e", border:"1px solid #232336", borderRadius:14, overflow:"hidden", marginBottom:16 }}>
          {t.tabs.map((tb, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              flex:1, background:tab===i?"linear-gradient(135deg,#7B61FF,#4F9EFF)":"transparent",
              padding:"12px", color:tab===i?"#fff":"#555",
              fontSize:13, fontWeight:700,
            }}>{tb}</button>
          ))}
        </div>

        {/* ─── TAB 0: THREAD ─── */}
        {tab===0 && (
          <div style={{ background:"linear-gradient(135deg,rgba(123,97,255,0.15),rgba(255,107,107,0.1))", borderRadius:24, padding:2 }}>
            <div style={{ background:"#13131d", borderRadius:22, padding:16 }}>
              {/* Topic */}
              <div style={{ marginBottom:14 }}>
                <label style={{ fontSize:11, fontWeight:700, color:"#7B61FF", letterSpacing:1, display:"block", marginBottom:7 }}>{t.topicLabel}</label>
                <textarea value={topic} onChange={e=>setTopic(e.target.value)} placeholder={t.topicPlaceholder} rows={3}
                  style={{ width:"100%", background:"#0e0e16", border:"1.5px solid #232336", borderRadius:12, padding:"12px 14px", color:"#e8e8ff", fontSize:14, resize:"none", lineHeight:1.55, transition:"all 0.2s" }}/>
                {error && <div style={{ marginTop:7, padding:"7px 12px", background:"rgba(255,107,107,0.1)", border:"1px solid rgba(255,107,107,0.3)", borderRadius:8, color:"#FF6B6B", fontSize:12 }}>{error}</div>}
              </div>

              {/* CTA */}
              <div style={{ marginBottom:14 }}>
                <label style={{ fontSize:11, fontWeight:700, color:"#FF6B6B", letterSpacing:1, display:"block", marginBottom:7 }}>{t.ctaLabel}</label>
                <input value={ctaText} onChange={e=>setCtaText(e.target.value)} placeholder={t.ctaPlaceholder}
                  style={{ width:"100%", background:"#0e0e16", border:"1.5px solid #232336", borderRadius:12, padding:"11px 14px", color:"#e8e8ff", fontSize:14, transition:"all 0.2s" }}/>
              </div>

              {/* Tone */}
              <div style={{ marginBottom:14 }}>
                <label style={{ fontSize:11, fontWeight:700, color:"#7B61FF", letterSpacing:1, display:"block", marginBottom:8 }}>{t.toneLabel}</label>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  {t.tones.map((tone,i) => (
                    <button key={tone} onClick={()=>setToneIdx(i)} style={{ background:toneIdx===i?"linear-gradient(135deg,#7B61FF,#4F9EFF)":"rgba(255,255,255,0.04)", border:`1.5px solid ${toneIdx===i?"transparent":"#232336"}`, borderRadius:10, padding:"7px 11px", color:toneIdx===i?"#fff":"#777", fontSize:12, fontWeight:600, boxShadow:toneIdx===i?"0 3px 10px rgba(123,97,255,0.3)":"none" }}>
                      {TONE_EMOJIS[i]} {tone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Length */}
              <div style={{ marginBottom:18 }}>
                <label style={{ fontSize:11, fontWeight:700, color:"#7B61FF", letterSpacing:1, display:"block", marginBottom:8 }}>{t.lengthLabel}</label>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8 }}>
                  {t.lengths.map((l,i) => (
                    <button key={l} onClick={()=>setLengthIdx(i)} style={{ background:lengthIdx===i?"linear-gradient(135deg,rgba(123,97,255,0.25),rgba(79,158,255,0.2))":"rgba(255,255,255,0.03)", border:`1.5px solid ${lengthIdx===i?"#7B61FF":"#232336"}`, borderRadius:12, padding:"11px 6px", position:"relative" }}>
                      {i===1 && <div style={{ position:"absolute", top:4, right:4, background:"linear-gradient(90deg,#FF6B6B,#FF9F43)", borderRadius:5, padding:"1px 5px", fontSize:8, fontWeight:800, color:"#fff" }}>{t.hot}</div>}
                      <div style={{ fontSize:16, marginBottom:2 }}>{i===0?"⚡":i===1?"🎯":"🌊"}</div>
                      <div style={{ fontSize:12, fontWeight:700, color:lengthIdx===i?"#fff":"#888" }}>{t.lengthTags[i]}</div>
                      <div style={{ fontSize:10, color:lengthIdx===i?"#a78bfa":"#444", marginTop:1 }}>{l}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={generate} disabled={loading} style={{ width:"100%", background:loading?"rgba(123,97,255,0.2)":"linear-gradient(135deg,#7B61FF 0%,#FF6B6B 50%,#FF9F43 100%)", backgroundSize:"200% 200%", animation:loading?"none":"gradShift 3s ease infinite", borderRadius:14, padding:"16px", color:"#fff", fontSize:16, fontWeight:800, boxShadow:loading?"none":"0 6px 24px rgba(123,97,255,0.45)", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                {loading?<><Spinner/>{t.generating}</>:t.generate}
              </button>
            </div>
          </div>
        )}

        {/* ─── TAB 1: CONTENT PLAN ─── */}
        {tab===1 && (
          <div style={{ background:"linear-gradient(135deg,rgba(255,107,107,0.15),rgba(255,159,67,0.1))", borderRadius:24, padding:2 }}>
            <div style={{ background:"#13131d", borderRadius:22, padding:16 }}>
              <div style={{ marginBottom:18 }}>
                <label style={{ fontSize:11, fontWeight:700, color:"#FF6B6B", letterSpacing:1, display:"block", marginBottom:7 }}>{t.planWeekLabel}</label>
                <textarea value={planTopic} onChange={e=>setPlanTopic(e.target.value)} placeholder={t.planWeekPlaceholder} rows={3}
                  style={{ width:"100%", background:"#0e0e16", border:"1.5px solid #232336", borderRadius:12, padding:"12px 14px", color:"#e8e8ff", fontSize:14, resize:"none", lineHeight:1.55, transition:"all 0.2s" }}/>
                {planError && <div style={{ marginTop:7, padding:"7px 12px", background:"rgba(255,107,107,0.1)", border:"1px solid rgba(255,107,107,0.3)", borderRadius:8, color:"#FF6B6B", fontSize:12 }}>{planError}</div>}
              </div>
              <button onClick={generatePlan} disabled={planLoading} style={{ width:"100%", background:planLoading?"rgba(255,107,107,0.2)":"linear-gradient(135deg,#FF6B6B,#FF9F43)", borderRadius:14, padding:"16px", color:"#fff", fontSize:16, fontWeight:800, boxShadow:planLoading?"none":"0 6px 24px rgba(255,107,107,0.35)", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                {planLoading?<><Spinner/>{t.generatingPlan}</>:t.generatePlan}
              </button>
            </div>
          </div>
        )}

        {/* Thread results */}
        {tab===0 && posts.length>0 && (
          <div style={{ marginTop:24 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
              <div>
                <h2 style={{ fontSize:18, fontWeight:800, marginBottom:2 }}>{t.result}</h2>
                <p style={{ fontSize:12, color:"#555" }}>{t.resultSub(posts.length)}</p>
              </div>
              <button onClick={copyAll} style={{ background:copiedAll?"rgba(38,222,129,0.15)":"rgba(255,255,255,0.05)", border:`1.5px solid ${copiedAll?"#26de81":"#232336"}`, color:copiedAll?"#26de81":"#888", borderRadius:10, padding:"8px 14px", fontSize:12, fontWeight:700 }}>{copiedAll?t.copiedAll:t.copyAll}</button>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {posts.map((p,i) => <PostCard key={i} index={i} text={p} total={posts.length} t={t}/>)}
            </div>
            <button onClick={generate} disabled={loading||usedFree>=FREE_LIMIT} style={{ width:"100%", marginTop:12, background:"rgba(255,255,255,0.03)", border:"1.5px solid #232336", borderRadius:12, padding:"12px", color:"#555", fontSize:13, fontWeight:600 }}>{t.regen}</button>
          </div>
        )}

        {/* Plan results */}
        {tab===1 && plan.length>0 && (
          <div style={{ marginTop:24 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
              <h2 style={{ fontSize:18, fontWeight:800 }}>{t.planResult}</h2>
              <button onClick={copyPlan} style={{ background:planCopied?"rgba(38,222,129,0.15)":"rgba(255,255,255,0.05)", border:`1.5px solid ${planCopied?"#26de81":"#232336"}`, color:planCopied?"#26de81":"#888", borderRadius:10, padding:"8px 14px", fontSize:12, fontWeight:700 }}>{planCopied?t.planCopied:t.planCopy}</button>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {plan.map((item,i) => <PlanCard key={i} item={item} index={i}/>)}
            </div>
          </div>
        )}
      </div>

      {/* PAYWALL */}
      {showPaywall && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.88)", backdropFilter:"blur(12px)", display:"flex", alignItems:"flex-end", justifyContent:"center", zIndex:100 }}>
          <div style={{ background:"#13131d", borderRadius:"24px 24px 0 0", padding:"20px 20px 40px", width:"100%", maxWidth:480, animation:"slideUp 0.35s cubic-bezier(.34,1.2,.64,1) forwards", textAlign:"center" }}>
            <div style={{ width:36, height:4, background:"#2a2a3a", borderRadius:2, margin:"0 auto 18px" }}/>
            <div style={{ fontSize:44, marginBottom:10, animation:"float 2s ease-in-out infinite" }}>🚀</div>
            <h2 style={{ fontSize:22, fontWeight:900, marginBottom:6 }}>
              {t.pw.title}{" "}
              <span style={{ background:"linear-gradient(90deg,#7B61FF,#FF6B6B)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Pro</span>
            </h2>
            <p style={{ color:"#555", fontSize:13, marginBottom:18, lineHeight:1.5 }}>{t.pw.sub}</p>
            <div style={{ background:"#0e0e16", borderRadius:14, padding:"14px 18px", marginBottom:18, textAlign:"left" }}>
              {t.pw.features.map(([icon,text,color]) => (
                <div key={text} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:9, fontSize:13 }}>
                  <span style={{ color }}>{icon}</span>
                  <span style={{ color:"#ccc" }}>{text}</span>
                </div>
              ))}
            </div>
            <div style={{ marginBottom:16 }}>
              <span style={{ fontSize:40, fontWeight:900, letterSpacing:"-2px" }}>$19</span>
              <span style={{ color:"#555", fontSize:13 }}>/mo</span>
              <div style={{ fontSize:11, color:"#26de81", marginTop:3, fontWeight:600 }}>{t.pw.note}</div>
            </div>
            <button style={{ width:"100%", background:"linear-gradient(135deg,#7B61FF,#FF6B6B)", borderRadius:14, padding:"15px", color:"#fff", fontSize:16, fontWeight:800, marginBottom:10, boxShadow:"0 6px 24px rgba(123,97,255,0.45)" }}>{t.pw.btn}</button>
            <button onClick={()=>setShowPaywall(false)} style={{ background:"none", color:"#444", fontSize:13 }}>{t.pw.later}</button>
          </div>
        </div>
      )}
    </div>
  );
}
