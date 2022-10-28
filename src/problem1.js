function problem1(pobiInput, crongInput) {
  if (pobiInput[0] + 1 !== pobiInput[1]) {
    return -1;
  } else if (crongInput[0] + 1 !== crongInput[1]) {
    return -1;
  }

  const pobi = divide(pobiInput);
  const crong = divide(crongInput);

  let maxPobi = [];
  let maxCrong = [];

  for (let i = 0; i < 2; i++) {
    if (pobi[i].includes(0)) {
      maxPobi.push(Plus(pobi[i]));
    } else {
      let plus = Plus(pobi[i]);
      let multiple = Multiple(pobi[i]);
      maxPobi.push(Math.max(plus, multiple));
    }
    if (crong[i].includes(0)) {
      maxCrong.push(Plus(crong[i]));
    } else {
      let plus = Plus(crong[i]);
      let multiple = Multiple(crong[i]);
      maxCrong.push(Math.max(plus, multiple));
    }
  }

  const pobiNum = Math.max(...maxPobi);
  const crongNum = Math.max(...maxCrong);

  if (pobiNum > crongNum) {
    return 1;
  } else if (pobiNum < crongNum) {
    return 2;
  } else if (pobiNum === crongNum) {
    return 0;
  }
}

function Multiple(input) {
  let sum = 1;
  for (let i = 0; i < input.length; i++) {
    sum *= input[i];
  }
  return sum;
}

function Plus(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}

function divide(input) {
  const divided = [];
  for (let i = 0; i < 2; i++) {
    const pages = [];
    const page = input[i].toString().split("");
    for (let j = 0; j < page.length; j++) {
      pages.push(parseInt(page[j], 10));
    }
    divided.push(pages);
  }
  return divided;
}

module.exports = problem1;
