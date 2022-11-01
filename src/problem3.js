function problem3(number) {
  var answer=0;
  for(var i=1; i<=number; i++){
    answer+=clap(i);
  }
  return answer;
}

function clap(n){
  var number = String(n);
  var clap=0;
  for(var i=0; i<number.length; i++){
    if(number[i]=="3" || number[i]=="6" || number[i]=="9"){
      clap++;
    }
  }
  return clap;
}

module.exports = problem3;
