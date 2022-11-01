function problem3(number) {
  var answer
  answer = number
  count = 0
  for (var i = 1; i <= number; i++) {
    var sygGame = i.toString();
    [...sygGame].forEach(num => {
      if (num == "3" || num == "6" || num == "9") {
        count++
      }
    })
  };
  answer = count

  return answer
}
// console.log(problem3(33))
module.exports = problem3;

// number가 1~10000 이하 자연수 즉 모두 반복을 돌려도가능 완전탐색 가능
// 1부터 주어진 숫자 까지 하나씩 세어가면서 3,6,9가 들어가는 숫자를 카운팅함
// 센 숫자를 리턴