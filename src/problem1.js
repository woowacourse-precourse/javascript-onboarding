function problem1(pobi, crong) {
  try {
    // check numbers
    console.log(`pobi input value : ${pobi}, crong input value : ${crong}`);
    console.log(pobi[1] - pobi[0], crong[1] - crong[0]);

    if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1)
      throw new Error("wrong inputs");

    // try 2. /와 % 연산자 이용해 분리
    const pobiArr = [];
    pobi.forEach((value, index) => {
      let numbers = [];
      let number = value;
      while (number > 0) {
        numbers.push(number % 10);
        number = Math.floor(number / 10);
      }
      console.log(`try ${index} | pobi ${numbers}`);
      const add = numbers.reduce((pre, cur) => pre + cur);
      const product = numbers.reduce((pre, cur) => pre * cur, 1);
      console.log(
        `try ${index} | add : ${add}, product: ${product}, isAddBigger : ${
          add > product
        }`
      );
      pobiArr.push(add > product ? add : product);
    });

    const pobiMax = pobiArr[0] > pobiArr[1] ? pobiArr[0] : pobiArr[1];
    console.log(`final | pobi max value : ${pobiMax}`);

    const crongArr = [];
    crong.forEach((value, index) => {
      let numbers = [];
      let number = value;
      while (number > 0) {
        numbers.push(number % 10);
        number = Math.floor(number / 10);
      }
      console.log(`try ${index} | crong ${numbers}`);
      const add = numbers.reduce((pre, cur) => pre + cur);
      const product = numbers.reduce((pre, cur) => pre * cur, 1);
      console.log(
        `try ${index} | add : ${add}, product: ${product}, isAddBigger : ${
          add > product
        }`
      );
      crongArr.push(add > product ? add : product);
    });

    const crongMax = crongArr[0] > crongArr[1] ? crongArr[0] : crongArr[1];
    console.log(`final | crong max value : ${crongMax}`);

    if (pobiMax > crongMax) return 1;
    if (pobiMax === crongMax) return 0;
    if (pobiMax < crongMax) return 2;
  } catch (error) {
    console.log(`error is ${error}`);
    return -1;
  }

  // try 1. split 이용해 분리
  // pobi.forEach((value, index) => {
  //   const add = value
  //     .toString()
  //     .split("")
  //     .ParseInt()
  //     .reduce((pre, cur) => pre + cur);
  //   const product = value.split("").reduce((pre, cur) => pre * cur);
  //   pobiResult.push(add);
  //   pobiResult.push(product);
  //   console.log(`${index} try | add: ${add}, product: ${product}`);
  // });
}

problem1([97, 98], [197, 198]);

module.exports = problem1;

/*
  describe("problem1", () => {
    test("case1", () => {
      expect(problem1([97, 98], [197, 198])).toEqual(0);
    });

    test("case2", () => {
      expect(problem1([131, 132], [211, 212])).toEqual(1);
    });

    test("case3", () => {
      expect(problem1([99, 102], [211, 212])).toEqual(-1);
    });
  });
*/
