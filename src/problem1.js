function problem1(pobi, crong) {
  var answer;

  function errorCheck(array) {
    for (let i of array) {
      if (0 >= i || i > 400) {
        return 1;
      }
    }

    if (array[0] % 2 === 0 || array[1] % 2 !== 0 || array[1] - array[0] !== 1) {
      return 1;
    }
  }

  function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }

  function productDigits(number) {
    let product = 1;
    while (number > 0) {
      product *= number % 10;
      number = Math.floor(number / 10);
    }
    return product;
  }

  function max(array) {
    let result;
    let tempArray = [];
    for (let i = 0; i < 2; i++) {
      tempArray[i] = sumDigits(array[i]);
    }
    for (let i = 0; i < 2; i++) {
      tempArray[i + 2] = productDigits(array[i]);
    }
    result = Math.max(...tempArray);
    return result;
  }

  if (max(pobi) > max(crong)) {
    answer = 1;
  } else if (max(pobi) < max(crong)) {
    answer = 2;
  } else if (max(pobi) === max(crong)) {
    answer = 0;
  }

  if (errorCheck(pobi)) {
    answer = -1;
  }
  if (errorCheck(crong)) {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
