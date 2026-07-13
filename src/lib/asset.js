/** Prefix public assets with Vite's base (needed for GitHub Pages). */
export function asset(path) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${String(path).replace(/^\//, "")}`;
}
