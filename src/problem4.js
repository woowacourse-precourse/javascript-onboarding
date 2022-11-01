function problem4(word) {
  let answer;
  answer = changeStr(word).join("");
  return answer;
}

function changeStr(str) {
  return [...str].map((char) => {
    const codeIndex = char.charCodeAt(0);
    let returnIndex;

    if (codeIndex === 32) return " ";
    if (codeIndex < 65 || (codeIndex > 90 && codeIndex < 97) || codeIndex > 122)
      return "";

    if (codeIndex <= 90) returnIndex = 90 - codeIndex + 65;
    if (codeIndex >= 97) returnIndex = 122 - codeIndex + 97;

    return String.fromCharCode(returnIndex);
  });
}
module.exports = problem4;

// A :: 65
// Z :: 90
// a :: 97
// z :: 122
