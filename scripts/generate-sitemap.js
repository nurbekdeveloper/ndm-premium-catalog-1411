import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import products data
const productsModule = await import('../src/data/products.ts');
const products = productsModule.products;

const baseUrl = 'https://ndm.uz';
const currentDate = new Date().toISOString().split('T')[0];

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/catalog', priority: '0.9', changefreq: 'daily' },
  { url: '/solutions', priority: '0.8', changefreq: 'weekly' },
  { url: '/partners', priority: '0.8', changefreq: 'weekly' },
  { url: '/team', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
];

// Generate product pages
const productPages = products.map(product => ({
  url: `/product/${product.id}`,
  priority: '0.8',
  changefreq: 'weekly',
  images: product.images,
  name: product.name
}));

// Generate sitemap XML
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="uz" href="${baseUrl}${page.url}"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}${page.url}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.url}"/>
  </url>
`;
  });

  // Add product pages with images
  productPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="uz" href="${baseUrl}${page.url}"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}${page.url}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.url}"/>
`;
    
    // Add images for the product
    page.images.forEach(image => {
      sitemap += `    <image:image>
      <image:loc>${baseUrl}${image}</image:loc>
      <image:title>${page.name}</image:title>
    </image:image>
`;
    });
    
    sitemap += `  </url>
`;
  });

  sitemap += `</urlset>`;
  
  return sitemap;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
const sitemapPath = join(__dirname, '../public/sitemap.xml');
writeFileSync(sitemapPath, sitemap);

console.log(`✓ Sitemap generated with ${staticPages.length} static pages and ${productPages.length} product pages`);
console.log(`✓ Sitemap saved to: ${sitemapPath}`);
