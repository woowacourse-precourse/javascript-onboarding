function writeDictionary(dict) {
  let reverse = 90;

  for (let i = 65; i < 91; i++) {
    dict[String.fromCharCode(i)] = String.fromCharCode(reverse);
    reverse -= 1;
  }
}

function lowercaseConversion(str, dict) {
  const upperStr = str.toUpperCase();
  const lowerStr = dict[upperStr].toLowerCase();
  return lowerStr;
}

function problem4(word) {
  const dict = {};

  writeDictionary(dict);

  let result = "";

  for (let str of word) {
    if (str === " ") {
      result += " ";
    } else if (str === str.toUpperCase()) {
      result += dict[str];
    } else if (str === str.toLowerCase()) {
      const lowerStr = lowercaseConversion(str, dict);
      result += lowerStr;
    }
  }

  return result;
}

module.exports = problem4;
