function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i += 1) {
    for (let n of i.toString())
      if ([3, 6, 9].includes(Number(n))) count += 1;
  }
return count;
}

module.exports = problem3;
