function problem1(pobi, crong) {
  let page = validation(pobi, crong); //예외처리
  if (!page) {
    return -1;
  }
  let pobiPageSum = sum(pobi);
  // console.log("pobi Mix Score Sum : ", pobiPageSum);
  let crongPageSum = sum(crong);
  // console.log("crong Mix Score Sum : ", crongPageSum);

  let pobiPageMul = mul(pobi);
  // console.log("pobi Mix Score Mul : ", pobiPageMul);
  let crongPageMul = mul(crong);
  // console.log("crong Mix Score Mul", crongPageMul);

  let pobi_max_score = mixScore(pobiPageSum, pobiPageMul);
  // console.log("pobi_max_score : ", pobi_max_score);
  let crong_max_score = mixScore(crongPageSum, crongPageMul);
  // console.log("crong_max_score : ", crong_max_score);

  if (pobi_max_score > crong_max_score) {
    //포비승
    return 1;
  } else if (pobi_max_score < crong_max_score) {
    //크롱승
    return 2;
  } else if ((pobi_max_score = crong_max_score)) {
    //무승부
    return 0;
  }
}
//예외처리 함수
function validation(pobi, crong) {
  let result = true;

  // [null,1],[400,null]
  if (
    pobi[0] == null ||
    crong[0] == null ||
    pobi[1] == null ||
    crong[1] == null
  ) {
    return false;
  } else if (1 != pobi[1] - pobi[0]) {
    return false;
  } else if (1 != crong[1] - crong[0]) {
    return false;
  } else {
    return result;
  }
}
// 덧셈함수
function sum(value) {
  let leftSplit = value[0].toString().split("");
  let rightSplit = value[1].toString().split("");

  return mixScore(SumValue(leftSplit), SumValue(rightSplit));
}
//곱셈함수
function mul(value) {
  let leftSplit = value[0].toString().split("");
  let rightSplit = value[1].toString().split("");
  return mixScore(MulValue(leftSplit), MulValue(rightSplit));
}
function mixScore(a, b) {
  return a > b ? a : b;
}
function SumValue(value) {
  result = 0;
  for (let a of value) {
    result += Number(a);
  }
  return result;
}
function MulValue(value) {
  result = 1;
  for (let a of value) {
    result *= Number(a);
  }
  return result;
}
let input = {
  pobi: [
    [97, 98],
    [131, 132],
    [99, 102],
  ],
  crong: [
    [197, 198],
    [211, 212],
    [211, 212],
  ],
};
for (let i = 0; i < input.pobi.length; i++) {
  console.log(`#${i + 1} ${problem1(input.pobi[i], input.crong[i])}`);
}
// problem1(pobi, crong);

module.exports = problem1;
// class Solution {
//   public int solution(int[] pobi, int[] crong) {
//       boolean page = validation(pobi, crong);//책 예외상황 체크
//       if (!page) {
//           return -1;
//           //System.out.println("-1");
//       }
//       //포비점수내기
//       int pobi_sum_score = sum(pobi);
//       int pobi_mul_score = mul(pobi);
//       int pobi_max_score = maxScore(pobi_sum_score, pobi_mul_score);
//       //크롱점수내기
//       int crong_sum_score = sum(crong);
//       int crong_mul_score = mul(crong);
//       int crong_max_score = maxScore(crong_sum_score, crong_mul_score);
//       //점수리턴
//       if (pobi_max_score > crong_max_score) {
//           return 1;
//           //System.out.println("1");
//       } else if (pobi_max_score < crong_max_score) {
//           return 2;
//           //System.out.println("2");
//       } else if (pobi_max_score == crong_max_score) {
//           return 0;
//           //System.out.println("0");
//       }else{
//           return -1;
//           //System.out.println("-1");
//       }
//   }
//   /**
//    * 점수 합산
//    * @param value 배열
//    * @return
//    */
//   static private int sum(int[] value) {

//       int val_1 = 0;
//       int val_2 = 0;

//       String[] array1 = String.valueOf(value[0]).split("");
//       for (String val : array1) {
//           val_1 = val_1 + Integer.valueOf(val);
//       }

//       String[] array2 = String.valueOf(value[1]).split("");
//       for (String val : array2) {
//           val_2 = val_2 + Integer.valueOf(val);
//       }

//         return maxScore(val_1, val_2);
//   }

//   /**
//    * 곱하기
//    * @param value
//    * @return
//    */
//   static private int mul(int value[]) {

//       int val_1 = 1;
//       int val_2 = 1;

//       String[] array1 = String.valueOf(value[0]).split("");
//       for (String val : array1) {
//           val_1 = val_1 * Integer.valueOf(val);
//       }

//       String[] array2 = String.valueOf(value[1]).split("");
//       for (String val : array2) {
//           val_2 = val_2 * Integer.valueOf(val);
//       }

//       return maxScore(val_1, val_2);

//   }

//   /**
//    * 최고점수 출력
//    * @param a
//    * @param b
//    * @return
//    */
//   static private int maxScore(int a, int b) {
//       if (a > b) {
//           return a;
//       } else {
//           return b;
//       }
//   }

//   /**
//    * 예외상황 체크 - 배열에 1차이가 나야한다
//    * @param pobi
//    * @param crong
//    * @return
//    */
//   static private boolean validation(int[] pobi, int[] crong) {

//       boolean result = true;

//       if (1 != Math.abs(pobi[0] - pobi[1])) {
//           return false;
//       } else if (1 != Math.abs(crong[0] - crong[1])) {
//           return false;
//       } else {
//           return result;
//       }

//   }
// }
