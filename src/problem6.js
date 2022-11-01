function problem6(forms) {
  var answer = [];
  var all_cases = new Map();

  forms.forEach((element) => {
    var word = "";
    for (var i = 0; i < element[1].length - 1; i++) {
      word = element[1][i] + element[1][i + 1];
      if (all_cases.has(word)) {
        answer.push(all_cases.get(word));
        answer.push(element[0]);
      } else {
        all_cases.set(word, element[0]);
      }
    }
  });
  var set = new Set(answer);
  answer = [...set];
  return answer.sort();
}

module.exports = problem6;
