function problem1(pobi, crong) {
  if (isNotPage(pobi) || isNotPage(crong)) {
    return -1;
  }

  if (maxValue(pobi) > maxValue(crong)) {
    return 1;
  }
  if (maxValue(pobi) < maxValue(crong)) {
    return 2;
  }
  if (maxValue(pobi) == maxValue(crong)) {
    return 0;
  }

  return -1;
}

function isNotPage(pages) {
  if (
    pages[1] - pages[0] !== 1 ||
    pages[0] % 2 == 0 ||
    pages[0] == 1 ||
    pages[1] == 400
  ) {
    return true;
  }
  return false;
}

function plusNum(page) {
  let numbers = String(page).split("");
  return numbers.reduce((sum, num) => sum + Number(num), 0);
}

function multiNum(page) {
  let numbers = String(page).split("");
  if (numbers.includes("0")) {
    return 0;
  }
  return numbers.reduce((sum, num) => sum * Number(num), 1);
}

function maxValue(member) {
  const resultArr = member.reduce((arr, page) => {
    arr.push(Math.max(plusNum(page), multiNum(page)));
    return arr;
  }, []);
  return Math.max(...resultArr);
}

module.exports = problem1;
