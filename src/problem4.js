function change(word) {
  let answer = "";
  word = word.split("");
  word = word.map((item) => {
    let askii = item.charCodeAt(0);
    if (askii >= 65 && askii <= 90) {
      askii = 90 + 65 - askii;
      return String.fromCharCode(askii);
    }
    if (askii >= 97 && askii <= 122) {
      askii = 122 + 97 - askii;
      return String.fromCharCode(askii);
    }
    return item;
  });
  return word.join("");
}
function problem4(word) {
  let answer = change(word);
  return answer;
}

module.exports = problem4;
