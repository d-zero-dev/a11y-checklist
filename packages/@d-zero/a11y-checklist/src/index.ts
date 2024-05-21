export type * from './types.js';

import type { A11YChecklist } from './types.js';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

export const a11YChecklist: A11YChecklist = require('./list.json');
