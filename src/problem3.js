function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    const includes = getInclude369(i);
    if (includes) count += includes.length;
  }
  return count;
}

function getInclude369(number) {
  const includes = number.toString().match(/3|6|9/gi);
  if (includes) return includes;
  return includes;
}

module.exports = problem3;
