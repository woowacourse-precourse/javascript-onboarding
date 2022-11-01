function problem2(cryptogram) {
  const answer = cryptogram
    .split("")
    .reduce((stack, curr) => {
      if (stack.length === 0) return [...stack, curr];
      if (stack[stack.length - 1] === curr) {
        return [...stack.slice(0, -1)];
      }
      return [...stack, curr];
    }, [])
    .join("");
  return answer;
}

module.exports = problem2;
