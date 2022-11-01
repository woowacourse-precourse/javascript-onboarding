function problem3(number) {
  var answer = 0;

  for(let i =1; i <= number; i++){
    const stringArr = (i+"").split("");
    stringArr.forEach((element)=>{
      if(element === "3") answer = answer+1;
      if(element === "6") answer = answer+1;
      if(element === "9") answer = answer+1;
    })
  }
  return answer;
}

module.exports = problem3;
