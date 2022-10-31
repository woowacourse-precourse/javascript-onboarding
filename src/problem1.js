// 숫자를 받아서 숫자의 각 자리를 합쳐주는 함수 
function totalSum(num) {
  let arr = num.toString().split("").map(x => parseInt(x));
  return arr.reduce((sum, cur) => sum+cur, 0);
}

// 숫자를 받아서 숫자의 각 자리를 곱해주는 함수
function totalMul(num) {
  let result = 1;
  for (i of num.toString()) {
    result *= parseInt(i); 
  }
  return result;
}

function problem1(pobi, crong) {
  // 예외 사항 처리하기
  if (pobi[0] + 1 != pobi[1]) {
    return -1
  } 
  if (crong[0] + 1 != crong[1]) {
    return -1
  }

  // left plus
  pobi_left_plus = totalSum(pobi[0])
  crong_left_plus = totalSum(crong[0])
    
  // right plus
  pobi_right_plus = totalSum(pobi[1])
  crong_right_plus = totalSum(crong[1])
    
  // left mul
  pobi_left_mul = totalMul(pobi[0])
  crong_left_mul = totalMul(crong[0])
    
  // right mul
  pobi_right_mul = totalMul(pobi[1])
  crong_right_mul = totalMul(crong[1])

  // left 중 가장 큰 값 구하기
  if (pobi_left_plus >= pobi_left_mul) {
    pobi_left_max = pobi_left_plus;
  } else {
    pobi_left_max = pobi_left_mul;
  }

  if (crong_left_plus >= crong_left_mul) {
    crong_left_max = crong_left_plus;
  } else {
    crong_left_max = crong_left_mul;
  }
    
  // right 중 가장 큰 값 구하기
  if (pobi_right_plus >= pobi_right_mul) {
    pobi_right_max = pobi_right_plus;
  } else {
    pobi_right_max = pobi_right_mul;
  }

  if (crong_right_plus >= crong_right_mul) {
    crong_right_max = crong_right_plus;
  } else {
    crong_right_max = crong_right_mul;
  }

  // left max 와 right max 중 큰 값 찾기
  if (pobi_left_max >= pobi_right_max) {
    pobi_max = pobi_left_max;
  } else {
    pobi_max = pobi_right_max;
  }

  if (crong_left_max >= crong_right_max) {
    crong_max = crong_left_max;
  } else {
    crong_max = crong_right_max;
  }

  // pobi의 최댓값과 crong의 최댓값 중 어느 것이 큰 지 판단하는 로직
  if (pobi_max > crong_max){ 
        return 1;
  } else if (pobi_max == crong_max){
        return 0;
  } else if (pobi_max < crong_max){
        return 2;
  } else {
        return -1;
  }
}

console.log(`problem1 : ${problem1([97, 98], [197, 198])}`);
console.log(`problem1 : ${problem1([131, 132], [211, 212])}`);
console.log(`problem1 : ${problem1([99, 102], [211, 212])}`);

module.exports = problem1;
