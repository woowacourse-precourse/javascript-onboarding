function problem3(number) {
  const tokens = [3, 6, 9];
  let claps = 0;

  for (let count = 1; count <= number; count++) {
    let slicedNumber = count
      .toString()
      .split("")
      .map((slice) => parseInt(slice));

    slicedNumber.forEach((number) => {
      if (tokens.includes(number)) claps++;
    });
  }
  return claps;
}

module.exports = problem3;
