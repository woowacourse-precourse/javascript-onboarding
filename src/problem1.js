function problem1(pobi, crong) {
  const POBI_WIN = 1;
  const DRAW = 0;
  const CRONG_WIN = 2;
  const ERROR_VALUE = -1;

  try {
    // check numbers
    // console.log(`pobi input value : ${pobi}, crong input value : ${crong}`);
    // console.log(pobi[1] - pobi[0], crong[1] - crong[0]);

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
      // console.log(`try ${index} | pobi ${numbers}`);
      const add = numbers.reduce((pre, cur) => pre + cur);
      const product = numbers.reduce((pre, cur) => pre * cur, 1);
      // console.log(
      //   `try ${index} | add : ${add}, product: ${product}, isAddBigger : ${
      //     add > product
      //   }`
      // );
      pobiArr.push(add > product ? add : product);
    });

    const pobiMax = pobiArr[0] > pobiArr[1] ? pobiArr[0] : pobiArr[1];
    // console.log(`final | pobi max value : ${pobiMax}`);

    const crongArr = [];
    crong.forEach((value, index) => {
      let numbers = [];
      let number = value;
      while (number > 0) {
        numbers.push(number % 10);
        number = Math.floor(number / 10);
      }
      // console.log(`try ${index} | crong ${numbers}`);
      const add = numbers.reduce((pre, cur) => pre + cur);
      const product = numbers.reduce((pre, cur) => pre * cur, 1);
      // console.log(
      //   `try ${index} | add : ${add}, product: ${product}, isAddBigger : ${
      //     add > product
      //   }`
      // );
      crongArr.push(add > product ? add : product);
    });

    const crongMax = crongArr[0] > crongArr[1] ? crongArr[0] : crongArr[1];
    // console.log(`final | crong max value : ${crongMax}`);

    if (pobiMax > crongMax) return POBI_WIN;
    if (pobiMax === crongMax) return DRAW;
    if (pobiMax < crongMax) return CRONG_WIN;
  } catch (error) {
    // console.log(`error is ${error}`);
    return ERROR_VALUE;
  }
}

problem1([97, 98], [197, 198]);

module.exports = problem1;

/*
커밋 컨벤션 참고 : https://velog.io/@shin6403/Git-git-%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
*/
