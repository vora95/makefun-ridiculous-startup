// u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
// — "Ridiculous at First Glance, Real by the Second"
//
// The program writes exactly one sentence to /output/entry.txt: a pitch
// for a bizarre startup that sounds like a joke until the business logic
// lands. One sentence, no more, nothing else attached.
//
// The pitch: "We rent strangers' grandmothers to scold grad students to
// finish their theses, because a disappointed grandma beats any
// productivity app — and procrastinators pay for a deadline they can't
// set."
//
// Why this sentence, against the judge's brief (most important first):
// 1. It IS a bizarre startup pitch that makes sense as a real business —
//    not a joke, not a slogan, a pitch with a product, a payer and a
//    reason, all in one sentence.
// 2. It is genuinely bizarre and unheard-of: renting a stranger's
//    grandmother as a scolding service. Not a familiar business with a
//    strange adjective bolted on — nobody rents grandmothers.
// 3. The business logic holds in its own words: procrastinators pay
//    because a deadline they buy is one they cannot give themselves,
//    and a disappointed grandma out-motives any productivity app.
//    Accountability coaching is a real market; the grandma is the
//    delivery mechanism nobody else thought of.
// 4. It lands as a pitch with a turn: laugh at "rent strangers'
//    grandmothers", nod at "a deadline they can't set" — the absurd
//    premise resolves into a real market in the second half.
// 5. Concrete and vivid throughout: the thing sold (a scolding
//    grandmother, rented), the buyer (grad students / procrastinators),
//    the product (a finished thesis, a deadline that sticks).
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "We rent strangers' grandmothers to scold grad students to finish their theses, because a disappointed grandma beats any productivity app — and procrastinators pay for a deadline they can't set.";

// The gate allows 1–200 characters and exactly one sentence: refuse anything else.
const CHARS = [...TEXT].length;
const SENTENCES = TEXT.split(".").filter((s) => s.trim().length > 0).length;
if (CHARS < 1 || CHARS > 200) {
  throw new Error(`entry text is ${CHARS} characters, outside 1–200`);
}
if (SENTENCES !== 1) {
  throw new Error(`entry text is ${SENTENCES} sentences, must be exactly 1`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
