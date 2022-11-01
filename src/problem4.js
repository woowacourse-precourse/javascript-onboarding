function problem4(word) {
  var answer;
  let upper = [];
  let lower = [];
  let upperReverse = [];
  let lowerReverse = [];
  let result = [];
  for (let i = 0; i < 26; i++) {
    upper.push(String.fromCharCode(65 + i));
  }
  for (let i = 0; i < 26; i++) {
    lower.push(String.fromCharCode(97 + i));
  }
  upperReverse = [...upper].reverse();
  lowerReverse = [...lower].reverse();
  const text = word.split("");
  for (let i = 0; i < text.length; i++) {
    if (upper.includes(text[i])) {
      result.push(upperReverse[upper.indexOf(text[i])]);
      continue;
    } else if (lower.includes(text[i])) {
      result.push(lowerReverse[lower.indexOf(text[i])]);
      continue;
    }
    result.push(text[i]);
  }
  answer = result.join("");
  return answer;
}

module.exports = problem4;
