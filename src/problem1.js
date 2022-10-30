function problem1(pobi, crong) {
  var answer = 0;

  // * 왼쪽 페이지와 오른쪽 페이지의 차이는 1일 때
  if (pobi[0] == pobi[1] - 1 && crong[0] == crong[1] - 1) {
    // * 포비 왼쪽 페이지 합
    var pobi_sum_arr1 = pobi[0]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc + cur, 0);
    // * 포비 오른쪽 페이지 합
    var pobi_sum_arr2 = pobi[1]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc + cur, 0);
    // * 크롱 왼쪽 페이지 합
    var crong_sum_arr1 = crong[0]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc + cur, 0);
    // * 크롱 오른쪽 페이지 합
    var crong_sum_arr2 = crong[1]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc + cur, 0);
    // * 포비 왼쪽 페이지 곱
    var pobi_mult_arr1 = pobi[0]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc * cur, 1);
    // * 포비 오른쪽 페이지 곱
    var pobi_mult_arr2 = pobi[1]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc * cur, 1);
    // * 크롱 왼쪽 페이지 곱
    var crong_mult_arr1 = crong[0]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc * cur, 1);
    // * 크롱 오른쪽 페이지 곱
    var crong_mult_arr2 = crong[1]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc * cur, 1);
    // * 포비 값들 중 가장 큰 값
    var p_max = Math.max(
      pobi_sum_arr1,
      pobi_mult_arr1,
      pobi_sum_arr2,
      pobi_mult_arr2
    );
    // * 크롱 값들 중 가장 큰 값
    var c_max = Math.max(
      crong_sum_arr1,
      crong_mult_arr1,
      crong_sum_arr2,
      crong_mult_arr2
    );

    // * 포비와 크롱 중 누가 큰지 비교
    if (p_max > c_max) {
      answer = 1;
    } else if (p_max < c_max) {
      answer = 2;
    } else if (p_max == c_max) {
      answer = 0;
    } else {
      answer = -1;
    }
  } else {
    // * 왼쪽 페이지와 오른쪽 페이지의 차이는 1이 아닐 때
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
