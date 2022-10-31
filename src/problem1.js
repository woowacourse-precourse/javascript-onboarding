function problem1(pobi, crong) {
  var answer;
  let a = pobi;
  let b = crong;
  let sum = 0;
  let gop = 1;
  let num = 0;

  let testa1 = 0;
  let testa2 = 0;
  let testb1 = 0;
  let testb2 = 0;
  let lasta = 0;
  let lastb = 0;

  if (a[0] + 1 !== a[1] || b[0] + 1 !== b[1]) {
    return -1
  } else {
    for (let i = 0; i < a.length; i++) {
      num = a[i]
      while (num > 0) {
        if (num < 1 && a[i]) {
          testa1 = gop > sum && a[i] === a[0] ? gop : sum;
          testa2 = gop > sum && a[i] === a[1] ? gop : sum;
          break;
        }
        sum += Math.floor(num) % 10
        gop *= Math.floor(num) % 10
        num /= 10;
      }
      if (i === 1) {
        lasta = testa1 > testa2 ? testa1 : testa2
      }
      sum = 0;
      gop = 1;
    }

    for (let i = 0; i < b.length; i++) {
      num = b[i]
      while (num > 0) {
        if (num < 1 && b[i]) {
          testb1 = gop > sum ? gop : sum;
          testb2 = gop > sum ? gop : sum;
          break;
        }
        sum += Math.floor(num) % 10
        gop *= Math.floor(num) % 10
        num /= 10;
      }
      if (i === 1) {
        lastb = testb1 > testb2 ? testb1 : testb2
      }
      sum = 0;
      gop = 1;
    }
  }

  if (lasta > lastb) {
    answer = 1;
  } else if (lasta < lastb) {
    answer = 2
  } else if (lasta === lastb) {
    answer = 0
  }
  return answer;
}

module.exports = problem1;
