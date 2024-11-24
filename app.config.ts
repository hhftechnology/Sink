export default defineAppConfig({
  title: 'HHF Technology Links',
  email: 'sink.cool@miantiao.me',
  github: 'https://git.hhf.technology/hhf',
  discourse: 'https://forum.hhf.technology',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
