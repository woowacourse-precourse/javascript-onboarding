function problem1(pobi, crong) {
  if (pobi[0], crong[0] === 1 || pobi[0], crong[0] === 399) {
    //시작 면[1, 2]이나 마지막 면[399, 400]이 나오도록 책을 펼치지 않는다.
    return -1;
  } else if (pobi.length != 2 || crong.length != 2) {
    //pobi와 crong의 길이는 2이다.
    return -1;
  } else if (pobi[0]%2, crong[0]%2 != 1 || pobi[1]%2, crong[1]%2 != 0) {
    //pobi와 crong에는 [왼쪽 페이지 번호(홀수), 오른쪽 페이지 번호(짝수)]가 순서대로 들어있다.
    return -1;
  }

  var answer;

  return answer;
}

module.exports = problem1;