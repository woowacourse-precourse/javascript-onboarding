function lowercase(num) {
  return String.fromCharCode(97 + (122 - num));
}

function uppercase(num) {
  return String.fromCharCode(65 + (90 - num));
}

function problem4(word) {
  let answer = '';

  for (let x of word) {
    const asciiX = x.charCodeAt();

    if (asciiX >= 65 && asciiX <= 90) {
      const reverseUpper = uppercase(asciiX);
      answer += reverseUpper;
    } else if (asciiX >= 97 && asciiX <= 122) {
      const reverseLower = lowercase(asciiX);
      answer += reverseLower;
    }
  }

  return answer;
}

module.exports = problem4;
