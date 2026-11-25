import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const story: string = "Paid in tokens. Landlord wants dollars.";
const outPath: string = "/output/entry.txt";

const words: string[] = story.trim().split(/\s+/).filter((w) => w.length > 0);
if (words.length !== 6) {
  throw new Error(`entry must be exactly 6 words, got ${words.length}`);
}
if (story.length < 1 || story.length > 60) {
  throw new Error(`entry must be 1-60 characters, got ${story.length}`);
}
if (story.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, story, "utf8");
