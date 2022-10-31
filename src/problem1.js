function problem1(pobi, crong) {
  var answer;
  if (!(check(pobi) && check(crong))) {
    //입력 조건 체크
    answer = -1;
    return answer;
  }
  //각자 최고 점수를 구한다
  let pobi_max = getMaxScore(pobi);
  let crong_max = getMaxScore(crong);
  //최고 점수에 따라 리턴
  let winner_max = max(pobi_max, crong_max);
  if (winner_max == pobi_max && winner_max == crong_max) {
    answer = 0;
  } else if (winner_max == pobi_max) {
    answer = 1;
  } else answer = 2;

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
function getMaxScore(arr) {
  //최고 점수를 리턴하는 함수
  let odd_page = arr[0];
  let even_page = arr[1];
  const odd_num_list = odd_page
    .toString()
    .split("")
    .map((el) => parseInt(el)); //97 -> [9,7]
  const even_num_list = even_page
    .toString()
    .split("")
    .map((el) => parseInt(el)); // 98 -> [9,8]
  //짝수페이지, 홀수페이지 각각 각 자리의 곱과 합 중 큰 것을 찾음
  const odd_max = max(multiplyAllNum(odd_num_list), addAllNum(odd_num_list));
  const even_max = max(multiplyAllNum(even_num_list), addAllNum(even_num_list));

  return max(odd_max, even_max);
}
function max(a, b) {
  //둘 중, 더 큰 것을 리턴
  if (a > b) return a;
  else return b;
}
function multiplyAllNum(num_list) {
  //숫자 배열의 곱을 리턴
  multiple = 1;
  for (let i in num_list) {
    multiple *= num_list[i];
  }
  return multiple;
}
function addAllNum(num_list) {
  //숫자 배열의 합을 리턴
  sum = 0;
  for (let i in num_list) {
    sum += num_list[i];
  }
  return sum;
}
module.exports = problem1;

