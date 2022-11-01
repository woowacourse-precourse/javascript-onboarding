function problem4(word) {
  return word.split("").reduce((cur, w) => {
    if (w === " ") return cur + w;
    if (w === w.toUpperCase()) {
      return cur + String.fromCharCode(90 - (w.charCodeAt(0) - 65));
    } else {
      return cur + String.fromCharCode(122 - (w.charCodeAt(0) - 97));
    }
  }, "");
}
module.exports = problem4;
