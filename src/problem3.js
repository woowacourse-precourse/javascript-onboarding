function problem3(number) {
 let answer = 0;
  let num;
  for (let i = 0; i < number; i++) { 
    num = '' + (i + 1) 
    for(let j = 0; j < num.length; j++) {
      if(num[j] == 3 || num[j] == 6 || num[j] == 9) {
        answer++;
      }
    }
  }
  return answer;
}

module.exports = problem3;
