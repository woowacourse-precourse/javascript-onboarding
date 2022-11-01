function find369(n){
  let cnt = 0;
  while(n>0){
    if(n%10 == 3 || n%10 == 6 || n%10 == 9){
      cnt++;
    }
    n = parseInt(n/10)
  }
  return cnt;
}

function problem3(number) {
  var answer = 0 ;
  let tmp = 0;

  for(i=1;i<=number;i++){
    f = find369(i)
    if(f>0){
      answer += f; 
    }
  }

  return answer;
}

module.exports = problem3;
