function problem5(money) {
  var answer;

  const coinArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; //변환할 지폐, 동전의 종류 담은 배열
  var changeArr = []; //반환되는 개수를 담은 배열

  for (var i = 0; i < coinArr.length; i++) {
    var changeCount = //각 지폐, 동전이 반환되는 개수
      money / coinArr[i] >= 1 ? Math.floor(money / coinArr[i]) : 0;
    changeArr.push(changeCount);

    money = changeCount > 0 ? (money -= coinArr[i] * changeCount) : money; //반환 후 money 갱신
  }
  answer = changeArr;
  return answer;
}

module.exports = problem5;
