function problem3(number) {
  var answer;

  //369 게임
  let cnt = 0; //박수 횟수

  //제한 사항
  if(number < 1 || number > 10000){
    return -1;
  }

  if(number == 10000){
      number = 9999;
    } 

  for(let i = 1; i <= number; i++){
    if(i < 10){  //한 자리수 계산
      if(i == 3 || i == 6 || i == 9){
        cnt += 1;
      }
    } else if(i >= 10 && i < 100){  //두 자리수 계산
    
      let b1 = false;
      let b2 = false;
      
      let n1 = parseInt(i / 10);
      let n2 = i % 10;

      if(n1 == 3 || n1 == 6 || n1 == 9 ){
        b1 = true;
      }
      if(n2 == 3 || n2 == 6 || n2 == 9 ){
        b2 = true;
      }

      if(b1 && b2){
        cnt += 2;
      } else if(b1 || b2){
        cnt += 1;
      }
    } else if(i >= 100 && i < 1000){ //세 자리수 계산
      let b1 = false;
      let b2 = false;
      let b3 = false;
      
      let n1 = parseInt(i / 100);
      let n2 = parseInt((i % 100) / 10);
      let n3 = i % 10;
      
      if(n1 == 3 || n1 == 6 || n1 == 9 ){
        b1 = true;
      }
      if(n2 == 3 || n2 == 6 || n2 == 9 ){
        b2 = true;
      }
      if(n3 == 3 || n3 == 6 || n3 == 9 ){
        b3 = true;
      }

      if(b1 && b2 && b3){
        cnt += 3;
      }
      else if((b1 &&b2) || (b1 && b3) || (b2 && b3))
      {
        cnt += 2;
      }
      else if(b1 || b2 || b3){
        cnt += 1;
      }
    } else if(i >= 1000 && i < 10000 ){ //네 자리수 계산

      let b1 = false;
      let b2 = false;
      let b3 = false;
      let b4 = false;
      
      let n1 = parseInt(i / 1000);
      let n2 = parseInt((i % 1000) / 100);
      let n3 = parseInt((i % 100) / 10);
      let n4 = i % 10;

      
      if(n1 == 3 || n1 == 6 || n1 == 9 ){
        b1 = true;
      }
      if(n2 == 3 || n2 == 6 || n2 == 9 ){
        b2 = true;
      }
      if(n3 == 3 || n3 == 6 || n3 == 9 ){
        b3 = true;
      }
      if(n4 == 3 || n4 == 6 || n4 == 9 ){
        b4 = true;
      }

      if(b1 && b2 && b3 && b4){
        cnt += 4;
      } else if((b1 && b2 && b3) || (b1 && b2 && b4) || (b2 && b3 && b4)){
        cnt += 3;
      } else if((b1 && b2) || (b1 && b3) || (b1 && b4) || (b2 && b3) || (b2 && b4) || (b3 && b4)){
        cnt += 2;
      } else if(b1 || b2 || b3 || b4){
        cnt += 1;
      }
    } 
  }
  
  answer = cnt;  
  console.log(cnt);

  return answer;
}

//테스트 케이스 #1
problem3(13);

//테스트 케이스 #2
problem3(33);


module.exports = problem3;
