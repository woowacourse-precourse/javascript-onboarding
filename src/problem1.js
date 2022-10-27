function problem1(pobi, crong) {
  let answer = 0;
  let pobiTemp = [];
  let crongTemp = [];
  //pobi 의 왼쪽 페이지 더하기 값 9+7
  if (pobi[1] - pobi[0] === 1 && crong[1] - crong[0] === 1) {
    let pobiLeftPlus = (pobi[0] + "")
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
    pobiTemp.push(pobiLeftPlus);

    //pobi 의 오른쪽 페이지 더하기 9+8
    let pobiRightPlus = (pobi[1] + "")
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
    pobiTemp.push(pobiRightPlus);

    //pobi 의 왼쪽 페이지 곱하기 9*7
    let pobiLeftMultiply = (pobi[0] + "")
      .split("")
      .reduce((acc, curr) => acc * parseInt(curr));
    pobiTemp.push(pobiLeftMultiply);

    //pobi 의 오른쪽 페이지 곱하기 9*8
    let pobiRightMultiply = (pobi[1] + "")
      .split("")
      .reduce((acc, curr) => acc * parseInt(curr));
    pobiTemp.push(pobiRightMultiply);

    //pobi 더하기 곱하기 중 제일 큰 값도출
    let pobiResult = Math.max(...pobiTemp);

    //crong 의 왼쪽 페이지 더하기 1+9+7
    let crongLeftPlus = (crong[0] + "")
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
    crongTemp.push(crongLeftPlus);

    //crong 의 오른쪽 페이지 더하기 1+9+8
    let crongRightPlus = (crong[1] + "")
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
    crongTemp.push(crongRightPlus);

    //crong 의 왼쪽 페이지 곱하기 1*9*7
    let crongLeftMultiply = (crong[0] + "")
      .split("")
      .reduce((acc, curr) => acc * parseInt(curr));
    crongTemp.push(crongLeftMultiply);

    //crong 의 오른쪽 페이지 곱하기 1*9*8
    let crongRightMultiply = (crong[1] + "")
      .split("")
      .reduce((acc, curr) => acc * parseInt(curr));
    crongTemp.push(crongRightMultiply);

    //crong 더하기 곱하기 중 제일 큰 값도출
    let crongResult = Math.max(...crongTemp);
    // console.log(pobi[1] - pobi[0]);

    if (pobiResult > crongResult) {
      answer = 1;
    } else if (pobiResult < crongResult) {
      answer = 2;
    } else if (pobiResult === crongResult) {
      answer = 0;
    }
  } else {
    answer = -1;
  }
  return answer;
}

// problem1(p, c);

module.exports = problem1;

// 배열의 length는 2
// [x, x+1] => if [x,x+1]이 아니면 -1 return [x, x+1]이면 0 or 1 비교
