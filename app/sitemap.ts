import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ctiavukatlik.com'
  
  const services = [
    'sirketler-hukuku',
    'gayrimenkul-hukuku',
    'saglik-hukuku',
    'aile-hukuku',
    'ceza-hukuku',
    'idare-hukuku',
    'is-hukuku',
    'icra-iflas-hukuku',
    'miras-hukuku',
    'tuketici-hukuku',
    'vergi-hukuku'
  ]
  
  const servicePages = services.map(service => ({
    url: `${baseUrl}/hizmetler/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...servicePages,
  ]
}

