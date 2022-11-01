function problem4(word) {
  let answer = "";
  let reverse = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

  for (let i=0; i<word.length; i++) {
    let char = word[i];
    if ("a" <= char.toLowerCase() && char.toLowerCase() <= "z") {
      if (char === char.toUpperCase()) {
        answer += reverse[char.charCodeAt() - 65];
      } else { 
        answer += reverse[char.charCodeAt() - 97].toLowerCase();
      }
    } else {
      answer += char;
    }
  }
  return answer;
}

var str = problem4("I love you");
console.log(str);

module.exports = problem4;
