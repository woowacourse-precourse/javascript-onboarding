function problem4(word) {
  const dict = {};

  let reverse = 90;

  for (let i = 65; i < 91; i++) {
    dict[String.fromCharCode(i)] = String.fromCharCode(reverse);
    reverse -= 1;
  }
  return dict;
}

module.exports = problem4;

console.log(problem4("I love you"));
