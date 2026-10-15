import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n/ui";
import portrait from "../assets/avatar.jpg";
import avatar from "../assets/avatar-head.png";
import fieldgenPick from "../assets/pubs/fieldgen-pick.jpg";
import humantouchSetup from "../assets/pubs/humantouch-setup.jpg";
import humantouchGlove from "../assets/pubs/humantouch-glove.jpg";
import xpolicylabMethod from "../assets/pubs/xpolicylab-method.png";
import xpolicylabTeaser from "../assets/pubs/xpolicylab-teaser.png";
import robodojoTeaser from "../assets/pubs/robodojo-teaser.png";
import robodojoPoster from "../assets/pubs/robodojo-realeval-poster.jpg";
import spark0Cover from "../assets/pubs/spark0-cover.jpg";
import luminaTalk18 from "../assets/talks/lumina-talk-18.webp";
import iros2026Certificate from "../assets/honors/iros-2026-best-tool.jpg";
import xsparkLogo from "../assets/logos/xspark.png";
import agibotLogo from "../assets/logos/agibot.png";
import tencentLogo from "../assets/logos/tencent.svg";
import szuLogo from "../assets/logos/szu.svg";

/** Bilingual copy. Inline `**bold**` and `[label](url)` are rendered by `rich()`. */
export type Copy = { en: string; zh: string };

export function pick(lang: Lang, copy: Copy): string {
  return copy[lang];
}

const same = (text: string): Copy => ({ en: text, zh: text });

/** Files in `public/media/`, which are not rewritten for the deploy base path. */
const media = (file: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, "/")}media/${file}`;

export type IconKey = "email" | "scholar" | "github" | "x";

export type Author = { name: string; mark?: string; me?: boolean } | { gap: true };

export type Entry = {
  logo: ImageMetadata;
  logoAlt: string;
  org: Copy;
  role: Copy;
  when: Copy;
  place: Copy;
  detail: Copy;
  outcome?: Copy;
};

export type Media =
  | { kind: "image"; src: ImageMetadata; alt: Copy }
  | { kind: "video"; src: string; poster: ImageMetadata; alt: Copy };

export type Publication = {
  id: string;
  title: string;
  thumb: ImageMetadata;
  authors: Author[];
  venue: Copy;
  venueNote?: Copy;
  award?: Copy;
  /** For work credited in acknowledgements rather than the author list. */
  credit?: Copy;
  highlight: boolean;
  links: { href: string; label: Copy }[];
};

export const profile = {
  name: "Kehe Ye",
  nameZh: "叶可禾",
  email: "keheye2002@gmail.com",
  portrait,
  avatar,
  heroBackdrop: fieldgenPick,
  roles: [
    {
      label: { en: "System Infra Engineer", zh: "系统基础设施工程师" },
      value: same("Xspark AI"),
    },
    {
      label: { en: "Previously", zh: "曾就职" },
      value: { en: "AgiBot · Tencent", zh: "智元 · 腾讯" },
    },
    {
      label: { en: "B.Eng.", zh: "工学学士" },
      value: { en: "Shenzhen University", zh: "深圳大学" },
    },
  ] satisfies { label: Copy; value: Copy }[],
  tagline: {
    en: "Infrastructure for **robots that learn**",
    zh: "为**会学习的机器人**做基础设施",
  } satisfies Copy,
  bio: {
    en: "Robotics system infrastructure engineer at **Xspark AI**, building the data and evaluation layer for embodied AI. Co-first author of **FieldGen** and an author of **Spark-0**. Contributor to **XPolicyLab** (**Best Tool Paper**, IROS 2026 ScaleInfra Workshop), the **RoboDojo** real-robot evaluation infrastructure, and **HumanTouch**. Previously at **AgiBot** and **Tencent**, and a two-time **ICPC Asia Regional** silver medalist.",
    zh: "**Xspark AI** 机器人系统基础设施工程师，做具身智能的数据与评测基础设施。**FieldGen** 共同第一作者，**Spark-0** 作者，参与 **XPolicyLab**（IROS 2026 ScaleInfra Workshop **最佳工具论文奖**）、**RoboDojo** 真机评测基础设施与 **HumanTouch**。曾在**智元 AgiBot** 与**腾讯**工作，两次获得 **ICPC 亚洲区域赛**银牌。",
  } satisfies Copy,
  links: [
    { icon: "email", href: "mailto:keheye2002@gmail.com", label: { en: "Email", zh: "邮箱" } },
    {
      icon: "scholar",
      href: "https://scholar.google.com/citations?user=xQWoHWwAAAAJ",
      label: same("Scholar"),
    },
    { icon: "github", href: "https://github.com/keheye2002", label: same("GitHub") },
    { icon: "x", href: "https://x.com/CheeseLongan", label: same("X") },
  ] satisfies { icon: IconKey; href: string; label: Copy }[],
  news: [
    {
      date: "10/2026",
      text: {
        en: "Released [Spark-0](https://xsparkai.com/Spark-0/), a spatially aligned vision-tactile-language-action model pretrained on **1,000 hours** of HumanTouch.",
        zh: "发布 [Spark-0](https://xsparkai.com/Spark-0/)，基于 **1000 小时** HumanTouch 预训练的空间对齐视觉-触觉-语言-动作模型。",
      },
    },
    {
      date: "10/2026",
      text: {
        en: "XPolicyLab received the **Best Tool Paper Award** at the **IROS 2026 ScaleInfra Workshop**!",
        zh: "XPolicyLab 获得 **IROS 2026 ScaleInfra Workshop 最佳工具论文奖**！",
      },
    },
    {
      date: "08/2026",
      text: {
        en: "Released [XPolicyLab](https://xpolicylab.github.io/), a unified standard and open ecosystem for robot policy evaluation and deployment.",
        zh: "发布 [XPolicyLab](https://xpolicylab.github.io/)，一套统一的机器人策略评测与部署标准和开放生态。",
      },
    },
    {
      date: "08/2026",
      text: {
        en: "Xspark AI released [HumanTouch](https://xsparkai.com/sparklab/humantouch/), a **1,000-hour** human-hand tactile dataset and acquisition system.",
        zh: "Xspark AI 发布 [HumanTouch](https://xsparkai.com/sparklab/humantouch/)，**1000 小时**人手全掌触觉数据集与采集系统。",
      },
    },
    {
      date: "07/2026",
      text: {
        en: "Released [RoboDojo](https://robodojo-benchmark.com/), a unified sim-and-real benchmark for generalist manipulation policies. I helped build its **RoboDojo-RealEval** real-robot evaluation infrastructure.",
        zh: "发布 [RoboDojo](https://robodojo-benchmark.com/)，统一仿真与真机的通用操作策略评测基准。我参与搭建了其中的 **RoboDojo-RealEval** 真机评测基础设施。",
      },
    },
    {
      date: "11/2025",
      text: {
        en: "Joined **Xspark AI** as a robotics system infrastructure engineer.",
        zh: "加入 **Xspark AI**，任机器人系统基础设施工程师。",
      },
    },
    {
      date: "10/2025",
      text: {
        en: "Presented **FieldGen** at [Lumina Talk #18](https://www.bilibili.com/video/BV1xP2gBWEDL/), the SJTU ScaleLab session.",
        zh: "在 [Lumina Talk 第 18 期](https://www.bilibili.com/video/BV1xP2gBWEDL/)（上海交大 ScaleLab 专场）分享 **FieldGen**。",
      },
    },
    {
      date: "10/2025",
      text: {
        en: "[FieldGen](https://fieldgen.github.io/) is out on arXiv, as **co-first author**.",
        zh: "[FieldGen](https://fieldgen.github.io/) 发布在 arXiv，我是**共同第一作者**。",
      },
    },
    {
      date: "07/2025",
      text: {
        en: "Graduated from **Shenzhen University** and joined the **AgiBot** Teleoperation Group.",
        zh: "从**深圳大学**毕业，加入**智元 AgiBot** 遥操作组。",
      },
    },
    {
      date: "04/2024",
      text: {
        en: "Joined **Tencent** IaaS Frontier Technology Group as a software engineering intern.",
        zh: "加入**腾讯** IaaS 前沿技术组，任软件工程实习生。",
      },
    },
    {
      date: "2023",
      text: {
        en: "Won the **Gold Medal** at CCPC Guangdong Provincial Contest.",
        zh: "获得 CCPC 广东省赛**金牌**。",
      },
    },
  ] satisfies { date: string; text: Copy }[],
  pubSummary: [
    {
      key: { en: "Papers & reports", zh: "论文与报告" },
      rows: [
        {
          label: { en: "Co-first author × 1", zh: "共同第一作者 × 1" },
          items: [{ text: "FieldGen", href: "#pub-fieldgen" }],
        },
        {
          label: { en: "Author × 3", zh: "作者 × 3" },
          items: [
            { text: "Spark-0", href: "#pub-spark0" },
            { text: "XPolicyLab", href: "#pub-xpolicylab" },
            { text: "HumanTouch", href: "#pub-humantouch" },
          ],
        },
        {
          label: { en: "Infra contributor × 1", zh: "基础设施贡献者 × 1" },
          items: [{ text: "RoboDojo", href: "#pub-robodojo", note: "RealEval" }],
        },
      ],
    },
    {
      key: { en: "Workshop awards", zh: "研讨会奖项" },
      rows: [
        {
          label: { en: "Best Tool Paper × 1", zh: "最佳工具论文 × 1" },
          items: [{ text: "XPolicyLab", href: "#pub-xpolicylab", note: "@ IROS 2026 ScaleInfra" }],
        },
      ],
    },
  ],
  featured: [
    {
      media: {
        kind: "video",
        src: media("spark0-cover.mp4"),
        poster: spark0Cover,
        alt: {
          en: "Xspark AI humanoid with tactile gloves at a table of dexterous manipulation objects.",
          zh: "Xspark AI 人形机器人戴着触觉手套，站在灵巧操作实验台前。",
        },
      },
      caption: { en: "Spark-0 (Preprint)", zh: "Spark-0（预印本）" },
      href: "#pub-spark0",
    },
    {
      media: {
        kind: "image",
        src: fieldgenPick,
        alt: {
          en: "AgiBot dual-arm robot with many bottle placements overlaid as ghosted exposures.",
          zh: "智元双臂机器人，多次摆放的瓶子以半透明叠影呈现。",
        },
      },
      caption: { en: "FieldGen (Under Review)", zh: "FieldGen（审稿中）" },
      href: "#pub-fieldgen",
    },
    {
      media: {
        kind: "video",
        src: media("humantouch-glove.mp4"),
        poster: humantouchGlove,
        alt: {
          en: "A tracked tactile glove streaming a live hand reconstruction.",
          zh: "带追踪的触觉手套，实时显示手部重建。",
        },
      },
      caption: { en: "HumanTouch (Technical Blog)", zh: "HumanTouch（技术博客）" },
      href: "#pub-humantouch",
    },
    {
      media: {
        kind: "video",
        src: media("robodojo-realeval.mp4"),
        poster: robodojoPoster,
        alt: {
          en: "An ARX arm on the RoboDojo-RealEval platform placing bread into a bowl.",
          zh: "RoboDojo-RealEval 平台上的 ARX 机械臂把面包放进碗里。",
        },
      },
      caption: { en: "RoboDojo (RealEval)", zh: "RoboDojo（真机评测）" },
      href: "#pub-robodojo",
    },
    {
      media: {
        kind: "image",
        src: xpolicylabTeaser,
        alt: { en: "XPolicyLab wordmark over integrated policy names.", zh: "XPolicyLab 标识与已接入的策略名称。" },
      },
      caption: { en: "XPolicyLab (IROS 2026)", zh: "XPolicyLab（IROS 2026）" },
      href: "#pub-xpolicylab",
      fit: "contain",
    },
  ] satisfies { media: Media; caption: Copy; href: string; fit?: "contain" }[],
  pubGroups: [
    {
      key: { en: "Models", zh: "模型" },
      tag: { en: "Pretrain · Manipulate", zh: "预训练 · 操作" },
      items: [
        {
          id: "pub-spark0",
          title: "Spark-0: Scaling Spatially Aligned Tactile Pretraining for Robot Dexterous Manipulation",
          thumb: spark0Cover,
          authors: [
            { name: "Tianxing Chen", mark: "*§" },
            { name: "Wenwei Lin", mark: "*" },
            { name: "Chuqiao Lyu", mark: "*§" },
            { gap: true },
            { name: "Kehe Ye", me: true },
            { gap: true },
            { name: "Ping Luo", mark: "†" },
            { name: "Wenbo Ding", mark: "†" },
          ],
          venue: { en: "Preprint 2026", zh: "预印本 2026" },
          venueNote: {
            en: "Xspark AI · 1,000-hour tactile pretraining",
            zh: "Xspark AI · 1000 小时触觉预训练",
          },
          highlight: true,
          links: [
            { href: "https://xsparkai.com/Spark-0/", label: { en: "Project Page", zh: "项目主页" } },
            { href: "https://xsparkai.com/Spark-0/paper.pdf", label: { en: "Paper", zh: "论文" } },
          ],
        },
      ],
    },
    {
      key: { en: "Data", zh: "数据" },
      tag: { en: "Collect · Generate", zh: "采集 · 生成" },
      items: [
        {
          id: "pub-fieldgen",
          title: "FieldGen: From Teleoperated Pre-Manipulation Trajectories to Field-Guided Data Generation",
          thumb: fieldgenPick,
          authors: [
            { name: "Wenhao Wang", mark: "*" },
            { name: "Kehe Ye", mark: "*", me: true },
            { name: "Xinyu Zhou", mark: "*" },
            { name: "Tianxing Chen", mark: "*" },
            { gap: true },
            { name: "Maoqing Yao" },
            { name: "Yao Mu", mark: "†" },
          ],
          venue: { en: "Under Review", zh: "审稿中" },
          venueNote: same("arXiv 2510.20774"),
          highlight: true,
          links: [
            { href: "https://fieldgen.github.io/", label: { en: "Project Page", zh: "项目主页" } },
            { href: "https://arxiv.org/abs/2510.20774", label: same("arXiv") },
            { href: "https://github.com/FieldGen/FieldGen", label: { en: "Code", zh: "代码" } },
            { href: "https://www.bilibili.com/video/BV1xP2gBWEDL/", label: { en: "Talk", zh: "报告视频" } },
          ],
        },
        {
          id: "pub-humantouch",
          title: "HumanTouch: A Multimodal System for Scalable Human-Hand Tactile Acquisition",
          thumb: humantouchSetup,
          authors: [
            { name: "Chuqiao Lyu", mark: "*§" },
            { name: "Chenze Yu", mark: "*" },
            { name: "Eric J Chen", mark: "*" },
            { name: "Wenxuan Zhu", mark: "*" },
            { gap: true },
            { name: "Kehe Ye", me: true },
            { gap: true },
            { name: "Qi Xiong", mark: "†" },
            { name: "Tianxing Chen", mark: "†" },
            { name: "Wenbo Ding", mark: "†" },
          ],
          venue: { en: "Technical Blog", zh: "技术博客" },
          venueNote: { en: "Xspark AI SparkLab · 1,000-hour dataset", zh: "Xspark AI SparkLab · 1000 小时数据集" },
          highlight: false,
          links: [
            { href: "https://xsparkai.com/sparklab/humantouch/", label: { en: "Project Page", zh: "项目主页" } },
            {
              href: "https://www.modelscope.cn/datasets/chuqiaoLyu/Xspark-HumanTouch",
              label: { en: "Dataset (ModelScope)", zh: "数据集（ModelScope）" },
            },
          ],
        },
      ],
    },
    {
      key: { en: "Infra", zh: "基础设施" },
      tag: { en: "Evaluate · Deploy", zh: "评测 · 部署" },
      items: [
        {
          id: "pub-xpolicylab",
          title: "XPolicyLab: A Unified Standard and Open Ecosystem for Robot Policy Evaluation and Deployment",
          thumb: xpolicylabMethod,
          authors: [
            { name: "Tianxing Chen", mark: "*§" },
            { name: "Yue Chen", mark: "*" },
            { name: "Tian Nian", mark: "*" },
            { gap: true },
            { name: "Kehe Ye", me: true },
            { gap: true },
            { name: "Wenbo Ding", mark: "†" },
            { name: "Ping Luo", mark: "†" },
          ],
          venue: { en: "arXiv 2026", zh: "arXiv 2026" },
          venueNote: { en: "Xspark AI team · benchmark infrastructure", zh: "Xspark AI 团队 · 评测基础设施" },
          award: {
            en: "IEEE IROS 2026 ScaleInfra Workshop **Best Tool Paper Award**",
            zh: "IEEE IROS 2026 ScaleInfra Workshop **最佳工具论文奖**",
          },
          highlight: false,
          links: [
            { href: "https://xpolicylab.github.io/", label: { en: "Project Page", zh: "项目主页" } },
            { href: "https://arxiv.org/abs/2608.09892", label: same("arXiv") },
            { href: "https://github.com/XPolicyLab/XPolicyLab", label: { en: "Code", zh: "代码" } },
          ],
        },
        {
          id: "pub-robodojo",
          title: "RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies",
          thumb: robodojoTeaser,
          authors: [
            { name: "Tianxing Chen", mark: "*§" },
            { name: "Yue Chen", mark: "*§†" },
            { name: "Zixuan Li", mark: "*" },
            { gap: true },
            { name: "Wenbo Ding", mark: "†" },
            { name: "Ping Luo", mark: "†" },
            { name: "Masayoshi Tomizuka", mark: "†" },
          ],
          venue: { en: "arXiv 2026", zh: "arXiv 2026" },
          venueNote: {
            en: "arXiv 2607.04434 · 42 sim + 18 real-world tasks",
            zh: "arXiv 2607.04434 · 42 个仿真 + 18 个真机任务",
          },
          credit: {
            en: "Acknowledged as a **RoboDojo-RealEval Infrastructure Contributor**",
            zh: "致谢名单：**RoboDojo-RealEval 真机评测基础设施贡献者**",
          },
          highlight: false,
          links: [
            { href: "https://robodojo-benchmark.com/", label: { en: "Project Page", zh: "项目主页" } },
            { href: "https://arxiv.org/abs/2607.04434", label: same("arXiv") },
            { href: "https://github.com/RoboDojo-Benchmark/RoboDojo", label: { en: "Code", zh: "代码" } },
          ],
        },
      ],
    },
  ] satisfies { key: Copy; tag: Copy; items: Publication[] }[],
  talks: [
    {
      id: "talk-lumina-18",
      title: {
        en: "FieldGen: Semi-Automatic Real-World Data Collection and Generation",
        zh: "FieldGen：半自动真机数据采集与生成框架",
      },
      poster: luminaTalk18,
      posterAlt: {
        en: "Lumina Talk poster: SJTU Scale Lab, Discrete Diffusion VLA, AdaMoE-VLA, FieldGen.",
        zh: "Lumina Talk 海报：SJTU Scale Lab，Discrete Diffusion VLA、AdaMoE-VLA、FieldGen。",
      },
      context: {
        en: "SJTU ScaleLab session with Discrete Diffusion VLA and AdaMoE-VLA. I presented **FieldGen**.",
        zh: "上海交大 ScaleLab 专场，同场分享 Discrete Diffusion VLA 与 AdaMoE-VLA，我负责讲 **FieldGen**。",
      },
      venue: { en: "Lumina Talk #18", zh: "Lumina Talk 第 18 期" },
      venueNote: {
        en: "Oct 30, 2025 · Lumina Embodied AI Community",
        zh: "2025 年 10 月 30 日 · Lumina 具身智能社区",
      },
      video: "https://www.bilibili.com/video/BV1xP2gBWEDL/",
      links: [
        { href: "https://www.bilibili.com/video/BV1xP2gBWEDL/", label: { en: "Video (Bilibili)", zh: "视频（B 站）" } },
        { href: "https://lumina-embodied.ai/talks", label: same("Lumina Talks") },
        { href: "#pub-fieldgen", label: { en: "Paper", zh: "论文" } },
      ],
    },
  ] satisfies {
    id: string;
    title: Copy;
    poster: ImageMetadata;
    posterAlt: Copy;
    context: Copy;
    venue: Copy;
    venueNote: Copy;
    video: string;
    links: { href: string; label: Copy }[];
  }[],
  experience: [
    {
      logo: xsparkLogo,
      logoAlt: "Xspark AI",
      org: same("Xspark AI"),
      role: { en: "Robotics System Infrastructure Engineer", zh: "机器人系统基础设施工程师" },
      when: { en: "2025.11 – present", zh: "2025.11 – 至今" },
      place: { en: "Shenzhen", zh: "深圳" },
      detail: {
        en: "Data infrastructure for embodied models, and evaluation infrastructure that runs one policy adapter in simulation and on real robots.",
        zh: "具身模型的数据基础设施，以及让同一个策略适配器在仿真和真机上评测的基础设施。",
      },
      outcome: same("Spark-0 · XPolicyLab · RoboDojo-RealEval · HumanTouch"),
    },
    {
      logo: agibotLogo,
      logoAlt: "AgiBot",
      org: { en: "AgiBot", zh: "智元 AgiBot" },
      role: { en: "Research Intern, Teleoperation Group", zh: "研究实习生，遥操作组" },
      when: same("2025.07 – 2025.10"),
      place: { en: "Shanghai", zh: "上海" },
      detail: {
        en: "Deployed edge-side policies (DP, ACT, RDT) on teleoperation systems and built semi-automatic data collection.",
        zh: "在遥操作系统上部署端侧策略（DP、ACT、RDT），搭建半自动数据采集。",
      },
      outcome: { en: "FieldGen, co-first author", zh: "FieldGen，共同第一作者" },
    },
    {
      logo: tencentLogo,
      logoAlt: "Tencent",
      org: { en: "Tencent", zh: "腾讯" },
      role: {
        en: "Software Engineering Intern, IaaS Frontier Technology Group",
        zh: "软件工程实习生，IaaS 前沿技术组",
      },
      when: same("2024.04 – 2024.08"),
      place: { en: "Shenzhen", zh: "深圳" },
      detail: {
        en: "Traffic-generation tools and metrics for TCP congestion control; reworked the connection manager; tRPC-CPP protocol and observability.",
        zh: "为 TCP 拥塞控制编写流量生成工具与指标；重做连接管理器；参与 tRPC-CPP 协议与可观测性。",
      },
      outcome: { en: "2× connection-manager throughput", zh: "连接管理器吞吐提升 2 倍" },
    },
  ] satisfies Entry[],
  education: [
    {
      logo: szuLogo,
      logoAlt: "Shenzhen University",
      org: { en: "Shenzhen University", zh: "深圳大学" },
      role: { en: "B.Eng. in Software Engineering", zh: "软件工程，工学学士" },
      when: same("2021.09 – 2025.07"),
      place: { en: "Shenzhen", zh: "深圳" },
      detail: {
        en: "College of Computer Science and Software Engineering. Member of the SZU ACM-ICPC training team.",
        zh: "计算机与软件学院。深圳大学 ACM-ICPC 集训队队员。",
      },
    },
  ] satisfies Entry[],
  certificate: {
    src: iros2026Certificate,
    alt: {
      en: "Best Tool Paper certificate from the IROS 2026 ScaleInfra Workshop, awarded to all XPolicyLab contributors.",
      zh: "IROS 2026 ScaleInfra Workshop 最佳工具论文证书，授予 XPolicyLab 全体贡献者。",
    },
  },
  honors: [
    {
      year: "2026",
      title: { en: "Best Tool Paper Award", zh: "最佳工具论文奖" },
      issuer: {
        en: "IEEE IROS 2026 ScaleInfra Workshop · XPolicyLab",
        zh: "IEEE IROS 2026 ScaleInfra Workshop · XPolicyLab",
      },
      highlight: true,
    },
    {
      year: "2023",
      title: { en: "First Prize, Innovation & Entrepreneurship Star (Team)", zh: "创新创业之星（团队）一等奖" },
      issuer: { en: "Shenzhen University", zh: "深圳大学" },
      highlight: false,
    },
    {
      year: "2022",
      title: {
        en: "First Prize, Innovation & Entrepreneurship Star (Individual)",
        zh: "创新创业之星（个人）一等奖",
      },
      issuer: { en: "Shenzhen University", zh: "深圳大学" },
      highlight: false,
    },
  ],
  competitions: [
    {
      year: "2023",
      tone: "gold",
      event: {
        en: "CCPC Guangdong Provincial Contest",
        zh: "CCPC 广东省赛",
      },
      detail: { en: "Guangdong Collegiate Programming Contest", zh: "广东省大学生程序设计竞赛" },
      result: { en: "Gold Medal", zh: "金牌" },
    },
    {
      year: "2022",
      tone: "silver",
      event: { en: "47th ICPC Asia Regional, Nanjing", zh: "第 47 届 ICPC 亚洲区域赛（南京）" },
      detail: { en: "International Collegiate Programming Contest", zh: "国际大学生程序设计竞赛" },
      result: { en: "Silver Medal", zh: "银牌" },
    },
    {
      year: "2022",
      tone: "silver",
      event: { en: "47th ICPC Asia Regional, Jinan", zh: "第 47 届 ICPC 亚洲区域赛（济南）" },
      detail: { en: "International Collegiate Programming Contest", zh: "国际大学生程序设计竞赛" },
      result: { en: "Silver Medal", zh: "银牌" },
    },
    {
      year: "2022",
      tone: "gold",
      event: { en: "Pony.ai Cup, Guangdong Contest", zh: "「小马智行杯」广东省赛" },
      detail: { en: "Guangdong Collegiate Programming Contest", zh: "广东省大学生程序设计竞赛" },
      result: { en: "Gold Medal", zh: "金牌" },
    },
    {
      year: "2021",
      tone: "bronze",
      event: { en: "CCF CCSP National Contest", zh: "CCF CCSP 全国赛" },
      detail: { en: "Collegiate Computer Systems & Programming", zh: "大学生计算机系统与程序设计竞赛" },
      result: { en: "Bronze Award", zh: "铜奖" },
    },
    {
      year: "2018",
      tone: "gold",
      event: { en: "NOIP Senior, Zhejiang", zh: "NOIP 提高组（浙江）" },
      detail: { en: "National Olympiad in Informatics in Provinces", zh: "全国青少年信息学奥林匹克联赛" },
      result: { en: "First Prize", zh: "一等奖" },
    },
  ] satisfies { year: string; tone: "gold" | "silver" | "bronze"; event: Copy; detail: Copy; result: Copy }[],
  projects: [
    {
      title: "X-One-Pipeline",
      when: { en: "2026 · Xspark AI open source", zh: "2026 · Xspark AI 开源" },
      repo: "XsparkAI/X-One-Pipeline",
      featured: true,
      tags: ["Python", "ROS", "Teleoperation", "Data collection", "Policy deployment"],
      body: {
        en: "Official code for the Xspark AI X-One robot learning platform: master-slave teleoperation, data collection, storage and replay, and policy deployment and evaluation in one end-to-end workflow.",
        zh: "Xspark AI X-One 机器人学习平台的官方代码，把主从遥操作、数据采集、存储与回放、策略部署与评测打通成一条端到端流程。",
      },
    },
    {
      title: "rCore",
      when: same("2023 Fall"),
      tags: ["Rust", "RISC-V", "OS"],
      body: {
        en: "A RISC-V kernel in Rust with multi-level page tables, virtual memory, system calls, time-sharing, and priority scheduling. Tsinghua rCore camp.",
        zh: "用 Rust 写的 RISC-V 内核，包含多级页表、虚拟内存、系统调用、分时与优先级调度。清华 rCore 训练营。",
      },
    },
    {
      title: "DLinear Forecasting",
      when: { en: "Course project", zh: "课程项目" },
      tags: ["Time series", "Finance"],
      body: {
        en: "Long-horizon multivariate forecasting: RevIN and multi-frequency decomposition on DLinear, about 30% more robust and 25.7% better on metrics, still ~10× faster than Transformer baselines.",
        zh: "长程多元时间序列预测：在 DLinear 上加入 RevIN 与多频率分解，鲁棒性提升约 30%，指标提升 25.7%，推理仍比 Transformer 基线快约 10 倍。",
      },
    },
  ] satisfies { title: string; when: Copy; repo?: string; featured?: boolean; tags: string[]; body: Copy }[],
  sameAs: [
    "https://x.com/CheeseLongan",
    "https://scholar.google.com/citations?user=xQWoHWwAAAAJ",
    "https://github.com/keheye2002",
    "https://fieldgen.github.io/",
    "https://xpolicylab.github.io/",
    "https://robodojo-benchmark.com/",
    "https://xsparkai.com/Spark-0/",
  ],
};
