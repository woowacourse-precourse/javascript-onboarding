function problem2(cryptogram) {
  var answer;

  return answer;
}

function deduplication(string) {
  let answerArr = [string[0]];

  for (let i = 1; i < string.length; i++) {
    let top = answerArr[answerArr.length - 1];
    if (top !== string[i]) {
      answerArr.push(string[i]);
    }
  }
  return answerArr;
}

// console.log(problem2("browoanoommnaon"));
console.log(deduplication("browoanoommnaon"));

//중복제거 알고리즘 구현중

module.exports = problem2;
