/** Prefix public/ folder paths with Vite base URL (required for GitHub Pages). */
export function publicAsset(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const base = import.meta.env.BASE_URL
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${base}${clean}`
}
