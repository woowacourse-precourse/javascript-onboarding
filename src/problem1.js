function problem1(pobi, crong) {
  // 예외처리
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  // 페이지 숫자 쪼개기
  const pageLeftSplit = page => (page[0] + "").split("");
  const pageRightSplit = page => (page[1] + "").split("");

  // 페이지 왼쪽, 오른쪽 쪼갠 값
  let pobiLeftPageNum = pageLeftSplit(pobi);
  let crongLeftPageNum = pageLeftSplit(crong);
  let pobiRightPageNum = pageRightSplit(pobi);
  let crongRightPageNum = pageRightSplit(crong);

  // 최대 값 계산기
  const maxValueFn = nums => {
    let multiAllValue = 1;
    let addAllValue = 0;

    // 더한 값
    const addNums = nums => {
      for (let i = 0; i < nums.length; i++) {
        addAllValue += parseInt(nums[i]);
      }
      return addAllValue;
    };

    // 곱한 값
    const multiNums = nums => {
      for (let i = 0; i < nums.length; i++) {
        multiAllValue *= parseInt(nums[i]);
      }
      return multiAllValue;
    };

    return Math.max(multiNums(nums), addNums(nums));
  };

  // 각 페이지 최대 값
  let pobiLeftMaxValue = maxValueFn(pobiLeftPageNum);
  let pobiRightMaxValue = maxValueFn(pobiRightPageNum);
  let crongLeftMaxValue = maxValueFn(crongLeftPageNum);
  let crongRightMaxValue = maxValueFn(crongRightPageNum);

  // 유저 점수
  let pobiScore = Math.max(pobiLeftMaxValue, pobiRightMaxValue);
  let crongScore = Math.max(crongLeftMaxValue, crongRightMaxValue);

  //  점수 비교하기
  if (pobiScore === crongScore) {
    return 0;
  } else if (pobiScore > crongScore) {
    return 1;
  } else if (pobiScore < crongScore) {
    return 2;
  }
}

module.exports = problem1;
