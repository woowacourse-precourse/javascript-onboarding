function numberOf369(string) {
  return string.match(/[369]/g)?.length || 0;
}

function problem3(number) {
  const result = Array.from({ length: number })
    .map((_, i) => `${i + 1}`)
    .reduce((clap, i) => clap + numberOf369(i), 0);

  return result;
}

module.exports = problem3;
