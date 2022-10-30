function problem2(cryptogram) {

  let answer = [...cryptogram];

  // 배열의 중복문자를 제거해주는 기능 구현
  let answerUnique = answer.filter((val, idx) => {
    return answer.indexOf(val) === idx;
  })

  return answerUnique;
}

module.exports = problem2;
