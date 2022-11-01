function problem4(word) {
  var answer;

  const result = [];
  const large = [];
  const small = [];

  for (let i = 0; i <= 25; i++) {
    large.push(65 + i);
    small.push(97 + i);
  }

  for (let i = 0; i < word.length; i++) {
    let ascii = word.charCodeAt(i);

    // 대문자: A(65) ~ Z(90)
    if (ascii >= 65 && ascii <= 90) {
      large.map((w, i) => {
        if (w === ascii) {
          let frog = large[(large.length - 1) - i];
          result.push(String.fromCharCode(frog));
        }
      })
    } else if (ascii >= 97 && ascii <= 122) {
      // 소문자: a(97) ~ z(122)
      small.map((w, i) => {
        if (w === ascii) {
          let frog = small[(small.length - 1) - i];
          result.push(String.fromCharCode(frog));
        }
      })
    } else {
      result.push(String.fromCharCode(ascii));
    }
  }
  answer = result.join('');

  return answer;
}

module.exports = problem4;
