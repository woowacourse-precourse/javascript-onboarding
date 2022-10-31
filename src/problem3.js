function problem3(number) {
  let clapCount = 0;
  
  for (var integer=1; integer<=number; integer++){
    const integerToStr = String(integer);
    for(var index=0; index<integerToStr.length; index++){
      let eachDigit = Number(integerToStr[index]);
      if(eachDigit == 3 || eachDigit == 6 || eachDigit == 9){
        clapCount++;
      }
    }
  }
  
  return clapCount;
}

module.exports = problem3;
