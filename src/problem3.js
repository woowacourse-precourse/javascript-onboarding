function problem3(number) {
  let n = 1;
  let clap = 0;
  const a = "92";

  while (n <= number) {
    const numToString = n.toString();
    if (numToString.includes(3) || numToString.includes(6) || numToString.includes(9)) {
      for (let i = 0; i < numToString.length; i++) {
        if (numToString[i] === "3" || numToString[i] === "6" || numToString[i] === "9") {
          clap++;
        }
      }
    }
    n++;
  }
  return clap;
}

module.exports = problem3;

// const number = 49;

// function solution(number) {
//   const divid = number.toString().split("");
//   const length = divid.length - 1;
//   const divided = [];
//   for (let i = length; i >= 0; i--) {
//     const ten = Math.pow(10, i);
//     divided.push(divid[length - i] * ten);
//   }
//   PRINT(divided);

//   const Clap = (input, rootNum) => {
//     const frontNumber = input[0] / 10;
//     const length = input.length - 1;
//     let count = 0;

//     if (frontNumber % 3 === 0) {
//       input.forEach((val, i) => {
//         const tens = length - i;
//         if (tens === 0) {
//           for (let i = 1; i <= val; i++) {
//             if (i % 3 === 0) {
//               count += 2;
//             } else {
//               count++;
//             }
//           }
//         } else if (tens === 1) {
//           const frontNum = val / 10 / 3;
//           count += 3 * (2 * frontNum + 1) + 13 * (frontNum - 1) + 1;
//         }
//       });
//     } else {
//       input.forEach((val, i) => {
//         const tens = length - i;
//         if (tens === 0) {
//           for (let i = 1; i <= val; i++) {
//             if (i % 3 === 0) {
//               count += 2;
//             } else {
//               count++;
//             }
//           }
//         } else if (tens === 1) {
//           const frontNum = val / 10 / 3;
//           count += 3 * (number - Math.floor(frontNum)) + 13 * Math.floor(frontNum);
//         }
//       });
//     }
//     PRINT(count);

// let frontN;
// for (let i = 0; i < 4; i++) {
//   const number = input / Math.pow(10, i);
//   if (number < 10) {
//     length = i;
//     frontN = number;
//     break;
//   }
// }

// if (length === 0) {
//   if (input <= 5) {
//     return 1;
//   } else if (input >= 6 && input < 9) {
//     return 2;
//   } else if (input === 9) {
//     return 3;
//   }
// } else if (length === 1) {
//   const clapNum = number / 3;
//   return 3 * (number - Math.floor(clapNum)) + 13 * Math.floor(clapNum);
// } else if (length === 2) {
// }
//   };

//   Clap(divided, number);
// }

// PRINT(solution(number));

// let n = 1;
// let clap = 0;
// const a = "92";

// while (n <= number) {
//   const numToString = n.toString();
//   if (numToString.includes(3) || numToString.includes(6) || numToString.includes(9)) {
//     for (let i = 0; i < numToString.length; i++) {
//       if (numToString[i] === "3" || numToString[i] === "6" || numToString[i] === "9") {
//         clap++;
//       }
//     }
//   }
//   n++;
// }
// PRINT(clap)
