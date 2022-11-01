function problem1(pobi, crong) {
  let result;
  if (!left(pobi) || !left(crong)) {
    return -1;
  }
  if (!right(pobi) || !right(crong)) {
    return -1;
  }
  const pobiPage = Math.max(maxCal(pobi[0]), maxCal(pobi[1]));
  const crongPage = Math.max(maxCal(crong[0]), maxCal(crong[1]));

  if (pobiPage > crongPage) {
    result = 1;
  } else if (pobiPage < crongPage) {
    result = 2;
  } else {
    result = 0;
  }
  return result;
}

function sumCount(page) {
  let count = 0;
  do {
    count += page % 10;
    page = Math.floor(page / 10);
  } while (page > 0);
  return count;
}

function mulCount(page) {
  let count = 1;
  do {
    count *= page % 10;
    page = Math.floor(page / 10);
  } while (page > 0);
  return count;
}

function maxCal(page) {
  const sumValue = sumCount(page);
  const mulValue = mulCount(page);
  return Math.max(sumValue, mulValue);
}

function left(page) {
  if (page[0] === 1 || page[1] === 400) {
    return false;
  }
  return true;
}

function right(page) {
  if (page[1] - page[0] !== 1) {
    return false;
  }
  return true;
}

module.exports = problem1;

// function problem1(pobi, crong) {
//   page = validation(pobi, crong);
//   if (!page) {
//     return -1;
//   }

//   pobi_plus_score = sum(pobi);
//   pobi_mul_score = mul(pobi);

//   pobi_max_score = maxScore(pobi_plus_score, pobi_mul_score);

//   crong_plus_score = sum(crong);
//   crong_mul_score = mul(crong);
//   crong_max_score = maxScore(crong_plus_score, crong_mul_score);

//   if (pobi_max_score > crong_max_score) {
//     return 1;
//   } else if (pobi_max_score < crong_max_score) {
//     return 2;
//   } else if (pobi_max_score == crong_max_score) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

// //exception
// function validation(pobi, crong) {
//   let result = true;

//   if (
//     pobi[0] == null ||
//     crong[0] == null ||
//     pobi[1] == null ||
//     crong[1] == null
//   ) {
//     return false;
//   } else if (pobi[1] - pobi[0] != 1) {
//     return false;
//   } else if (crong[1] - crong[0] != 1) {
//     return false;
//   } else {
//     return result;
//   }
// }

// //adding function
// function sum(value) {
//   const left = value[0].toString().split("");
//   const right = value[1].toString().split("");
//   return maxScore(SumNumber(left), SumNumber(right));
// }

// //multiplying function
// function mul(value) {
//   const left = value[0].toString().split("");
//   const right = value[1].toString().split("");
//   return maxScore(MulNumber(left), MulNumber(right));
// }

// //maximized values
// function maxScore(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function SumNumber(value) {
//   result = 0;
//   for (let a of value) {
//     result += Number(a);
//   }
//   return result;
// }

// function MulNumber(value) {
//   result = 1;
//   for (let a of value) {
//     result *= Number(a);
//   }
//   return result;
// }

// const input = {
//   pobi: [
//     [97, 98],
//     [131, 132],
//     [99, 102],
//   ],
//   crong: [
//     [197, 198],
//     [211, 212],
//     [211, 212],
//   ],
// };
// for (let i = 0; i < input.pobi.length; i++) {
//   console.log(`#${i + 1} ${problem1(input.pobi[i], input.crong[i])}`);
// }

// module.exports = problem1;
