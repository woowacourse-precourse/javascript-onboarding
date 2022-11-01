function problem3(number) {
  var answer = 0;
  for(let i = 0; i <= number; i++){
    var str = String(i)
    for (let j = 0; j<str.length; j++){
      if (str[j] == 3 || str[j] == 6 || str[j] == 9){
        answer +=1;
      }
    }
  }
  return answer;
}
module.exports = problem3;
