function problem1(pobi, crong) {
  var answer;
  if (!(check(pobi) && check(crong))) {
    //입력 조건 체크
    answer = -1;
  }
  return answer;
}

function check(arr) {
  //배열이 아래의 조건들을 만족한다면 true리턴
  return (
    arr.length === 2 && //두페이지씩 입력
    arr[0] + 1 === arr[1] && //책이 찢어지지 않았는지
    arr[0] % 2 === 1 && //왼쪽이 홀수
    arr[1] % 2 === 0 && //오른쪽이 짝수
    arr[0] > 1 && //시작면
    arr[1] < 400 //마지막면
  );
}

module.exports = problem1;

