function problem1(pobi, crong) {
  let isRestrict = false;

  if (pobi.length !== 2 || crong.length !== 2) {
    isRestrict = true;
  } else if (
    pobi.includes(1) ||
    pobi.includes(400) ||
    crong.includes(1) ||
    crong.includes(400)
  ) {
    isRestrict = true;
  } else if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    isRestrict = true;
  }

  if (isRestrict) {
    return -1;
  } else {
  }
}

module.exports = problem1;
