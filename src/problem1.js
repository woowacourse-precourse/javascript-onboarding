function problem1(pobi, crong) {
  let answer;

  function excep(arr) {
    if(arr[1] - arr[0] !== 1) {return 0}
    if(arr[0] ===1 || arr[1] === 400) {return 0}
    return 1;
  }

  function calc(number) {
    const numStr = number.toString();
    let sum = 0, mul = 1;

    for (let token of numStr) {
      let numInt = parseInt(token);
      sum = sum + numInt;
      mul = mul * numInt;
    }

    return sum >= mul ? sum : mul;
  }

  if(!excep(pobi) || !excep(crong)) {
    answer = -1;
    return answer;
  }

  const pobiMax = Math.max(calc(pobi[0]),calc(pobi[1]));
  const crongMax = Math.max(calc(crong[0]),calc(crong[1]));

  answer = pobiMax > crongMax ? 1 : (pobiMax === crongMax ? 0 : 2)

  return answer;
}



console.log(problem1([97, 98], [197, 198]))

module.exports = problem1;
