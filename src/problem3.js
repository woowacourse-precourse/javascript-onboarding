function problem3(number) {
  var answer;
  let cnt = 0;
  for(let i=1; i <= number; i++){
    let ss = i;
    while (ss != 0) {
      if(ss % 10 == 3 || ss % 10 == 6 || ss % 10 == 9){
        cnt++;
      }
      ss /= 10;
    }
  }
 
  answer = cnt;
  return answer;
}

module.exports = problem3;
