function problem3(number) {
  if(number <1 || number>10000){
    return -1;  //예외1
  }
  if(!Number.isInteger(number)){
    return -1;  //예외2
  }
  if(/[^0-9]/g.test(number)){
    return -1;  //예외3
  }
  var answer=0;
  for(let i=1;i<=number;i++){
    if(/[3,6,9]/g.test(i)){
      let words = i.toString().match(/[3,6,9]/g);
      answer+=words.length;
    }
  }
  return answer;
}
/* 정규 표현식 이용 3,6,9가 포함된 글자를 3,6,9에 매칭되는
항목들의 배열로 받아 그 길이를 더해준다.

예외1) number가 1미만 10000초과일 경우
예외2) number가 자연수가 아닌 경우
예외3) number가 숫자가 아닌 경우
*/
module.exports = problem3;
