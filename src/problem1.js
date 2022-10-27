function returnNumber(page) {
  const pg = [...String(page)];
  const eachnum = [];
  pg.map((num) => eachnum.push(parseInt(num)));
  return eachnum;
}

function calcMaxScore(eachnum) {
  const sumvalue = eachnum.reduce((prev, curr) => prev + curr);
  const multiplyvalue = eachnum.reduce((prev, curr) => prev * curr);
  return Math.max(sumvalue, multiplyvalue);
}

function leftandright(user) {
  const arr = [];
  user.map((score) => arr.push(calcMaxScore(returnNumber(score))));
  return arr;
}

function compareEach(arr) {
  left = arr[0];
  right = arr[1];
  return Math.max(left, right);
}

function error(user) {
  const leftpage = user[0];
  const rightpage = user[1];
  if (user.length !== 2) {
    return false;
  }
  if (typeof leftpage != 'number' || typeof rightpage != 'number') {
    return false;
  }
  if (rightpage - leftpage !== 1) {
    return false;
  }
  if (rightpage < 1 || rightpage > 400 || leftpage < 1 || leftpage > 400) {
    return false;
  }
  if (rightpage % 2 != 0 || leftpage % 2 != 1) {
    return false;
  }
  return true;
}

function problem1(pobi, crong) {
    let answer = -1;
    if (error(pobi) == false || error(crong) == false) {
      return answer;
    } 
    else {
      const pobiscore = compareEach(leftandright(pobi));
      const crongscore = compareEach(leftandright(crong));
      if (pobiscore > crongscore) {
        answer = 1;
      } else if (pobiscore < crongscore) {
        answer = 2;
      } else if (pobiscore == crongscore) {
        answer = 0;
      }
    }
  return answer;
}

module.exports = problem1;
