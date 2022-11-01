function problem3(number) {
  let clapCount = 0;
  
  for (let integer=1; integer<=number; integer++){
    const integerToStr = String(integer);
    for(let index=0; index<integerToStr.length; index++){
      const eachDigit = Number(integerToStr[index]);
      if(eachDigit == 3 || eachDigit == 6 || eachDigit == 9){
        clapCount++;
      }
    }
  }
  
  return clapCount;
}

module.exports = problem3;
