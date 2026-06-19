import { site } from '../../app/config/site';

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain');
  return `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
});
