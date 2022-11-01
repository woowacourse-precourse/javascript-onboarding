/**
 *
 * @param {number} pobiInput
 * @param {number} crongInput
 * @return
 */

function problem1(pobiInput, crongInput) {
  if (pobiInput[0] + 1 !== pobiInput[1]) {
    return -1;
  } else if (crongInput[0] + 1 !== crongInput[1]) {
    return -1;
  }
  const pobi = dividePage(pobiInput);
  const crong = dividePage(crongInput);

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

/**
 *
 * @param {number} input
 * @returns 각 페이지를 십의 단위로 나눈 값
 */

function dividePage(input) {
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

/**
 * 각각의 값이 최대가 될 수 있는 경우를 조건으로 나누어서 진행하였습니다.
 * 페이지 숫자에 0이 포함되어 있다면 그 수는 덧셈이 최댓값이 될 것이고
 * 다음 페이지가 10의 단위로 끝나는 페이지의 경우는 그 반대 페이지의 값이
 * 최댓값이 된다는 경우로 나누어서 진행하였습니다.
 */
