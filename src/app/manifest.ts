import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gyozo Galcsik',
    short_name: 'Gyozo',
    description:
      'Professional Digital Native based in Brussels & Budapest. Web Developer, UI/UX Designer, Project Manager, Content Creator.',
    start_url: '/',
    display: 'standalone',
    background_color: '#17191d',
    theme_color: '#17191d',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
