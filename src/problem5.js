function problem5(money) {
  var arrNumber = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var copy_money = money
  var answer = new Array();

  for(var i = 0; i < arrNumber.length; i++) {
    if(parseInt(copy_money / arrNumber[i]) > 0) {
      answer[i] = parseInt(copy_money / arrNumber[i]);
      copy_money = copy_money - arrNumber[i] * parseInt(copy_money / arrNumber[i]);
    } else if(parseInt(copy_money / arrNumber[i]) == 0) {
      answer[i] = 0;
    }
  } 

  return answer;
}

module.exports = problem5;
