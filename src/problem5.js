function problem5(money) {
  var arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer = new Array();

  for ( var i = 0; i < arr.length; i++) {
    answer[i] = Math.floor(money/arr[i]);
    money -= arr[i]*Math.floor(money/arr[i]);
  }

  return answer;
}

module.exports = problem5;