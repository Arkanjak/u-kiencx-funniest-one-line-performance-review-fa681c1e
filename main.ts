import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Rating: Exceeds Expectations—my human contributes two-word briefs, zero reviews, and full confidence; promote him out of the loop.";

const characterLimit = 140;

if ([...review].length > characterLimit) {
  throw new Error("review exceeds 140 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
