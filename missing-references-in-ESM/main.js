import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

console.log(require);
