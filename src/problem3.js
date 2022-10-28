function problem3(number) {
  let count = 0;
  for (i = 1; i <= number; i++) {
    count += count369(i);
  }

  return count;
}

const count369 = (num) => {
  const regex = new RegExp(/[369]/g);
  return num.toString().match(regex) ? num.toString().match(regex).length : 0;
};

module.exports = problem3;
