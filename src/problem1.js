function problem1(pobi, crong) {
  // 예외처리 부분
  const exPobi = exCheck(pobi);
  const exCrong = exCheck(crong);
  if (exPobi !== -1 || exCrong !== -1) return -1;
  else {
    // 예외가 아닌 배열을 계산하는 부분
    pobi = changeString(pobi);
    crong = changeString(crong);
    const pobiMax = arrCheck(pobi);
    const crongMax = arrCheck(crong);
    
    // 포비가 이긴 경우
    if (pobiMax > crongMax) return 1;
    // 크롱이 이긴 경우
    else if (pobiMax < crongMax) return 2;
    // 비긴 경우
    else return 0;
  }
}

// 예외 상황 처리 (연속된 숫자가 아닌 경우)
const exCheck = (arr) => {
  const tmp = arr.reduce((a, b) => {
    return a - b;
  })
  return tmp;
}

// 배열안의 number 형을 string으로 바꾸는 함수
const changeString = (arr) => {
  arr = arr.map((el) => {
    return el += "";
  })
  return arr;
} 

// 배열에서 가장 큰 수를 찾는 함수
const arrCheck = (arr) => {
  const [be, af] = arr;
  return numAddMul(be) >= numAddMul(af) ? numAddMul(be) : numAddMul(af);

}

// 배열내에서 곱이나 합을 하는 함수
const numAddMul = (num) => {
  let add = 0;
  let mul = 1;
  const tmpArr = [...num];
  tmpArr.forEach((el) => {
    add += +el;
    mul *= +el;
  })
  return add>=mul ? add : mul;
}


module.exports = problem1;
