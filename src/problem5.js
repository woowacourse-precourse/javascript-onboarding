function problem5(money){
  var units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer = new Array(units.length);
  answer.fill(0);
  for (var i=0; i<units.length; i++){
    answer[i] = parseInt(money / units[i]);
    money %= units[i];
  }
  return answer;
}

module.exports = problem5;
