function problem1(pobi, crong) {
  var answer = 0;
  var pobi_sum_arr1,
    pobi_sum_arr2 = 0;
  var pobi_mult_arr1,
    pobi_mult_arr2 = 1;
  var crong_sum_arr1,
    crong_sum_arr2 = 0;
  var crong_mult_arr1,
    crong_mult_arr2 = 1;
  // * 포비와 크롱의 길이는 2이고, 포비와 크롱에는 왼쪽 페이지 번호, 오른쪽 페이지 번호가 순서대로 들어있을 때
  if (
    pobi.length == 2 &&
    crong.lengt == 2 &&
    pobi[0] < pobi[1] &&
    crong[0] < crong[1]
  ) {
    // * 왼쪽 페이지와 오른쪽 페이지의 차이는 1일 때
    if (pobi[0] == pobi[1] - 1 && crong[0] == crong[1] - 1) {
      sum_mult();
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
  }

  const sum_mult = () => {
    // * 포비 왼쪽 페이지 합 => 각 자릿수를 문자열로 쪼개고, 쪼갠 문자를 정수로 변환 후, 합
    pobi_sum_arr1 = pobi[0]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc + cur, 0);
    // * 포비 오른쪽 페이지 합
    pobi_sum_arr2 = pobi[1]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc + cur, 0);
    // * 크롱 왼쪽 페이지 합
    crong_sum_arr1 = crong[0]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc + cur, 0);
    // * 크롱 오른쪽 페이지 합
    crong_sum_arr2 = crong[1]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc + cur, 0);
    // * 포비 왼쪽 페이지 곱
    pobi_mult_arr1 = pobi[0]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc * cur, 1);
    // * 포비 오른쪽 페이지 곱
    pobi_mult_arr2 = pobi[1]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc * cur, 1);
    // * 크롱 왼쪽 페이지 곱
    crong_mult_arr1 = crong[0]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc * cur, 1);
    // * 크롱 오른쪽 페이지 곱
    crong_mult_arr2 = crong[1]
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, cur) => acc * cur, 1);
  };

  return answer;
}

module.exports = problem1;
