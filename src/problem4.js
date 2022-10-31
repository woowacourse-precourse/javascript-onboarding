function problem4(word) {
  if (!checkException(word)) return;
  const a = word.split("");
  let answer = "";
  a.map((item) => {
    if (
      item.charCodeAt() >= "A".charCodeAt() &&
      item.charCodeAt() <= "Z".charCodeAt()
    ) {
      answer += String.fromCharCode(
        "A".charCodeAt() + "Z".charCodeAt() - item.charCodeAt()
      );
    } else if (
      item.charCodeAt() >= "a".charCodeAt() &&
      item.charCodeAt() <= "z".charCodeAt()
    ) {
      answer += String.fromCharCode(
        "a".charCodeAt() + "z".charCodeAt() - item.charCodeAt()
      );
    } else {
      answer += item;
    }
  });
  return answer;
}

function checkException(word) {
  return word.length >= 1 && word.length <= 1000;
}

module.exports = problem4;
