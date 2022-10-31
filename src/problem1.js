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
  let plus, multiple;

  for (let i = 0; i < 2; i++) {
    if (pobi[i].includes(0)) {
      maxPobi.push(pobi[i].reduce((pv, cv) => pv + cv));
    } else {
      (plus = pobi[i].reduce((pv, cv) => pv + cv)), (multiple = pobi[i].reduce((pv, cv) => pv * cv));
      maxPobi.push(plus > multiple ? plus : multiple);
    }

    if (crong[i].includes(0)) {
      maxCrong.push(crong[i].reduce((pv, cv) => pv + cv));
    } else {
      plus = crong[i].reduce((pv, cv) => pv + cv);
      multiple = crong[i].reduce((pv, cv) => pv * cv);

      maxCrong.push(plus > multiple ? plus : multiple);
    }
  }

  maxPobi = Math.max(...maxPobi);
  maxCrong = Math.max(...maxCrong);

  if (maxPobi > maxCrong) {
    return 1;
  } else if (maxPobi === maxCrong) {
    return 0;
  } else if (maxPobi < maxCrong) {
    return 2;
  }
}

function divide(input) {
  const divided = [];
  for (let i = 0; i < 2; i++) {
    let page = input[i].toString().split("");
    for (let j = 0; j < page.length; j++) {
      page[j] = Number(page[j]);
    }
    divided.push(page);
  }
  return divided;
}

module.exports = problem1;
