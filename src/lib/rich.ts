const escapeHtml = (text: string) =>
  text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

/** Renders the two inline marks used in profile copy: `**bold**` and `[label](url)`. */
export function rich(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, (_, label: string, href: string) => {
      const external = /^https?:/.test(href);
      const attrs = external ? ' target="_blank" rel="noreferrer"' : "";
      return `<a href="${href}"${attrs}>${label}</a>`;
    });
}
