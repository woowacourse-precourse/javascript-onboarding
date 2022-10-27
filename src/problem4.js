function problem4(word) {
  const alphabetArr = word.split("");
  let answer = alphabetArr.map((x) => {
    if (x === " ") return " ";
    else if (x === x.toUpperCase()) {
      let ascii = x.toLowerCase().charCodeAt(0);
      return String.fromCharCode(122 - ascii + 97).toUpperCase();
    } else {
      let ascii = x.charCodeAt(0);
      return String.fromCharCode(122 - ascii + 97);
    }
  });
  return answer.join("");
}

module.exports = problem4;
