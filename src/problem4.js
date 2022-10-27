function problem4(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      result += " ";
      continue;
    }
    let ascii = word.charCodeAt([i]);
    let checkedCase = checkStringCase(ascii);
  }
  return result;
}

function checkStringCase(ascii) {
  if (ascii >= 65 && ascii <= 90) {
    return 65;
  } else if (ascii >= 97 && ascii <= 122) {
    return 97;
  }
}

module.exports = problem4;
