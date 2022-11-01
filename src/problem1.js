function problem1(pobi, crong) {
  const verse = () => {
    const toPobiValue = (pobi) => {
      if (pobi[1] - pobi[0] !== 1) {
        return null;
      } else {
        const firstNum = pobi[1];
        const firstStr = firstNum.toString().split("");

        let sum = 0;

        for (let i = 0; i < firstStr.length; i++) {
          sum = sum + parseInt(firstStr[i]);
        }

        let multiply = 1;

        for (let j = 0; j < firstStr.length; j++) {
          multiply = multiply * parseInt(firstStr[j]);
        }

        if (sum > multiply) {
          return sum;
        } else {
          return multiply;
        }
      }
    };

    const toCrongValue = (crong) => {
      if (crong[1] - crong[0] !== 1) {
        return null;
      } else {
        const firstNum = crong[1];
        const firstStr = firstNum.toString().split("");

        let sum = 0;

        for (let i = 0; i < firstStr.length; i++) {
          sum = sum + parseInt(firstStr[i]);
        }

        let multiply = 1;

        for (let j = 0; j < firstStr.length; j++) {
          multiply = multiply * parseInt(firstStr[j]);
        }
        if (sum > multiply) {
          return sum;
        } else {
          return multiply;
        }
      }
    };

    let a = toPobiValue(pobi);
    let b = toCrongValue(crong);

    if ((a == null) | (b == null)) {
      return -1;
    } else if (a < b) {
      return 2;
    } else if (a > b) {
      return 1;
    } else if ((a = b)) {
      return 0;
    }
  };
  var answer = verse();
  return answer;
}

module.exports = problem1;
