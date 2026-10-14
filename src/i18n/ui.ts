export const languages = ["en", "zh"] as const;
export type Lang = (typeof languages)[number];

const en = {
  metaTitle: "Kehe Ye (叶可禾)",
  metaDescription:
    "Kehe Ye is a robotics system infrastructure engineer at Xspark AI, building data and evaluation infrastructure for embodied AI. Co-first author of FieldGen.",
  navNews: "News",
  navPubs: "Publications",
  navExperience: "Experience",
  navHonors: "Honors",
  navContact: "Contact",
  navLabel: "Primary",
  langLabel: "Language",
  portraitAlt: "Kehe Ye's illustrated avatar: a red-haired character in a cat-ear beanie and halo, pointing to the side.",
  secNews: "News",
  newsMore: "Show more",
  newsLess: "Show less",
  secPubs: "Publications",
  scholarLink: "Google Scholar",
  pubLegend: "* Equal contribution   † Corresponding author   § Project lead",
  secTalks: "Invited Talks",
  talkPlay: "Watch the talk",
  secExperience: "Experience",
  secEducation: "Education",
  secHonors: "Honors & Awards",
  secCompetitions: "Competitions",
  secProjects: "Projects",
  secContact: "Get in touch",
  contactLead: "Happy to talk about data and evaluation infrastructure for robot learning, and about putting systems on real robots.",
  contactEmail: "Email",
  footerPlace: "Shenzhen",
  footerUpdated: "Updated 2026-10",
  footerTop: "Top ↑",
};

const zh: { [K in keyof typeof en]: string } = {
  metaTitle: "叶可禾 (Kehe Ye)",
  metaDescription:
    "叶可禾，Xspark AI 机器人系统基础设施工程师，做具身智能的数据与评测基础设施，FieldGen 共同第一作者。",
  navNews: "动态",
  navPubs: "论文",
  navExperience: "经历",
  navHonors: "荣誉",
  navContact: "联系",
  navLabel: "主导航",
  langLabel: "语言",
  portraitAlt: "叶可禾的插画头像：戴猫耳毛线帽和光环的红发角色，伸手指向一侧。",
  secNews: "动态",
  newsMore: "展开更多",
  newsLess: "收起",
  secPubs: "论文",
  scholarLink: "Google Scholar",
  pubLegend: "* 共同第一作者   † 通讯作者   § 项目负责人",
  secTalks: "受邀报告",
  talkPlay: "观看报告",
  secExperience: "工作经历",
  secEducation: "教育背景",
  secHonors: "荣誉奖项",
  secCompetitions: "竞赛",
  secProjects: "项目",
  secContact: "联系我",
  contactLead: "欢迎交流机器人学习的数据与评测基础设施，以及把系统真正跑上真机的那些事。",
  contactEmail: "邮箱",
  footerPlace: "深圳",
  footerUpdated: "更新于 2026-10",
  footerTop: "回到顶部 ↑",
};

const ui = { en, zh };

export type UiKey = keyof typeof en;

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}
