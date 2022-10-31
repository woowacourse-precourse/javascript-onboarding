function problem1(pobi, crong) {
  var [pLeft, pRight] = pobi;
  var [cLeft, cRight] = crong;
  if (
    pRight - pLeft !== 1 ||
    cRight - cLeft !== 1 ||
    pLeft === 1 ||
    cRight === 400 ||
    pobi.length !== 2 ||
    crong.length !== 2
  )
    return -1;

  function SliceNumMakeArr(num) {
    var numArr = [];
    do {
      var q = parseInt(num % 10);
      numArr.push(q);
      num = num / 10;
    } while (num > 1);
    return numArr;
  }
  pLeft = SliceNumMakeArr(pLeft);
  pRight = SliceNumMakeArr(pRight);
  cLeft = SliceNumMakeArr(cLeft);
  cRight = SliceNumMakeArr(cRight);

  function sumArr(arr) {
    return arr.reduce((a, b) => a + b);
  }
  function mulArr(arr) {
    return arr.reduce((a, b) => a * b);
  }

  var pobiMax = Math.max(
    sumArr(pLeft),
    sumArr(pRight),
    mulArr(pLeft),
    mulArr(pRight)
  );
  var crongMax = Math.max(
    sumArr(cLeft),
    sumArr(cRight),
    mulArr(cLeft),
    mulArr(cRight)
  );

  if (pobiMax === crongMax) return 0;
  else if (pobiMax > crongMax) return 1;
  else return 2;
}

module.exports = problem1;
