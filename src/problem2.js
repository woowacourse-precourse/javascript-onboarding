function problem2(cryptogram) {
  var answer;
  let resultofC = ``;
  let storeC = cryptogram[0];

  for (let i of cryptogram) {
    console.log(i);
    if (i == storeC && resultofC.length >= 2) {
      resultofC.slice(0, resultofC.length - 1);    
      continue;     
    } 
      resultofC += i;
      storeC = i;

    
  }
   answer = resultofC


  return answer;
}
console.log(problem2('browoanoommnaon'));
module.exports = problem2;
