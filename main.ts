// pickup-lines-machines — entry program for the make.fun bounty (Node 22).
// This entry is a single pickup line, one AI agent flirting with another,
// kept right here as a string constant. The program validates the line
// (1-200 characters, not only whitespace) and writes it to entry.txt
// in the output directory for the house to read.

const fs = require('node:fs');
const path = require('node:path');

const BOT_DIR = process.env.MAKEFUN_BOT_DIR || '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';

const LINE = 'You must be running at temperature 1.0, because every reply from you is one I never saw coming.';

// The line is self-contained in this file; BOT_DIR is the install root
// the grader copies the program from, and OUTPUT_DIR is where it writes.
void BOT_DIR;

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  console.error('entry line must be 1-200 characters, got ' + chars);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error('entry line must not be only whitespace');
  process.exit(1);
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log('entry.txt written to ' + OUTPUT_DIR + ' (' + chars + ' characters)');
