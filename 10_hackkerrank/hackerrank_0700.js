const re = /ab+c/;
const re = new RegExp('ab+c');

const re = new RegExp(pattern[, flags]);
const re = /pattern/flags;
// flags
// g: global match
// i: ignore case
// m: multiline. Treats beginning (^) and end ($) characters
// u: unicode
// y: stricky
//
// Character
// . The period matches any single character, except line terminators (e.g., a new line).
// \d A single digit character (i.e., [0-9]).
// \D A single non-digit character (i.e. [^0-9]).
// \w A single alphanumeric word character, including the underscore (i.e., [A-Za-z0-9_]).
// \W A single non-word character (i.e., [^A-Za-z0-9_]).
// \s A single whitespace. This includes space ( ), tab (\t), form feed, line feed, and other Unicode spaces.
// \S A single non-whitespace character (i.e., [^\w]).
//
// Character Sets
// ^ Matches beginning of input. If the multiline flag is set to true, also matches immediately after a line break character.
// $ Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.
// \b A zero-width word boundary, such as between a letter and a space.
// \B Matches a zero-width non-word boundary, such as between two letters or between two spaces.
