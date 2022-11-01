function problem6(forms) {
  var answer = new Set();

  var compareArr = forms.slice(1,);

  for (var crew of forms) {
    var wordArr = twoLetters(crew[1]);
    compareArr.shift();

    for (var word of wordArr) {
      for (var com of compareArr) {
        if (com[1].includes(word)) {
          answer.add(com[0]);
          answer.add(crew[0]);
        }
      }
    }
  }

  return Array.from(answer).sort();
}

//2글자씩 뽑기
function twoLetters(str) {
  var arr = [];
  for (var i = 0; i < str.length - 1; i++) {
    arr.push(str.slice(i, i + 2));
  }

  return arr;
}

module.exports = problem6;
