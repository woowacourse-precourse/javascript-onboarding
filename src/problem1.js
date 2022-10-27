function problem1(pobi, crong) {
  let answer;

  // 예외처리
  if (
    Math.abs(pobi[0] - pobi[1]) !== 1 ||
    Math.abs(crong[0] - crong[1]) !== 1
  ) {
    answer = -1;
    return answer;
  }

  let pobi_list = [];
  let crong_list = [];

  let pobi_max = 0;
  let crong_max = 0;

  // 포비의 최대값 구하기
  for (let num of pobi) {
    data = String(num).split("").map(Number);
    pobi_list.push(data.reduce((x, y) => x + y, 0));
    pobi_list.push(data.reduce((x, y) => x * y, 1));
  }

  pobi_max = Math.max(...pobi_list);

  // 크롱의 최대값 구하기
  for (let num of crong) {
    data = String(num).split("").map(Number);
    crong_list.push(data.reduce((x, y) => x + y, 0));
    crong_list.push(data.reduce((x, y) => x * y, 1));
  }

  crong_max = Math.max(...crong_list);

  //승자 비교
  if (pobi_max > crong_max) answer = 1;
  else if (pobi_max < crong_max) answer = 2;
  else answer = 0;

  return answer;
}

// let a = problem1([99, 102], [211, 212]);
// console.log(a);
module.exports = problem1;
