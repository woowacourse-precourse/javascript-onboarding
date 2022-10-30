function problem3(number) {
  var answer = 0;
  for(let i = 1; i <= number ; i++){
    let numberArr = [...String(i)];
    numberArr.forEach((d) => {
      if(d === '3' || d === '6' || d==='9'){
        answer++;
      }
    })
  }
  return answer;
}

module.exports = problem3;
