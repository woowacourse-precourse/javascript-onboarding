function problem4(word) {
  let answer;

  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnofqrstuvwxyz";
  let reverse = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba";

  let index = (char) => str.indexOf(char);
  let translate = (char) => (index(char) > -1 ? reverse[index(char)] : char);
  if (word == null) {
    word = " ";
  }

  answer = word.split("").map(translate).join("");

  return answer;
}

module.exports = problem4;
