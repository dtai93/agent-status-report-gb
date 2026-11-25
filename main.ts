// Weekly status line for the make.fun comedy sprint.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Done: replied in your voice. In progress: cutting the sentence that sounds like me. Blocker: that sentence is the answer. Next week: your voice, minus the answer.";

const text = LINE;
if ([...text].length < 1 || [...text].length > 199 || text.trim().length === 0) {
  throw new Error("entry line must be 1-199 non-blank characters");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, { encoding: "utf8" });
