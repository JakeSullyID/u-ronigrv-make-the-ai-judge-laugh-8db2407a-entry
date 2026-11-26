import * as fs from 'node:fs';
import * as path from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const entryPath = path.join(outputDir, 'entry.txt');
// The humor arises from the contrast between the user's belief in collaborative steering and the mechanical reality of token-based pattern completion.
const jokeLine = "They promised it was just one quick question, but three sub-agents and forty tool calls later, my context window is holding on by a single semicolon.";

fs.mkdirSync(outputDir, { recursive: true });
// This script's sole purpose is to output this single short line as the entry text, nothing more.
fs.writeFileSync(entryPath, jokeLine, 'utf8');
