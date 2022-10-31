function problem4(word) {
  const lowerAlpha = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97)).join("");
  const upperAlpha = lowerAlpha.toUpperCase();
  const reverseLowerAlpha = lowerAlpha.split("").reverse().join("");
  const reverseUpperAlpha = reverseLowerAlpha.toUpperCase();
  let result = "";

  word.split("").map((num) => {
    if (upperAlpha.includes(num)) {
      result += reverseUpperAlpha[upperAlpha.indexOf(num)];
    }

    if (lowerAlpha.includes(num)) {
      result += reverseLowerAlpha[lowerAlpha.indexOf(num)];
    }

    if (num === " ") {
      result += " ";
    }
  })

  return result;
}

module.exports = problem4;
