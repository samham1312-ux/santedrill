export default function sitemap() {
  const baseUrl = 'https://santedrill.vercel.app'

  const slugs = [
    'anatomie',
    'bio-fondamentale',
    'droit-ethique',
    'hygiene-infectiologie',
    'pharmacologie',
    'physiologie',
    'psychologie',
    'soins-surveillance',
  ]

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/domaines`, lastModified: new Date() },
    ...slugs.map((slug) => ({
      url: `${baseUrl}/quiz/${slug}`,
      lastModified: new Date(),
    })),
  ]
}
