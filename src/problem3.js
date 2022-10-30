function problem3(number) {
  let answer = 0;

  //1. 숫자를 string으로 변환
   for(let i = 1; i < number + 1; i++){
     let tempNum = i.toString().split('');
     
     console.log(tempNum);

  }

  return answer;
  
}


problem3(10);

module.exports = problem3;
