/*
 #기능 요구 사항
숫자 number가 매개변수로 주어질 때, 1부터 number까지 손뼉을 몇 번 쳐야 하는지 
횟수를 return 하도록 solution 메서드를 완성하라.

1. 1부터 number까지의 3,6,9 숫자를 계산한다.

*/

function problem3(number) {
  let answer;
  answer = solution(number);
  return answer;
}

function solution(number) {
  const result = calculation(number);
  return result;
}

/* 1부터 number까지의 3,6,9 숫자를 계산한다. */
function calculation(number) {
     
  let clap = 0;

  for(let curNumber = 1; curNumber<=number; curNumber++){
     let curNumberToString = curNumber.toString();

     for(let j=0; j<curNumberToString.length; j++) { 
         if(curNumberToString[j] =='3' || curNumberToString[j] =='6' || curNumberToString[j] =='9') {
             clap++;
         }
     }

  }

 return clap;

}

module.exports = problem3;
