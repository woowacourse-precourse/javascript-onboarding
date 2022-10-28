function problem3(number) {
  var answer;
  var str = "";
  var sum = 0, count = 0;
  for(var i = 1; i <= number; i++) {
    str = "";
    count = 0;
    str = i.toString();
    for(var j = 0; j < str.length; j++) {
      if(str[j] === '3' || str[j] === '6' || str[j] === '9')
        count++;
    }
    sum += count;
  }
  answer = sum;
  return answer;
}

module.exports = problem3;
