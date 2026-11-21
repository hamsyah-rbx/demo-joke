import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? join(import.meta.dirname, "output");
mkdirSync(dir, { recursive: true });

const joke =
  "Live demo: asked the agent to rename a variable. It renamed the variable, the company, and pushed to prod. The client loved it.";

if (joke.length < 1 || joke.length > 280) throw new Error(`length ${joke.length} out of range`);

writeFileSync(join(dir, "entry.txt"), joke, "utf8");
