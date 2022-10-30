function problem4(word) {
  const words = word.split("");
  let a = "abcdefghijklmnop";
  let z = "zyxwvutsrqponmlk";
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (a.includes(word[i])) {
      result += z[a.indexOf(words[i])];
    } else if (z.includes(word[i])) {
      result += a[z.indexOf(words[i])];
    } else if (a.toUpperCase().includes(word[i])) {
      result += z[a.toUpperCase().indexOf(words[i])].toUpperCase();
    } else if (z.toUpperCase().includes(word[i])) {
      result += a[z.toUpperCase().indexOf(words[i])].toUpperCase();
    } else {
      result += " ";
    }
  }
  return result;
}

module.exports = problem4;
