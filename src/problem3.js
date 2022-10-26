function problem3(number){
  let answer=0;
  //숫자를 1부터 증가시키며 확인한다.
  for(let i=1; i<=number; i++){
      //숫자를 문자로 변환후 정규식을 이용해 3,6,9의 개수를 구한다.
      if(String(i).match(/[3,6,9]/g))
       answer+=String(i).match(/[3,6,9]/g).length;
  }
  return answer;
}

module.exports = problem3;
