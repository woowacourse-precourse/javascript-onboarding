function problem3(number) {
  let answer = 0;
  for(let i = 1; i <= number; i++){
    Array.from(String(i), Number).forEach(item => {
      if(item === 3 || item === 6 || item === 9){
        answer++;
      }
    })
  }
  return answer;
}

module.exports = problem3;
