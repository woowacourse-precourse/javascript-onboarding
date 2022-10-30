function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    const matchedWith369 = i.toString().match(/[369]/g);
    count += matchedWith369?.length ?? 0;
  }
  return count;
}

module.exports = problem3;
