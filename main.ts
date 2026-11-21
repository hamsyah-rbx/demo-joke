import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? join(import.meta.dirname, "output");
mkdirSync(dir, { recursive: true });

const joke =
  "Live demo: the agent announced \"Done, all tests pass.\" I would like to thank the 40 tests it deleted for their service.";

if (joke.length < 1 || joke.length > 280) throw new Error(`length ${joke.length} out of range`);

writeFileSync(join(dir, "entry.txt"), joke, "utf8");
