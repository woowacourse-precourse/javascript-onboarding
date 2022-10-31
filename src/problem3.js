function problem3(number) {
  var answer;
  var count = 0;
  for (i =0;i<=number;i++){
    var digits = i.toString().split('');
    for (j = 0;j<digits.length;j++){
      if (digits[j]!=0 & digits[j]%3 == 0){
          count++;
      }
    }
  }
  answer = count;
  return answer;
}

module.exports = problem3;
