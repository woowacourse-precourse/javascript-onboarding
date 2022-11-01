/**
 *
 * @param {number} number
 * @returns
 */

function problem3(number) {
  const list = {};
  let clap = 0;

  for (let i = 0; i <= 9; i++) {
    list[i] = i % 3 === 0 && i !== 0 ? 1 : 0;
    if (list[i] > 0) {
      clap += 1;
    }
    if (i === number) {
      return clap;
    }
  }

  for (let i = 10; i <= number; i++) {
    const includeClap = Math.floor(i % 10) % 3 === 0 && i % 10 > 0 ? 1 : 0;
    list[i] = list[Math.floor(i / 10)] + includeClap;
    clap += list[i];
  }
  return clap;
}

module.exports = problem3;

/**
 * 고민했던 흔적
 *
 *369 게임에서 법칙을 찾을 수 있지 않을까 하여 시도해본 방법이지만
찾았다고 생각한 방법이 실수가 있어 법칙을 찾지 못하고 완성 시키지
못했다.

10의 자리
3 * 7(30, 60, 90 외의 수) + 13 * 3(30, 60, 90의 박수 횟수)

100의 자리
10의 자리 박수 횟수 * 7 + 13 * 7 (10 * 2(자릿 수) + 3) * 3
식으로 시도하였으나 공식을 만드는데 실패했다.

또한 Dynamic Programming에서 memorization을 이용하면
풀 수 있지 않을까라는 생각을해서 시도해보았지만 제대로 이해하지 못
하고 사용하여 적용을 제대로 시키지 못하고 법칙을 찾지 못한 것에
문제가 있어 해결하지 못했다.
 */

// function attempt1(input, memo, floor, clap, multiply = null) {
//   if (input.length === 0) {
//     return clap;
//   }
//   if (multiply === null) {
//     multiply = 10 * floor + 3;
//   }

//   const value = memo.pop();

//   const threeValue = input[0][1] > 0 ? input[0][1] - 1 : 0;
//   clap += value * input[0][0] + multiply * threeValue;
//   const tenCount = value * 7 + multiply * 3;

//   memo.push(tenCount);
//   input.shift();

//   return ten(input, memo, floor + 1, clap, multiply * 3);
// }

// function attempt2(number, memo) {
//   let clap = 0;
//   const countNum = Math.floor(number / 10);
//   const divided = countNum.toString().split("").reverse();
//   const lastNum = number.toString().split("")[divided.length];

//   let needToCount = [];
//   for (let i = 1; i <= divided.length; i++) {
//     let count = 0;
//     let threeCount = 0;
//     for (let j = 0; j <= divided[i - 1]; j++) {
//       if (j % 3 === 0 && j !== 0) {
//         threeCount++;
//       } else {
//         count++;
//       }
//     }
//     needToCount.push([count, threeCount]);
//   }

//   if (countNum % 3 === 0) {
//     for (let i = 0; i <= lastNum; i++) {
//       if (i % 3 === 0) {
//         clap += 2;
//       } else {
//         clap += 1;
//       }
//     }
//   } else {
//     for (let i = 0; i <= lastNum; i++) {
//       if (i % 3 === 0) {
//         clap += 1;
//       }
//     }
//   }
// }
