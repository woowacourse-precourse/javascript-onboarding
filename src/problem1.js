function problem1(pobi, crong) {
  if (checkArray(pobi) === true && checkArray(crong) === true) {
    const pobiRecord = getMaxRecord(pobi);
    const crongRecord = getMaxRecord(crong);
    if (pobiRecord > crongRecord) {
      console.log("포비 승");
      return 1;
    } else if (pobiRecord == crongRecord) {
      console.log("무승부");
      return 0;
    } else if (pobiRecord < crongRecord) {
      console.log("크롱 승");
      return 2;
    }
  } else {
    return -1;
  }
}
function getMaxRecord(user) {
  return sliceArray(user[0], user[1]);
}
function sliceArray(left, right) {
  const sliceLeft = left.toString().split("");
  const sliceRight = right.toString().split("");
  const maxSum = sum(sliceLeft, sliceRight);
  const maxMultiply = multiply(sliceLeft, sliceRight);

  return maxSum > maxMultiply ? maxSum : maxMultiply;
}

function sum(sliceLeft, sliceRight) {
  let sumLeft = 0;
  let sumRight = 0;

  for (let i = 0; i < sliceRight.length; i++) {
    sumRight += Number(sliceRight[i]);
  }

  for (let i = 0; i < sliceLeft.length; i++) {
    sumLeft += Number(sliceLeft[i]);
  }

  return sumLeft > sumRight ? sumLeft : sumRight;
}

function multiply(sliceLeft, sliceRight) {
  let multiplyLeft = 1;
  let multiplyRight = 1;

  for (let i = 0; i < sliceLeft.length; i++) {
    multiplyLeft = multiplyLeft * Number(sliceLeft[i]);
  }
  for (let i = 0; i < sliceRight.length; i++) {
    multiplyRight = multiplyRight * Number(sliceRight[i]);
  }

  return multiplyLeft > multiplyRight ? multiplyLeft : multiplyRight;
}

function checkArray(user) {
  if (user[0] + 1 == user[1]) {
    return true;
  } else {
    return false;
  }
}
function checkOdd(user) {
  if (user % 2 !== 0) {
    return user;
  } else {
    if (user == 398) {
      return user - 1;
    }
    return user + 1;
  }
}

function testCode() {
  let pobi = [0, 0];
  let crong = [0, 0];

  pobi[0] = Math.floor(Math.random() * (398 - 2) + 2);
  crong[0] = Math.floor(Math.random() * (398 - 2) + 2);
  pobi[0] = checkOdd(pobi[0]);
  crong[0] = checkOdd(crong[0]);

  pobi[1] = pobi[0] + 1;
  crong[1] = crong[0] + 1;

  //problem1(pobi, crong);
  //problem1([97, 98], [197, 198]);
  problem1([131, 132], [211, 212]);
  //problem1([99, 102], [211, 212]);
}

testCode();

module.exports = problem1;
