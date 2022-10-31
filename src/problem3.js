function numberOf369(string) {
  return string.match(/[369]/g)?.length || 0;
}

function problem3(number) {
  const result = Array.from({ length: number })
    .reduce((clap, _, idx) => {
      const cur = String(idx + 1);
      
      return clap + numberOf369(cur);
    }, 0);

  return result;
}

module.exports = problem3;
