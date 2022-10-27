function problem2(cryptogram) {
  var answer;
  let resultofC = '';
  let storeC = cryptogram[0];

  for (let i of cryptogram) {
    console.log(i);
    if (i !== storeC) {
      resultofC += storeC;
    }
  }
  resultofC += storeC;
  console.log(resultofC);
   answer = resultofC


  return answer;
}
console.log(problem2('browoanoommnaon'));
module.exports = problem2;
