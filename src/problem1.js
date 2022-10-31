function check(pages) {
  const [left, right] = pages;
  if (1 <= left && left < 400 && right-left === 1) {
    return true;
  }
  return false;
}

function calculate(pages) {
  const [left, right] = pages;
  const sumleftarr = String(left).split('').reduce((acc, cur) => acc + cur * 1, 0);
  const sumrightarr = String(right).split('').reduce((acc, cur) => acc + cur * 1, 0);
  const multileftarr = String(left).split('').reduce((acc, cur) => acc * cur);
  const multirightarr = String(right).split('').reduce((acc, cur) => acc * cur);

  return Math.max(sumleftarr, sumrightarr, multileftarr, multirightarr);
}

function problme1(pobi, crong) {
  if (!check(pobi) || !check(crong)){
      return -1;
  }
  
  const pobiscore = calculate(pobi);
  const crongscore = calculate(crong);

  if (pobiscore > crongscore) {
      return 1
  }
  if (pobiscore < crongscore) {
      return 2
  }
  else {
      return 0
  }
}

module.exports = problme1;
