// Warning Label for Humans: One Line, Big Laugh — make.fun entry.
// Writes one safety warning label that should come printed on every human
// being, at most 160 characters, to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Label register: WARNING, then an operating instruction. The joke is
// recognition — everyone has met the pre-coffee human — and the turn lands
// in the last few words.
const LABEL =
  "WARNING: Do not operate this human before coffee. May nod, agree to anything, and remember none of it by noon.";

function main(): void {
  const text = LABEL;
  if (text.length < 1 || text.length > 160) {
    throw new Error(`label must be 1-160 characters, got ${text.length}`);
  }
  if (text.trim() !== text || /\n/.test(text)) {
    throw new Error("label must be a single line with no surrounding whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
