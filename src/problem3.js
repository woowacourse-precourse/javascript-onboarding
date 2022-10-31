function problem3(number) {
  let answer = 0;
  for(let i = number; i>0; i--){
    const numArray = String(i).split('')
    numArray.forEach(element => {
      if(element === '3' || element === '6' || element === '9'){
        answer+=1
      }
    })
  }
  return answer;
}

module.exports = problem3;
