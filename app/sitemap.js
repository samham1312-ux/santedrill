import domaines from '../content/domaines.json'

export default function sitemap() {
  const baseUrl = 'https://santedrill.vercel.app'

  const urls = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/domaines`,
      lastModified: new Date(),
    },
    ...domaines.map((domaine) => ({
      url: `${baseUrl}/quiz/${domaine.slug}`,
      lastModified: new Date(),
    })),
  ]

  return urls
}
