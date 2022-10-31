var pobi = [];
var crong = [];

function problem1(pobi, crong) {
  var answer;

  var pobiMax = 0;
  var crongMax = 0;

  var num = 0;
  var sum =  0;
  var mul = 0;
  
  // pobi
  for (i=0;i<2;i++) {
    num = pobi[i];
    sum =  0;
    mul = 0;
    while(num > 0) {
      sum += num%10;
      num = parseInt(num/10);
    }
    while(num > 0) {
      mul *= num%10;
      num = parseInt(num/10);
    }
    if(sum >= mul && sum >= pobiMax) {
      pobiMax = sum
    }
    else if(mul >= sum && mul >= pobiMax) {
      pobiMax = mul
    }
  }
  // crong
  for (let i=0;i<2;i++) {
    num = crong[i];
    sum =  0;
    mul = 0;
    while(num > 0) {
      sum += num%10;
      num = parseInt(num/10);
    }
    while(num > 0) {
      mul *= num%10;
      num = parseInt(num/10);
    }
    if(sum >= mul && sum >= crongMax) {
      crongMax = sum
    }
    else if(mul >= sum && mul >= crongMax) {
      crongMax = mul
    }
  }

  // 1. 페이지가 홀짝이 아닐 경우
  if (pobi[0]%2!==1 || pobi[1]%2!==0 || crong[0]%2!==1 || crong[1]%2!==0) {
    answer = -1
  }
  // 2. 페이지 범위에 맞지 않는 경우
  if (pobi[0] < 1 || pobi[1] > 400 || crong[0] < 1 || crong[1] > 400) {
    answer = -1
  }
  // 3. 왼쪽 페이지와 오른쪽 페이지의 차이가 1 보다 큰 경우
  if (pobi[1]-pobi[0] > 1 || crong[1]-crong[0] > 1) {
    answer = -1
  }
  else if (pobiMax > crongMax) {
    answer = 1
  }
  else if (pobiMax = crongMax) {
    answer = 0
  }
  else if (pobiMax < crongMax) {
    answer = 2
  }
  return answer;
}

module.exports = problem1;
