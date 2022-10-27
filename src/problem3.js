function problem3(number) {
  var answer;

  answer = 0;
  for (i = 1; i <= number; i++) {
    if (i % 10 == 3 || i % 10 == 6 || i % 10 == 9){   //i를 10으로 나누었을 때 나머지가 3, 6, 9이면
      answer++; //answer 증가
    }
    //Math.floor : 내림
    if (Math.floor(i / 10) == 3 || Math.floor(i / 10) == 6 || Math.floor(i / 10) == 9){   //i를 10으로 나누었을 때 3, 6, 9로 나누어 떨어지면
      answer++; //answer 증가
    }
  }

  return answer;
}

module.exports = problem3;
