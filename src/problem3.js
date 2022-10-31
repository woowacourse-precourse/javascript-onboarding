function problem3(number) {
  var answer=0;

  for (let i = 1;i<number+1;i++){
    let a = String(i).split("")
    for(let num of a){
      check369(num)?answer+=1:null
    }
  }
  return answer;
}

function check369(num){
  const arr369 = ["3", "6", "9"];
  if(arr369.includes(num)){
    return true
  }
  return false
}

module.exports = problem3;

