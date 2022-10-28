function problem1(pobi, crong) {
  let flag = true;
  let pobiScore;
  let crongScore;

  // pobi
  if (pobi[1] - pobi[0] !== 1) {
    flag = false;
  } else {
    // 왼쪽 페이지
    let left = new String(pobi[0]);
    let leftSum = 0;
    let leftMultiple = 1;
    let leftScore;
    for (let i = 0; i < left.length; i++) {
      leftSum += parseInt(left[i]);
      leftMultiple *= parseInt(left[i]);
    }
    if (leftSum > leftMultiple) {
      leftScore = leftSum;
    } else {
      leftScore = leftMultiple;
    }
    // 오른쪽 페이지
    let right = new String(pobi[1]);
    let rightSum = 0;
    let rightMultiple = 1;
    let rightScore;
    for (let i = 0; i < right.length; i++) {
      rightSum += parseInt(right[i]);
      rightMultiple *= parseInt(right[i]);
    }
    if (rightSum > rightMultiple) {
      rightScore = rightSum;
    } else {
      rightScore = rightMultiple;
    }
    // 왼쪽 페이지 vs 오른쪽 페이지
    if (leftScore > rightScore) {
      pobiScore = leftScore;
    } else {
      pobiScore = rightScore;
    }
  }

  // crong
  if (crong[1] - crong[0] !== 1) {
    flag = false;
  } else {
    // 왼쪽 페이지
    let left = new String(crong[0]);
    let leftSum = 0;
    let leftMultiple = 1;
    let leftScore;
    for (let i = 0; i < left.length; i++) {
      leftSum += parseInt(left[i]);
      leftMultiple *= parseInt(left[i]);
    }
    if (leftSum > leftMultiple) {
      leftScore = leftSum;
    } else {
      leftScore = leftMultiple;
    }
    // 오른쪽 페이지
    let right = new String(crong[1]);
    let rightSum = 0;
    let rightMultiple = 1;
    let rightScore;
    for (let i = 0; i < right.length; i++) {
      rightSum += parseInt(right[i]);
      rightMultiple *= parseInt(right[i]);
    }
    if (rightSum > rightMultiple) {
      rightScore = rightSum;
    } else {
      rightScore = rightMultiple;
    }
    // 왼쪽 페이지 vs 오른쪽 페이지
    if (leftScore > rightScore) {
      crongScore = leftScore;
    } else {
      crongScore = rightScore;
    }
  }

  // pobiScore vs crongScore
  if (flag === false) {
    return -1;
  } else if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  } else if (pobiScore === crongScore) {
    return 0;
  }
}
module.exports = problem1;
