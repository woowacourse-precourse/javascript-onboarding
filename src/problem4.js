function ascii(num){
  if(65 <= num && num <= 90){
    if(num <= 77)
      num = (78 - num) + 77;
    else
      num = 78 - (num - 77);
    return num;
  }
  else return num;
}

function problem4(word) {
  var answer = "";
  return answer;
}

module.exports = problem4;
