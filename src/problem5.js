function problem5(money) {
  var arrNumber = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var copy_money = money
  var answer = new Array();

  // for문으로 오만원권, 만원권, 오천원권, 천원권, 오백원, 백원, 오십원, 십원, 일원을 돌림
  for(var i = 0; i < arrNumber.length; i++) {
    // 1개 이상 변환 가능한 경우 그 값을 배열에 저장
    if(parseInt(copy_money / arrNumber[i]) > 0) {
      answer[i] = parseInt(copy_money / arrNumber[i]);
      copy_money = copy_money - arrNumber[i] * parseInt(copy_money / arrNumber[i]);
    } else if(parseInt(copy_money / arrNumber[i]) == 0) { // 0개인 경우 배열에 0을 저장
      answer[i] = 0;
    }
  } 

  return answer;
}

module.exports = problem5;
