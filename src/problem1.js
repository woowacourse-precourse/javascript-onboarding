// 지저분한 코드를 정리하고 간략하게 작성할 수 있는 코드들은 간략하게 수정하여
// 코드를 좀 더 깔끔하게 만들었습니다.

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

// function before(pobiInput, crongInput) {
//   if (pobiInput[0] + 1 !== pobiInput[1]) {
//     return -1;
//   } else if (crongInput[0] + 1 !== crongInput[1]) {
//     return -1;
//   }

//   const pobi = divide(pobiInput);
//   const crong = divide(crongInput);

//   let maxPobi = [];
//   let maxCrong = [];

//   for (let i = 0; i < 2; i++) {
//     if (pobi[i].includes(0)) {
//       maxPobi.push(Plus(pobi[i]));
//     } else {
//       let plus = Plus(pobi[i]);
//       let multiple = Multiple(pobi[i]);
//       maxPobi.push(Math.max(plus, multiple));
//     }
//     if (crong[i].includes(0)) {
//       maxCrong.push(Plus(crong[i]));
//     } else {
//       let plus = Plus(crong[i]);
//       let multiple = Multiple(crong[i]);
//       maxCrong.push(Math.max(plus, multiple));
//     }
//   }

//   const pobiNum = Math.max(...maxPobi);
//   const crongNum = Math.max(...maxCrong);

//   if (pobiNum > crongNum) {
//     return 1;
//   } else if (pobiNum < crongNum) {
//     return 2;
//   } else if (pobiNum === crongNum) {
//     return 0;
//   }
// }

// function Multiple(input) {
//   let sum = 1;
//   for (let i = 0; i < input.length; i++) {
//     sum *= input[i];
//   }
//   return sum;
// }

// function Plus(input) {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     sum += input[i];
//   }
//   return sum;
// }

// function divide(input) {
//   const divided = [];
//   for (let i = 0; i < 2; i++) {
//     const pages = [];
//     const page = input[i].toString().split("");
//     for (let j = 0; j < page.length; j++) {
//       pages.push(parseInt(page[j], 10));
//     }
//     divided.push(pages);
//   }
//   return divided;
// }

module.exports = problem1;
