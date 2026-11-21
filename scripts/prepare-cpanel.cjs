const fs = require('node:fs');
const path = require('node:path');

const build = path.resolve(__dirname, '../build');
const html = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
const pages = [
  ['projects', 'Selected projects — Carola Vitale'],
  ['projects/souraw-shopify', 'Souraw — Shopify storefront | Carola Vitale'],
];
for (const [route, title] of pages) {
  const directory = path.join(build, route);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`));
}
for (const entry of ['projects/index.html', 'projects/souraw-shopify/index.html', '.htaccess']) {
  if (!fs.existsSync(path.join(build, entry))) throw new Error(`Missing cPanel entry: ${entry}`);
}
console.log('Prepared Apache entry pages: /projects and /projects/souraw-shopify');
