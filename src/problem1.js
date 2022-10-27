function problem1(pobi, crong) {
  const pageNumber = new Array(401);
  pageNumber[0] = 0;
  const pobiRecord = getRecord(pobi);
  const crongRecord = getRecord(crong);

  if (pobiRecord > crongRecord) {
    return 1;
  } else if (pobiRecord == crongRecord) {
    return 0;
  } else if (pobiRecord < crongRecord) {
    return 2;
  }
}

function getRecord(user) {}

// function testCode() {
//   let counter = 0;
//   let pobiArray;
//   for (let i = 0; i < 400; i++) {
//     console.log(Math.floor(Math.random() * (399 - 2) + 2));
//     counter++;
//   }
// }
testCode();
problem1();

module.exports = problem1;
