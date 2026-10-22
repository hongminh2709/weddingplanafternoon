const assert = require('assert').strict;
const fs = require('fs');

const css = fs.readFileSync('local/invitation.css', 'utf8');

assert.match(
  css,
  /\.wedding-family-info\s*>\s*div\s*>\s*span\s*\{[^}]*white-space:\s*nowrap/s,
  'family names must not wrap on narrow screens',
);
assert.match(
  css,
  /grid-template-columns:\s*minmax\(0, 1fr\) 1px minmax\(0, 1fr\)/,
  'family details must keep separate left and right columns',
);
assert.match(
  css,
  /\.wedding-family-info\s*>\s*div\s*>\s*div\s*\{[^}]*white-space:\s*normal !important[^}]*text-wrap:\s*balance/s,
  'family addresses must wrap cleanly within their own columns',
);

console.log('Family information mobile layout checks passed');
