const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

function problem4(word) {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (UPPERCASE.includes(word[i]) || LOWERCASE.includes(word[i]))
      result += changeLetter(word[i]);
    else result += word[i];
  }

  return result;
}

function changeLetter(letter) {
  if (isUpperCase(letter)) {
    const index = UPPERCASE.split("").findIndex((upper) => upper === letter);
    return UPPERCASE[25 - index];
  } else {
    const index = LOWERCASE.split("").findIndex((lower) => lower === letter);
    return LOWERCASE[25 - index];
  }
}

function isUpperCase(letter) {
  if (UPPERCASE.includes(letter)) return true;
  return false;
}

module.exports = problem4;
