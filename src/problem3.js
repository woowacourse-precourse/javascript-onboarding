function problem3(number) {
  let answer = 0
  for(let i = 0; i <= number; i++){
    answer += getClapCount(i)
  }
  return answer;
}

function getClapCount(number){
  let count = 0
  num_arr = [...number.toString()]
  num_arr.forEach(element => {
    if(element == '3' || element == '6' || element == '9'){
      count += 1
    }
  });

  return count
}

console.log(problem3(33))
//module.exports = problem3;

