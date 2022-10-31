function problem2(cryptogram) {
  let answer = cryptogram;

  while (isDuplicate(answer)) {
    answer = removeDuplicate(answer);
  }

  return answer;
}

const isDuplicate = (str) => {
  const original = str.split('');
  const set = [...new Set(original)];
  return !(original.length === set.length);
};

const removeDuplicate = (str) =>
  str
    .split('')
    .reduce((a, c, i) => {
      if (c === str[i + 1] || c === str[i - 1]) {
        return a;
      } else {
        a.push(c);
        return a;
      }
    }, [])
    .join('');

module.exports = problem2;
