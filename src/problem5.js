function problem5(money) {
  var answer;

//지폐p
//코인c

p1 = 50000
p2 = 10000
p3 = 5000
p4 = 1000

c1 = 500
c2 = 100
c3 = 50
c4 = 10
c5 = 1

moneys = [p1, p2, p3, p4, c1, c2, c3, c4, c5]

answer = [];

// - money는 1 이상 1,000,000 이하인 자연수이다.
if (money >= 1 && money <= 1000000 && money % 1 == 0) {
  //아홉번을 나눠보기
  for (i = 0; i < moneys.length; i++) {
    num = parseInt(money / moneys[i])
    answer.push(num)
    money = money - (moneys[i] * num)
  }
}
// console.log(answer)

  return answer;
}

module.exports = problem5;
