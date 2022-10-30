function problem6(forms) {
  var answer = [];
  let standard = "";
  let compare = [];
  let isSame = [];

  for (let i = 0; i < forms.length; i++) {
    standard = forms[i][1];
    for (let j = 0; j < standard.length - 1; j++) {
      let word = standard[j] + standard[j + 1];
      if (compare.includes(word)) {
        isSame.push(word);
        let set = new Set(isSame);
        isSame = [...set];
      }
      compare.push(word);
    }
  }

  return answer;
}

module.exports = problem6;
