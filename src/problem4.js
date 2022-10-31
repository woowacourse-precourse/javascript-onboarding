function ascii(num){
  if(65 <= num && num <= 90){
    if(num <= 77)
      num = (78 - num) + 77;
    else
      num = 78 - (num - 77);
  }
  else if(97 <= num && num <= 122){
    if(num <= 109)
      num = (110 - num) + 109;
    else
      num = 110 - (num - 109);
  }
  return num;
}

function problem4(word) {
  var answer = "";
  return answer;
}

module.exports = problem4;
