function problem1(pobi, crong) {
  const checkPages = (arr) => {
    return arr[1] - arr[0] !== 1 || arr[0] < 1 || arr[1] > 400 ? true : false;
  };
  const calcNum = (num) => {
    const add = (num + "")
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
    const mutli = (num + "")
      .split("")
      .reduce((acc, curr) => acc * parseInt(curr));
    return Math.max(add, mutli);
  };

  const compare = (person1, person2) => {
    if (checkPages(person1) || checkPages(person2)) {
      return -1;
    } else {
      const person1Best = Math.max(calcNum(person1[0]), calcNum(person1[1]));
      const person2Best = Math.max(calcNum(person2[0]), calcNum(person2[1]));
      return person1Best >= person2Best
        ? person1Best === person2Best
          ? 0
          : 1
        : 2;
    }
  };
  return compare(pobi, crong);
}

module.exports = problem1;
