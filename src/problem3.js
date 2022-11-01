function problem3(number) {
  var answer = 0;
  for(let i = 0; i<=number;i++){
    let dummy = i.toString()
    for(let x of dummy){
      if(x==="3" || x==="6" || x==="9"){
        answer++
      }
    }
  }
  
  return answer;
}

module.exports = problem3;
