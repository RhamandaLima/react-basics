// scripts/generate-component.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const [layer, componentName] = process.argv.slice(2);

if (!layer || !componentName) {
  console.log(`
❌ Uso incorreto!

Use:
  node scripts/generate-component.js <layer> <ComponentName>

Ex:
  node scripts/generate-component.js atoms Button
`);
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(
  __dirname,
  "..",
  "src",
  "components",
  layer,
  componentName
);
fs.mkdirSync(basePath, { recursive: true });

const tsxContent = `
import styles from './${componentName}.module.css';
import { ${componentName}Props } from './${componentName}.types.ts';

export function ${componentName}(props: ${componentName}Props) {
  return (
    <div className={styles.${componentName.toLowerCase()}}>
      ${componentName}
    </div>
  );
};
`;

const cssContent = `.${componentName.toLowerCase()} {
  /* styles here */
}
`;

const typesContent = `export interface ${componentName}Props {
  id: number;
}
`;

fs.writeFileSync(path.join(basePath, `${componentName}.tsx`), tsxContent);
fs.writeFileSync(
  path.join(basePath, `${componentName}.module.css`),
  cssContent
);
fs.writeFileSync(
  path.join(basePath, `${componentName}.types.ts`),
  typesContent
);

console.log(
  `✅ Componente "${componentName}" criado com sucesso em src/components/${layer}/${componentName}`
);
