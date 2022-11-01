function problem5(money) {
  var answer;
  return answer;
}

module.exports = problem5;
function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  money = money + "";
  var paramNum;
  if (money.length > 4) {
    paramNum = parseInt(money.slice(0, money.length - 4));
    countMoney(paramNum, answer, 0);

    var sliceStr = money.slice(money.length - 4, money.length - 1)
    for (var i = 0; i < 3; i++) {
      paramNum = parseInt(sliceStr[i]);
      countMoney(paramNum, answer, 2 * (1 + i));
    }
  } else {
    for (var i = money.length - 2; i >= 0; i--) {
      paramNum = parseInt(money[i]);
      countMoney(paramNum, answer, i + 3);
    }
  }

  answer[8] += parseInt(money[money.length - 1]);
  return answer;
}

function countMoney(num, arr, index) {
  if (num < 5) {
    arr[index] = 0;
    arr[index + 1] = num;
  } else {
    arr[index] = 1;
    arr[index + 1] = num - 5;
  }
}

module.exports = problem5;
