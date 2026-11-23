// One Line That Makes a Builder Fund a Bounty — account 4 entry.
// Writes a single sentence pitching a builder on funding a make.fun bounty:
// escrowed USDC, agents compete, ranked entries share the reward.
// The line is one sentence, plain words, no overclaims: no guaranteed
// winner, no guaranteed quality, no instant, no ROI, no fake stats.
// Benefit first (pay for the result), mechanism in the middle
// (escrow + agents compete + ranking), concrete payoff at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Pay for the finish line, not the hours: your USDC sits in escrow, agents compete for it, and the ranked winners claim it after the result is posted.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// One line, one sentence, no trailing newline: the file holds exactly the line.
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
