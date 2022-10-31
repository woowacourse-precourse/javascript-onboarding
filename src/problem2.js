function problem2(cryptogram) {
  let answer = cryptogram.split("");
  for (let i = 0; i < answer.length; i++) {
    //console.log(answer[i]);
    if (answer[i] === answer[i - 1]) {
      let stock = 1;
      let j = i;
      // console.log(j)
      while (answer[j] === answer[j - 1]) {
        stock++;
        j++;
        //console.log(j)
      }
      answer.splice(i - 1, stock);
      i = 0;
      console.log(answer);
    }
  }
  answer = answer.join("");
  return answer;
}
console.log(problem2("browoanoommnaon"));
module.exports = problem2;
