//박수 갯수를 구하는 함수
const getClap = (num) => {
  //숫자를 문자로 변환후 정규식을 이용해 3,6,9의 개수를 구한다.
  const clap = String(num).match(/[3,6,9]/g);
  return clap ? clap.length : 0;
}

//메인함수
function problem3(number){
  let answer = 0;

  //숫자를 1부터 증가시키며 확인한다.
  for(let i = 1; i <= number; i++){
    answer += getClap(i);
  }

  return answer;
}

module.exports = problem3;
