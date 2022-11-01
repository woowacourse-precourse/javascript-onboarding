function problem4(word) {
  let answer = "";
  let reverse = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

  for (let i=0; i<word.lenth; i++) {
    let char = word[i];
    if ("a" <= char.toLowerCase() && char.toLowerCase() <= "z") {
      
    } else {
      answer += char;
    }
  }
  return answer;
}

module.exports = problem4;
