function problem3(number) {
  var answer = 0;

  for (let i=1; i < number+1; i++){
      call_num = String(i);

      for (let j = 0; j < call_num.length; j++){
          if (call_num[j] == "3" || call_num[j] =="6" || call_num[j] == "9"){
              answer += 1;
          }
      }
  }
  return answer;
}



module.exports = problem3;