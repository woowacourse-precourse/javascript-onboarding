function problem1(pobi, crong) {
  const checkPages = (arr) => {
    return arr[1] - arr[0] !== 1 || arr[0] === 1 || arr[1] === 400
      ? true
      : false;
  };
  if (checkPages(pobi) || checkPages(crong)) {
    return -1;
  } else {
  }
}

module.exports = problem1;
