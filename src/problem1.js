function problem1(pobi, crong) {
  if (pobi.legth === 2 || crong.legth === 2) return -1;
  if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]) return -1;
  if (pobi[0] % 2 == 0 || crong[0] % 2 == 0) return -1;
  if (pobi[0] === 1 || crong[1] === 400) return -1;

  let pobiLeft_arr = String(pobi[0]).split("");
  let pobiRight_arr = String(pobi[1]).split("");
  let crongLeft_arr = String(crong[0]).split("");
  let crongRight_arr = String(crong[1]).split("");

  function pageNum_sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.legth; i++) {
      sum += arr[i];
    }
    return sum;
  }

  function pageNum_mul(arr) {
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
      mul *= arr[i];
    }
    return mul;
  }

  let pobiMax = Math.max(
    pageNum_sum(pobiLeft_arr),
    pageNum_mul(pobiLeft_arr),
    pageNum_sum(pobiRight_arr),
    pageNum_mul(pobiRight_arr)
  );
  let crongMax = Math.max(
    pageNum_sum(crongLeft_arr),
    pageNum_mul(crongLeft_arr),
    pageNum_sum(crongRight_arr),
    pageNum_mul(crongRight_arr)
  );

  if (pobiMax > crongMax) {
    answer = 1;
  } else if (pobiMax < crongMax) {
    answer = 2;
  } else if (pobiMax == crongMax) {
    answer = 0;
  } else {
    answer = -1;
  }

  return answer;
}

module.exports = problem1;
