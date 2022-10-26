function problem1(pobi, crong) {
  const check = (arr) => {
    if (arr.length > 2) return false;
    if (arr[0] < 1) return false;
    if (arr[1] > 400) return false;
    if (arr[0] + 1 !== arr[1]) return false;
    if (arr[0] % 2 !== 1) return false;
    if (arr[0] % 2 !== 0) return false;
    return true;
  };

  if (!check(pobi) || !check(crong)) return -1;
  else {
    let pobiResultArr = [];
    let crongResultArr = [];

    pobi.forEach(element => {
      let sum = 0;
      let mul = 1;
      while (element) {
        sum += element % 10;
        mul *= element % 10;
        element = Math.floor(element / 10);
      }
      pobiResultArr.push(sum, mul);
    });

    crong.forEach(element => {
      let sum = 0;
      let mul = 1;
      while (element) {
        sum += element % 10;
        mul *= element % 10;
        element = Math.floor(element / 10);
      }
      crongResultArr.push(sum, mul);
    });

    if (Math.max(...pobiResultArr) > Math.max(...crongResultArr)) return 1;
    else if (Math.max(...pobiResultArr) > Math.max(...crongResultArr)) return 2;
    else return 0;
  }
}

module.exports = problem1;
