const fs = require('fs');
const path = require('path');

const envDir = path.join(__dirname, '../src/environments');

if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

const content = `export const environment = {
  production: true,
  emailjsServiceId: '${process.env['EMAILJS_SERVICE_ID'] || ''}',
  emailjsTemplateId: '${process.env['EMAILJS_TEMPLATE_ID'] || ''}',
  emailjsPublicKey: '${process.env['EMAILJS_PUBLIC_KEY'] || ''}',
};
`;

fs.writeFileSync(
  path.join(envDir, 'environment.prod.ts'),
  content
);

console.log('environment.prod.ts generado correctamente');