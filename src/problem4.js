function problem4(word) {
  let answer = [];

  const arrUpper = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  const arrLower = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
  const arr = [...arrUpper, ...arrLower, " "]
  const reversUpper = arrUpper.reverse();
  const reversLower = arrLower.reverse();
  const reverse = [...reversUpper, ...reversLower, " "]

  for (let i = 0; i < word.length; i++) {
    answer.push(reverse[arr.findIndex(value => value === word[i])])
  }

  return answer.join("")
}

module.exports = problem4;
