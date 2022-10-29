function problem2(cryptogram) {
  var answerString = [];
  
  var probString = '';
  probString = cryptogram;

  for (let i = 0; i < probString.length; i++) {
    if (probString[i] !== probString[i + 1]) {
      answerString.push(probString[i]);
    } else {
      i++;
    }
  }
  probString = answerString.join('');

  //재귀함수 형식으로 처리(최종적으로 리턴하는 값은 이미 디코딩된 값과 cryptogram이 같을 때!)
  return probString === cryptogram ? probString : problem2(probString);
}

module.exports = problem2;
