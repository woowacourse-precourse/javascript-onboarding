function problem4(word) {
  var answer;
  return (answer = encode(word));
}

const encode = (word) => {
  let strArr = [];
  [...word].map((e) => {
    const code = findAscii(e);
    if (65 <= code && code <= 90) {
    } else if (97 <= code && code <= 122) {
    } else {
    }
  });
};
const findAscii = (word) => {
  return word.charCodeAt(0);
};

module.exports = problem4;
