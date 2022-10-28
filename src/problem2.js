function problem2(cryptogram) {
  let str = cryptogram.split("");
  const recursion = (s) => {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
        s.splice(i, 2);
        recursion(s);
      }
    }
  };
  recursion(str);
  let answer = str.join('');
  return answer;
}

module.exports = problem2;
