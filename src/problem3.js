function problem3(number) {
    let answer =0;
  for(let j=1; j<=number; j++){
    const value = j.toString().split("");
    for(let i = 0; i < value.length; i++) {
        if(value[i] === "3") 
        answer++;
        else if(value[i] === "6") 
        answer++;
        else if(value[i] === "9") 
        answer++;
    }
  }
    return answer;
  }

  
module.exports = problem3;
