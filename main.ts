import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We rent strangers' grandmothers to scold grad students to finish their theses, because a disappointed grandma beats any productivity app — and procrastinators pay for a deadline they can't set.";

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const periods = (ENTRY.match(/\./g) ?? []).length;
  if (periods !== 1 || !ENTRY.endsWith(".")) {
    throw new Error("entry must be exactly one sentence");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  const back = readFileSync(outPath, "utf8");
  if (back !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt is not byte-identical to ENTRY");
  }
  console.log(`wrote ${Buffer.byteLength(ENTRY, "utf8")} bytes`);
}

main();
