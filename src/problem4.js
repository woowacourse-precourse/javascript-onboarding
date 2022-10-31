function problem4(word) {
  const answer = word.split("").map(char => {
    if (char == " ") {
      return " "; 
    } else if (char == char.toUpperCase()){
      return String.fromCharCode(90 - char.charCodeAt() + 65);
    } else {
      return String.fromCharCode(122 - char.charCodeAt() + 97);
    }
  }).join("");
  return answer;
}

module.exports = problem4;
