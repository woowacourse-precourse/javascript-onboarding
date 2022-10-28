function problem4(word) {
  const dict = {};

  let reverse = 90;

  for (let i = 65; i < 91; i++) {
    dict[String.fromCharCode(i)] = String.fromCharCode(reverse);
    reverse -= 1;
  }

  let result = "";

  for (let str of word) {
    if (str === " ") {
      result += " ";
    } else if (str === str.toUpperCase()) {
      result += dict[str];
    } else if (str === str.toLowerCase()) {
      const upperStr = str.toUpperCase();
      const lowerStr = dict[upperStr].toLowerCase();
      result += lowerStr;
    }
  }

  return result;
}

module.exports = problem4;
