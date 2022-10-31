function checkNum(stringNum){
  var sum = 0;
  for(let i = 0;i < stringNum.length;i++){
    if(stringNum[i] == 3 || stringNum[i] == 6 || stringNum[i] == 9){
      sum++;
    }
  }
  return sum;
}

function problem3(number) {
  var answer = 0;
  for(let i = 1;i <= number;i++){
    answer += checkNum((i).toString());
  }
  return answer;
}

module.exports = problem3;
