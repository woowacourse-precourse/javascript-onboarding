function problem2(cryptogram) {
  let length = cryptogram.length;
  return check(cryptogram, length);
}
function check(str, length) {
  for (let i = 0; i < length; i++) {
    if (length == 0) {
      return "";
    }
    if (i + 1 < str.length) {
      if (str[i] == str[i + 1]) {
        let a = str.toString().substring(i, i + 2); //같은 글자를 뽑아서
        str = str.replace(a, ""); //빈걸로 바꿔줌
        length -= 2; //뺀수만큼 길이를 줄이고
        return check(str, length); //brown,5,
      }
    }
  }
  return str;
}
let input = [
  "browoanoommnaon",
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
