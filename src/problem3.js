function problem3 (number) {
  var i =0;
  var answer = 0;

  for ( i = 0; i <= number; i++) {
    if(i%10 ==3 || i%10 ==6 || i%10 == 9) {
      if( i ==33 || i == 66 || i ==99) {
        answer++;
      }
      answer++;
    }
    else if ((i/10 >=3 && i/10 <4) || (i/10 >=6 && i/10<7) || (i/10 >=9 && i/10<10)) {
      answer++;
    }
  }
  return answer;

}

module.exports = problem3;
