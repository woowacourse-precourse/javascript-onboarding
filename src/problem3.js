function problem3(number) {
  let result = 0;

  for (let num = 1; num <= number; num++) {
    let stringNum = String(num)

    for (let element of stringNum) {
      if (element != "0" && Number(element) % 3 === 0) {
        result += 1
      }
    }
  }

  return result;
}

module.exports = problem3;
