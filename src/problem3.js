function problem3(number) {
  var answer;
  var count = 0; //3,6,9의 개수(손뼉을 쳐야할 수)

  for (var i = 0; i < number + 1; i++) {
    var numberArr = Array.from(String(i)); //number의 각 자리 수를 배열로 저장
    for (var j = 0; j < arr.length; j++) {
      if (
        //3,6,9가 포함되는지 검사, 포함되지 않을 경우 -1을 반환
        numberArr[j].indexOf(3) !== -1 ||
        numberArr[j].indexOf(6) !== -1 ||
        numberArr[j].indexOf(9) !== -1
      ) {
        count++;
        answer = count;
      }
    }
  }

  return answer;
}

module.exports = problem3;
