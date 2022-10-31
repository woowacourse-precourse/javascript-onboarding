function problem3(number) {
  let answer = 0;

  //1. 숫자를 string으로 변환
   for(let i = 1; i < number + 1; i++){
     let tempNum = i.toString().split('');

     //2. 숫자 array에 있는 3, 6, 9 count
     tempNum.forEach(function(c){
       
      if(c === '3' || c === '6' || c === '9'){
        answer += 1;

      }
    })
     
  }

  return answer;
  
}


module.exports = problem3;
