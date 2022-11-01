function checkCase(word) {
  if (word.charCodeAt() >= 65 && word.charCodeAt() <= 90) {
    return "upper";
  } else if (word.charCodeAt() >= 97 && word.charCodeAt() <= 122) {
    return "lower";
  }
}

function problem4(word) {
  let answer = "";

  const wordArr = word.split("");

  wordArr.forEach((word) => {
    const caseCheck = checkCase(word);
    if (caseCheck === "upper") {
      answer += String.fromCharCode(155 - word.charCodeAt());
    } else if (caseCheck === "lower") {
      answer += String.fromCharCode(219 - word.charCodeAt());
    } else {
      answer += word;
    }
  });

  return answer;
}

module.exports = problem4;
