import domaines from '../content/domaines.json'

export default function sitemap() {
  const baseUrl = 'https://santedrill.vercel.app'

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/domaines`, lastModified: new Date() },
    ...domaines.map((d) => ({
      url: `${baseUrl}/quiz/${d.slug}`,
      lastModified: new Date(),
    })),
  ]
}
