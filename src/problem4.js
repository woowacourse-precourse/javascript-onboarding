function problem4(word) {
  const answer = [...word]
    .map((i) => {
      if (i.charCodeAt() < 91 && i.charCodeAt() > 64) {
        return String.fromCharCode(155 - i.charCodeAt());
      } else if (i.charCodeAt() < 123 && i.charCodeAt() > 96) {
        return String.fromCharCode(219 - i.charCodeAt());
      }
      return i;
    })
    .join("");
  return answer;
}

module.exports = problem4;
