function problem3(number) {
  var answer = 0;
  
  for (let i = 1; i <= number; i++) {
    const iStr = `${i}`
    
    for (let j = 0; j < iStr.length; j++) {
      const num = iStr[j];
      if(num.match(/[369]/))answer++
    }
  }

  return answer;
}

module.exports = problem3;
