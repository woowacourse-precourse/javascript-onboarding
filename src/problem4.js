function problem4(word) {
  const lowerAlpha = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97)).join("");
  const upperAlpha = lowerAlpha.toUpperCase();
  const reverseLowerAlpha = lowerAlpha.split("").reverse().join("");
  const reverseUpperAlpha = reverseLowerAlpha.toUpperCase();
  let answer = "";

  word.split("").map((num) => {
    if (upperAlpha.includes(num)) {
      answer += reverseUpperAlpha[upperAlpha.indexOf(num)];
    }

    if (lowerAlpha.includes(num)) {
      answer += reverseLowerAlpha[lowerAlpha.indexOf(num)];
    }

    if (num === " ") {
      answer += " ";
    }
  })

  return answer;
}

module.exports = problem4;
