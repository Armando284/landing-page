const fs = require('fs');
const environmentProd = `
  export const environment = {
    production: true,
    test: '${process.env.TEST_KEY}'
  };
`;

fs.writeFileSync('src/environments/environment.prod.ts', environmentProd);
console.log('Environment variables have been written to environment.prod.ts');
