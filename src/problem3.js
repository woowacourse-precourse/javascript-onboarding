/*
구현사항
1. 3, 6, 9에 해당하는 정규 표현식과 박수 횟수가 저장 될 clap 변수 선언
2. 1 ~ number까지 for문을 통해 i가 3, 6, 9에 해당하는지 확인
3. match 될 경우 반환된 배열의 길이 만큼 clap 증가시키기 (ex. 33일 경우 3이 2개 이므로 clap 2번 증가!)
4. 저장된 clap 값 return 하기
*/

function problem3(number) {
  let clap = 0;
  const clapNum = /3|6|9/g;
  
  for (let i=1; i<=number; i++) {
    const matchNum = i.toString().match(clapNum);

    if(matchNum !== null) { // match된 3, 6, 9가 있을 경우
      clap += matchNum.length;
    } 
  }

  return clap;
}

module.exports = problem3;
