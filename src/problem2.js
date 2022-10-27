// function problem2(cryptogram) {
//   var answer;
//   return answer;
// }

// module.exports = problem2;

function problem2(cryptogram) {
  var answer = [];
  let arr = cryptogram.split("");

  for (let i = 0; i <= arr.length; i++) {
    if (answer[answer.length - 1] == arr[i]) answer.pop();
    else answer.push(arr[i]);
  }
  return answer;

}

const cryptogram = 'zyelleyz';
console.log(problem2(cryptogram).join(" "));