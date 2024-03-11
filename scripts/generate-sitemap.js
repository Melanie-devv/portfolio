const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/index', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'daily', priority: 0.9 },
    { url: '/articles', changefreq: 'weekly', priority: 0.7 },
    { url: '/bts', changefreq: 'weekly', priority: 0.5 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
    { url: '/projects', changefreq: 'weekly', priority: 0.8 },
    { url: '/settings', changefreq: 'yearly', priority: 0.5 },
];

const sitemap = new SitemapStream({ hostname: 'https://melanie-bulkan-portfolio.netlify.app' });

sitemap.pipe(createWriteStream('public/sitemap.xml'));

links.forEach(link => {
    sitemap.write(link);
});

sitemap.end();