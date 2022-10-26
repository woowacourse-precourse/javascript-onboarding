function problem1(pobi, crong) {
  var answer;
  var pobiMax;
  var crongMax;

  if(pobi[0] < 1 || pobi[0] >= 400 || crong[0] < 1 || crong[0] >= 400){
    answer = -1;
  } else if (pobi[0] % 2 != 1 || crong[0] % 2 != 1) {
    answer = -1;
  } else if (pobi[1] != pobi[0] + 1 || crong[1] != crong[0] + 1) {
    answer = -1;
  } else {

  }
  return answer;
}

function getDigit(num) {
  num = num.toString();
  var i=0;
  while(num[i]) { i++; };
  return i;
}

module.exports = problem1;
