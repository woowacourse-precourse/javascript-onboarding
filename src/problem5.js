function problem5(money) {
  var answer;

  answer = [];

  m = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

  for (var i = 0; i < m.length; i++){
    //.push => 넣음
    //Math.floor : 소수점 버림
    //money / m[i] => money / 50000 ~ 1
    answer.push(Math.floor(money/m[i]));
    //money % m[i] => 나머지를 구하고 money에 대입
    money = money % m[i];
  }
  
  return answer;
}

module.exports = problem5;
