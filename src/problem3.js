function problem3(number) {
  let targetArr = [
    ...Array(number)
      .fill()
      .map((_, idx) => idx + 1)
      .join(''),
  ].filter((x) => ['3', '6', '9'].includes(x));

  return targetArr.length;
}

module.exports = problem3;
