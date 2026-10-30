// Resolves a public/ path for both local dev and GitHub Pages (/ana/).
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\.?\//, '')}`
}
