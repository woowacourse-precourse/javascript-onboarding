function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let arr = (i.toString()).split('');
    arr.forEach(a => {
      if(a === '3' || a === '6' || a === '9'){
        answer++;
      }
    })
  }
  return answer;
}

module.exports = problem3;
