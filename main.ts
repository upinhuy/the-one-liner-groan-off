// The One-Liner Groan-Off — entry program.
//
// Writes one original one-line dad joke (at most 140 characters) to
// /output/entry.txt, where the make.fun judge reads it. The program checks
// its own line against the gate before writing, so an over-long joke can
// never be submitted by accident.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I keep a pencil behind my ear — it helps me draw the line when the kids push their luck.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 140;

if ([...JOKE].length > MAX_CHARS || JOKE.trim().length === 0) {
  throw new Error(
    `Joke must be 1-${MAX_CHARS} characters, got ${[...JOKE].length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
console.log(`Wrote ${[...JOKE].length} characters to ${OUTPUT_PATH}`);
