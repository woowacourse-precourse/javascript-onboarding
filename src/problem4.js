function problem4(word) {
  const pattern = /[a-zA-Z\s]/g; // For checking if it's other than alphabets
  let answer = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i].match(pattern)) {
      // Convert them if character is an alphabet
      if (word[i] === word[i].toUpperCase() && word[i] !== " ") {
        const upper = String.fromCharCode(155 - word[i].charCodeAt());
        answer += upper;
      } else if (word[i] === " ") {
        answer += " ";
      } else {
        const lower = String.fromCharCode(219 - word[i].charCodeAt());
        answer += lower;
      }
    } else {
      // Disregarding converting characters if they are NOT alphabets
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;
