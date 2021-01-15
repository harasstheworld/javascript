Regular Expression Patterns

const re = /ab+c/;
const RegExp(pattern[, flags]);
// if specified, flags can have any combination of the following values:
g: global match
i: ignore case
m: multiline. Treats beginning (^) and end ($) characters as working over multiple lines
u: unicode
y: sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string


// Quantifiers
a*: Matches the preceding item a, 0 or more times
a+: Matches the preceding item a, 1 or more times
a?: Matches the preceding item a, 0 or 1 time
a{n}: Here is a positive integer. Matches exactly n occurences of the preceding item a
a{n, }: Here is a positive integer. Matches exactly at least n occurences of the preceding item a
a{n, m}: Here n and m are positive integers. Matches at least n and at most m occurrences of the preceding item a
(.) captures any character
.* stipulates that the captured character must followed by zero or more occurences of any character
\1 is a backreference to the first capture group in our expression

// Assertions
a(?=b): Matches a only if a is followed by b
a(?!b): Matches a only if a is not followed by b


// Working with Regular Expressions
test();
exec() -> res[0], res[1], res[2], res.index, res.input
match();
search();
split();
replace();

