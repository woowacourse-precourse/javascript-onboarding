function problem1(pobi, crong) {
  //pobi, crong의 배열을 한개씩 잘라서 arr에 반환
  let pobi_arr = pobi.join("").split("");
  let crong_arr = crong.join("").split("");

  //왼쪽 페이지의 가장 큰 값을 pobi_left_max에 저장
  let pobi_left_max = Math.max(
    pobi_arr.slice(0, pobi_arr.length / 2).reduce((a, c) => +a + +c),
    pobi_arr.slice(0, pobi_arr.length / 2).reduce((a, c) => +a * +c)
  );
  //오른쪽 페이지의 가장 큰 값을 pobi_rigth_max 저장
  let pobi_rigth_max = Math.max(
    pobi_arr.slice(pobi_arr.length / 2).reduce((a, c) => +a + +c),
    pobi_arr.slice(pobi_arr.length / 2).reduce((a, c) => +a * +c)
  );

  //pobi_max에 왼쪽 오른쪽 중 큰 값을 저장
  let pobi_max = Math.max(pobi_left_max, pobi_rigth_max);

  //왼쪽 페이지의 가장 큰 값을 crong_left_max 저장
  let crong_left_max = Math.max(
    crong_arr.slice(0, crong_arr.length / 2).reduce((a, c) => +a + +c),
    crong_arr.slice(0, crong_arr.length / 2).reduce((a, c) => +a * +c)
  );
  //오른쪽 페이지의 가장 큰 값을 crong_rigth_max 저장
  let crong_rigth_max = Math.max(
    crong_arr.slice(crong_arr.length / 2).reduce((a, c) => +a + +c),
    crong_arr.slice(crong_arr.length / 2).reduce((a, c) => +a * +c)
  );

  //crong_max에 왼쪽 오른쪽 중 큰 값을 저장
  let crong_max = Math.max(crong_left_max, crong_rigth_max);

  return pobi[1] - pobi[0] !== 1
    ? -1 //예외처리
    : pobi_max > crong_max
    ? 1
    : pobi_max < crong_max
    ? 2
    : 0;
}

module.exports = problem1;
