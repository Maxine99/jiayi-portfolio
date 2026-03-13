export type Lang = "en" | "zh";

export type Project = {
  slug: string;
  externalUrl?: string;
  cover: {
    src: string;
    alt: string;
  };
  title: {
    en: string;
    zh: string;
  };
  tags: string[];
  summary: {
    en: string;
    zh: string;
  };
};

export const person = {
  name: "Jiayi (Maxine) Gu",
  title: "UI/UX Designer",
  email: "gujiayi2@gmail.com",
};

export const ui = {
  nav: {
    work: { en: "Work", zh: "作品" },
    about: { en: "About", zh: "关于" },
    resume: { en: "Resume", zh: "简历" },
    linkedin: { en: "LinkedIn", zh: "LinkedIn" },
    language: { en: "中文", zh: "EN" },
  },
  home: {
    hero: {
      en: `Hi, I’m ${person.name} — a UI/UX designer crafting calm, precise digital experiences.`,
      zh: `你好，我是 ${person.name}，UI/UX 设计师，专注于克制、清晰且可落地的体验设计。`,
    },
    sub: {
      en: "Work led by structure, rhythm, and usability — with just enough personality.",
      zh: "以结构、节奏与可用性为核心的作品呈现，并保留一点个人气质。",
    },
    section: { en: "Selected Work", zh: "精选项目" },
    meta: { en: "5 projects · public", zh: "5 个项目 · 可公开" },
  },
};

export const projects: Project[] = [
  {
    slug: "ops-data-governance",
    cover: { src: "/covers/ops.svg", alt: "B2B SaaS scheduling & data governance cover" },
    title: { en: "Industrial Data Governance & Scheduling Hub", zh: "工业数据治理与调度中枢" },
    tags: ["B2B SaaS", "Interaction Redesign", "Data Visualization"],
    summary: {
      en: "Re-architected complex scheduling flows and designed a DAG topology view with risk-aware confirmations.",
      zh: "重构复杂生产调度交互逻辑，设计 DAG 数据流拓扑，并建立多维确认与风险预警策略。",
    },
  },
  {
    slug: "cerebraai-openwebui",
    cover: { src: "/covers/cerebra.svg", alt: "AIGC multimodal workflow platform cover" },
    title: { en: "CerebraAI — Multimodal Workflow Platform", zh: "CerebraAI 多模态工作流平台" },
    tags: ["AIGC", "IA", "Design System", "Accessibility"],
    summary: {
      en: "Restructured information architecture and shipped an observable, accessible UI based on OpenWebUI.",
      zh: "基于 OpenWebUI 进行 IA 重组与全流程 UI/UX 落地，强调可观测性与无障碍体验。",
    },
  },
  {
    slug: "cqms-site",
    externalUrl: "https://www.cqms.cn/",
    cover: { src: "/covers/cqms.svg", alt: "CQMS official website cover" },
    title: { en: "CQMS — Mass Spectrometry Website", zh: "宇思质谱官网" },
    tags: ["Website", "External"],
    summary: {
      en: "An external website project (opens in a new tab).",
      zh: "外部官网项目（新标签页打开）。",
    },
  },
  {
    slug: "luyitong-app",
    cover: { src: "/covers/luyitong.svg", alt: "Healthcare mobile app cover" },
    title: { en: "Luyitong — Healthcare Mobile App", zh: "鹿医通 医疗平台 App" },
    tags: ["Mobile App", "Core Flow Optimization", "Visual Design"],
    summary: {
      en: "Optimized purchase and consultation entry points with guided overlays and a health profile visualization module.",
      zh: "优化购药/问诊核心路径，新增导购与弹窗重构，并设计会员健康档案可视化模块。",
    },
  },
  {
    slug: "veglog",
    cover: { src: "/covers/veglog.svg", alt: "Veg intake tracking & learning product cover" },
    title: { en: "Veglog — Interactive Nutrition Learning", zh: "Veglog 交互式营养学习产品" },
    tags: ["Product Design", "AI Estimation", "Data Visualization"],
    summary: {
      en: "Unified daily logging with learning content, enabling editable records, AI portion estimation, and progress tracking.",
      zh: "打通记录与学习联动，落地可编辑记录、AI 食用量估算、学习进度追踪与历史可视化。",
    },
  },
  {
    slug: "multisensory-campus-nav",
    cover: { src: "/covers/nav.svg", alt: "Multi-sensory campus navigation research cover" },
    title: { en: "Multi-sensory Campus Navigation System", zh: "多感官交互式校园导航系统" },
    tags: ["Research", "Multi-device", "Prototyping"],
    summary: {
      en: "End-to-end research and prototyping for a multi-scenario navigation solution improving wayfinding efficiency.",
      zh: "全流程用户研究与原型设计，打造多场景适配的多感官智能导航解决方案。",
    },
  },
];

