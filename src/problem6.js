function hasOverlap(a, b) {
  for (let i = 0; i < a.length - 1; i++) {
    const word = a.slice(i, i + 2);
    if (b.indexOf(word) !== -1) return 1;
  }
  return 0;
}

function problem6(forms) {
  var answer;
  return answer;
}
module.exports = problem6;
