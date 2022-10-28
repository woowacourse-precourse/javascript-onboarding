function problem3(number){
  var result;
  var count = 0;
  
  for(let i = 1; i<number+1; i++){
      numArr = (i + '').split('')
      for(let j = 0; j<numArr.length; j++){
          if(numArr[j] === "3" || numArr[j] === "6" || numArr[j] === "9"){
              count += 1
          }
      }
  }
  result = count; 
  return result;
}

module.exports = problem3;
