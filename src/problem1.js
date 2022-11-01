function problem1(pobi, crong) {
  const chk = (e) => {
    if (e[0] % 2 === 0 || e[0] <= 1 || e[1] >= 400 || e[0] + 1 !== e[1]) {
      return false;
    }
    return true;
  };

  if (!chk(pobi) || !chk(crong)) {
    return -1;
  } else {
    const getPages = (e) => {
      let result = 0;

      for (let i in e) {
        let pages = (e[i] + "").split("").map(Number);
        let addUpPages = pages.reduce((acc, cur) => acc + cur, 0);
        let multiplyPages = pages.reduce((acc, cur) => acc * cur, 1);

        if (addUpPages > result) {
          result = addUpPages;
        }

        if (multiplyPages > result) {
          result = multiplyPages;
        }
      }

      return result;
    };

    const acc = getPages(pobi);
    const cur = getPages(crong);

    if (acc === cur) {
      return 0;
    }

    if (acc > cur) {
      return 1;
    }

    return 2;
  }
}
module.exports = problem1;
