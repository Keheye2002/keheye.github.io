export function mountSite(): void {
  const root = document.documentElement;
  root.classList.add("js");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const nav = document.querySelector<HTMLElement>("[data-nav]");
  const onScroll = () => nav?.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const links = new Map<string, HTMLElement>();
  document.querySelectorAll<HTMLElement>("[data-nav-link]").forEach((link) => {
    links.set(link.dataset.navLink ?? "", link);
  });
  const sections = [...links.keys()]
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);
  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((link, id) => link.classList.toggle("is-active", id === entry.target.id));
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((section) => spy.observe(section));

  document.querySelectorAll<HTMLAnchorElement>("[data-lang-link]").forEach((link) => {
    const base = link.getAttribute("href") ?? "/";
    const apply = () => {
      link.href = `${base}${window.location.hash}`;
    };
    apply();
    window.addEventListener("hashchange", apply);
  });

  document.querySelectorAll<HTMLElement>("[data-news]").forEach((block) => {
    const toggle = block.querySelector<HTMLButtonElement>("[data-news-toggle]");
    const label = toggle?.querySelector("span");
    if (!toggle || !label) return;
    block.classList.add("is-collapsed");
    toggle.addEventListener("click", () => {
      const collapsed = block.classList.toggle("is-collapsed");
      label.textContent = (collapsed ? toggle.dataset.more : toggle.dataset.less) ?? "";
      toggle.classList.toggle("is-open", !collapsed);
    });
  });

  const videos = document.querySelectorAll<HTMLVideoElement>("video[data-autoplay]");
  if (!reduce) {
    const player = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) void video.play().catch(() => undefined);
          else video.pause();
        }
      },
      { threshold: 0.35 },
    );
    videos.forEach((video) => player.observe(video));
  }

  if (reduce) return;
  const blocks = document.querySelectorAll("[data-reveal]");
  const reveal = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        reveal.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  blocks.forEach((block) => reveal.observe(block));
}
