/**
 * 
 * @param {[start, end]} range List of 2 numbers representing the start and end values for the loop
 * @param {[mul1, mul2]} multiples List of 2 Numbers representing the multiples at which to replace the number with the words
 * @param {[word1, word2]} words  List of 2 Strings that will be substituting the Numbers at certain intervals
 */
function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
      continue;
    }
    if (i % multiples[0] === 0) {
      console.log(words[0]);
      continue;
    }
    if (i % multiples[1] === 0) {
      console.log(words[1]);
      continue;
    }
    console.log(i);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);