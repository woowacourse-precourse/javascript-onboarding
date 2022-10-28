// const isOverlap = (answer, char) => {
//   return answer[answer.length - 1] === char;
// };

// function problem2(cryptogram) {
//   let answer = "";
//   for (let i = 0; i < cryptogram.length; i++) {
//     if (isOverlap(answer, cryptogram[i])) {
//       answer = answer.slice(0, answer.length - 1);
//       continue;
//     }
//     answer += cryptogram[i];
//   }
//   return answer;
// }

// module.exports = problem2;

const isOverlap = (answer, char) => {
  return answer[answer.length - 1] === char;
};

function problem2(cryptogram) {
  let stack = "";
  [...cryptogram].forEach((char) => {
    stack += char;
  });
}

module.exports = problem2;
