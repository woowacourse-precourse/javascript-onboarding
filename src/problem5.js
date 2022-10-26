 

function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 오만원, 만원, 오천원, 천원, 오백원, 백원, 오십원, 십원, 일원
  answer = solution(answer, money);
  return answer;
}

function solution(answer, num) {
  
  while(num > 0) {
    
    if(Math.floor(num / 50000) > 0) {
      answer[0] = Math.floor(num / 50000);
      num = num % 50000;
    }

    if(Math.floor(num / 10000) > 0) {
      answer[1] = Math.floor(num / 10000);
      num = num % 10000;
    }

    if(Math.floor(num / 5000) > 0) {
      answer[2] = Math.floor(num / 5000);
      num = num % 5000;
    }

    if(Math.floor(num / 1000) > 0) {
      answer[3] = Math.floor(num / 1000);
      num = num % 1000;
    }

    if(Math.floor(num / 500) > 0) {
      answer[4] = Math.floor(num / 500);
      num = num % 500;
    }

    if(Math.floor(num / 100) > 0) {
      answer[5] = Math.floor(num / 100);
      num = num % 100;
    }

    if(Math.floor(num / 50) > 0) {
      answer[6] = Math.floor(num / 50);
      num = num % 50;
    }

    if(Math.floor(num / 10) > 0) {
      answer[7] = Math.floor(num / 10);
      num = num % 10;
    }

    if(Math.floor(num / 1) > 0) {
      answer[8] = Math.floor(num / 1);
      num = num % 1;
    }
  }

  return answer;
}

console.log(problem5(50237));
console.log(problem5(15000));

module.exports = problem5;
