function problem1(pobi, crong) {
  var pobi_arr = pobi;
  var crong_arr = crong;
  var answer;
  if ( /* 펼쳤을 때 두 페이지 번호가 1 차이가 나지 않는 경우 */
    Math.abs(pobi_arr[0] - pobi_arr[1]) != 1 ||
    Math.abs(crong_arr[0] - crong_arr[1]) != 1
  )
    return -1;
  else { /* 각 페이지의 자체 합과 곱을 비교 후 큰 값을 넣어둠. */
    pobi_arr[0] = selfCompare(pobi_arr[0]);
    pobi_arr[1] = selfCompare(pobi_arr[1]);
    crong_arr[0] = selfCompare(crong_arr[0]);
    crong_arr[1] = selfCompare(crong_arr[1]);
    var result = Math.max(pobi_arr[0], pobi_arr[1]) - Math.max(crong_arr[0], crong_arr[1]);
    result == 0 ? (answer = 0) : result > 0 ? (answer = 1) : (answer = 2); /* 포비와 크롱의 값을 비교하여 answer에 알맞는 결과 값 할당. */
  }
  return answer;
}
/**
 * selfCompare는
 * 매개변수에 대하여 자체 합, 자체 곱을 비교하여
 * 큰 값을 출력해주는 함수.
 *
 * @param num 자체 합과 곱을 비교하고자 하는 페이지 번호.
 * @return num에 대한 자체 합과 곱 중 큰 값을 리턴.
 */
function selfCompare(num) {
  if (num < 10) return num;
  else if (num < 100)
    return Math.max(parseInt(num / 10) * (num % 10), num / 10 + (num % 10));
  else
    return Math.max(
      (num % 10) * parseInt((num % 100) / 10) * parseInt(num / 100),
      (num % 10) + (num % 100) / 10 + num / 100
    );
}
module.exports = problem1;
