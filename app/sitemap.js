import domainesData from '../content/domaines.json'

export default function sitemap() {
  const baseUrl = 'https://santedrill.vercel.app'

  // Accepte plusieurs formes possibles de JSON
  const domaines = Array.isArray(domainesData)
    ? domainesData
    : (domainesData?.domaines || domainesData?.items || [])

  const domaineUrls = domaines
    .map((d) => d?.slug || d?.id || d?.code || d?.name)
    .filter(Boolean)
    .map((slug) => ({
      url: `${baseUrl}/quiz/${slug}`,
      lastModified: new Date(),
    }))

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/domaines`, lastModified: new Date() },
    ...domaineUrls,
  ]
}
