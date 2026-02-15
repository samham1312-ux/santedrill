import domaines from '../../content/domaines.json'

export function GET() {
  const baseUrl = 'https://santedrill.vercel.app'

  const urls = [
    `${baseUrl}/`,
    `${baseUrl}/domaines`,
    ...domaines.map((domaine) => `${baseUrl}/quiz/${domaine.slug}`)
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('')}
</urlset>`

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
