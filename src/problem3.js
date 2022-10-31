function count(num){
  var cnt = 0;
  while (num) {
    var tmp = num % 10;
    if(tmp == 3 || tmp == 6 || tmp == 9)
      cnt++;
    num = parseInt(num / 10);
  }
  return cnt;
}

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
