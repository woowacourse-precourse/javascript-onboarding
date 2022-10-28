function problem3(number) {
  var answer;
  let numberString = String(number)
  let count = 0;
  for (var i=1; i<=number; i++){
    for(var j=0; j<String(i).length; j++){
      if(String(i)[j] == '3' || String(i)[j] == '6' || String(i)[j] == '9'){
        count++;
      }
    }
  }
  answer = count;
  return answer;
}

module.exports = problem3;
