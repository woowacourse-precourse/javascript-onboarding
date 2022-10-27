function problem1(pobi, crong) {
  if (checkArray(pobi) === true && checkArray(crong) === true) {
    const pobiRecord = getMaxRecord(pobi);
    const crongRecord = getMaxRecord(crong);
    if (pobiRecord > crongRecord) {
      return 1;
    } else if (pobiRecord == crongRecord) {
      return 0;
    } else if (pobiRecord < crongRecord) {
      return 2;
    }
  } else {
    return -1;
  }
}
function getMaxRecord(user) {
  // const left = String(user[0]);
  // const right = String(user[1]);
  const left = user[0];
  const right = user[1];
  console.log(user);
}

function sum() {}

function multiply() {}

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
  //  problem1([97, 98], [197, 198]);
  problem1([99, 102], [211, 212]);
}

testCode();

module.exports = problem1;
