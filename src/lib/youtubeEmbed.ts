/** Convert a YouTube watch/share URL into an embeddable iframe src. */
export function youtubeEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  )
  if (!match) return url
  return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`
}
