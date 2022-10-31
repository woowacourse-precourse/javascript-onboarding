function problem3(number) {
  var answer;

  //1씩 증가하는 수
  let count = 1;
  //박수 치는 수
  let clap = 0;
  while (count <= number) {

    //각 자리수에 3,6,9가 있는지 검사
    let temp = count;
    while ( temp!=0 ){
      let n = temp % 10;
      if (n==3 || n==6 || n==9) {
        clap++;
      }
      temp = parseInt(temp/10);
    }
    
    count++;
  }

  answer = clap;
  return answer;
}

module.exports = problem3;
