function problem3(number) {
  var answer=0;
  for(let i=1;i<=number;i++){
    let num=i;//1부터 number입력
    while(num!=0){//박수칠 횟수
      if(num%10==3){//나머지가 3일때 
        answer=answer+1;
        num=parseInt(num/10);
      }
      else if(num%10==6){//나머지가 6일때
        answer=answer+1;
        num=parseInt(num/10);
      }
      else if(num%10==9){//나머지가 9일때
        answer=answer+1;
        num=parseInt(num/10);
      }
      else{
        num=parseInt(num/10);
      }
    }
  }
  return answer;
}

module.exports = problem3;
