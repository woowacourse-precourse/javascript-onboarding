function problem3(number) {
  let answer = 0;
  
  for (let i = 1; i <= number; i++) {
    let num = i.toString();
    for (let n of num) {
      if ([3, 6, 9].includes(+n)) {
        answer++;
      }
    }
  }
  
  return answer;
}

module.exports = problem3;
