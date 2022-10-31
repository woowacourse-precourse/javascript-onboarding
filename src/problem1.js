function problem1(pobi, crong) {
  if (error_case(pobi) || error_case(crong)) return -1;

  let answer;
  let pobi_max_num = find_max_num(pobi);
  let crong_max_num = find_max_num(crong);

  if (pobi_max_num === crong_max_num) answer = 0;
  else if (pobi_max_num > crong_max_num) answer = 1;
  else answer = 2;

  return answer;
}

function find_max_num(character) {
  // 각 페이지 숫자 별 최대값 구하기.
  let add_num = 0;
  let mul_num = 1;
  let character_max_arr = [];

  for (let i = 0; i < character.length; i++) {
    // character의 가장 큰 수 구하기.
    n = character[i];
    while (n > 0) {
      temp = n % 10;
      add_num += temp;
      mul_num *= temp;
      n = Math.floor(n / 10);
    }
    max_num = Math.max(add_num, mul_num);
    character_max_arr.push(max_num);
    add_num = 0;
    mul_num = 1;
  }

  return Math.max(...character_max_arr);
}

module.exports = problem1;
