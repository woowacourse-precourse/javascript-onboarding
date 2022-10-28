function problem3(number) {
  let clapCount = 0;
  let numberRange = [];
  for (let i = 1; i <= number; i++) {
    numberRange[i] = String(i);
    let check = numberRange[i].split("");
    for (let j = 0; j < check.length; j++) {
      if (check[j].includes(3)) {
        clapCount++;
      }
      if (check[j].includes(6)) {
        clapCount++;
      }
      if (check[j].includes(9)) {
        clapCount++;
      }
    }
    console.log(check);
    console.log(clapCount);
  }
  return clapCount;
}
function testCode() {
  //problem3(13);
  problem3(33);
}
testCode();
module.exports = problem3;
