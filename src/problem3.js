function problem3(number) {
  var answer = 0;
  let arr = Array.from({length: number}, (v, i) => i+1);
  for (let x of arr.join("")){
    if (x==="3" || x==="6" || x==="9"){
      answer += 1
    }
  }
  return answer;
}

module.exports = problem3;
