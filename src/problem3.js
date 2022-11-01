function problem3(number) {
  let answer = 0;
  for(let i=1;i<=number;i++){
    let numArr = (i+"").split("");
    for(num of numArr){
      if(num === '3' || num === '6' || num==='9') answer++;
    }
  }
  return answer;
}

module.exports = problem3;
