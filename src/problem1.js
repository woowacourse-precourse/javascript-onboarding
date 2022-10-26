function problem1(pobi, crong) {
  var answer;
  let pobiArr = [];
  let crongArr = [];
  let pobiNumtoStr;
  let crongNumtoStr;
  let sum;
  let multiply;

  for (let i = 0 ; i < 2 ; i++) {
    pobiNumtoStr = pobi[i].toString();
    crongNumtoStr = crong[i].toString();
    sum = 0;
    multiply =1;

    for (let i = 0; i < 2; i++) {
      sum += parseInt(pobiNumtoStr[i]);
      multiply *= parseInt(pobiNumtoStr[i]);
      }
    pobiArr.push(sum, multiply);
    sum = 0;
    multiply =1;

    for (let i = 0; i < 2; i++) {
      sum += parseInt(crongNumtoStr[i]);
      multiply *= parseInt(crongNumtoStr[i]);
      }
    crongArr.push(sum, multiply);
  }
  console.log(pobiArr);
  console.log(crongArr);




  // const leftNumtoStr = pobi[0].toString();
  // let sum = 0;
  // let multiply = 1;

  // for (let i = 0; i < leftNumtoStr.length; i++) {
  //   sum += parseInt(leftNumtoStr[i]);
  //   multiply *= parseInt(leftNumtoStr[i]);
  // }

  // pobiArr.push(sum, multiply);

  // let rightNumtoStr = pobi[1].toString();
  // sum = 0;
  // multiply = 1;

  // for (let i = 0; i < rightNumtoStr.length; i++) {
  //   sum += parseInt(rightNumtoStr[i]);
  //   multiply *= parseInt(rightNumtoStr[i]);
  // }
  
  // pobiArr.push(sum, multiply);
  // console.log(pobiArr);


  return answer;
}

module.exports = problem1;

console.log(problem1([97, 98], [197, 198]));