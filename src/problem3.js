function problem3(number) {
  var answer=0;
  //기능목록1: 3,6,9 갯수 세기
  for(var i=1; i<=number; i++){
    var num=i.toString();
    for(var j=0; j<num.length; j++){
      if(num[j]==3||num[j]==6||num[j]==9){
        answer += 1;
      }
    }
  }
  console.log(answer);
  return answer;
}

module.exports = problem3;
