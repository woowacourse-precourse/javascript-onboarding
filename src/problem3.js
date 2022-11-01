function problem3(indexber) {
  var answer = 0;
  for(let i = 1; i <= indexber; i++) {
    let index = i;
    while(index > 0) {
      if(index % 10 === 3 || index % 10 === 6 || index % 10 === 9) {
        answer += 1;
      }
      index = parseInt(index / 10);
    }
  }
  return answer;
}

module.exports = problem3;
