function problem2(cryptogram) {
  return check(cryptogram);
}
function check(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.length == 0) {
      return "";
    }
    if (str[i] == str[i + 1]) {
      let a = str.toString().substring(i, i + 2); //같은 글자를 뽑아서
      str = str.replace(a, ""); //빈걸로 바꿔줌
      return check(str); //brown,5,
    }
  }
  return str;
}
let input = [
  "browoanoommnaonqq",
  "browoannaon",
  "browoaaon",
  "browoon",
  "brown",
  "zyelleyz",
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${problem2(input[i])}`);
}
// console.log("test: ", problem2(input[0]));
module.exports = problem2;
