function problem1(pobi, crong) {
  // 페이지 숫자 쪼개기
  const pageLeftSplit = page => (page[0] + "").split("");
  const pageRightSplit = page => (page[1] + "").split("");

  // 페이지 왼쪽, 오른쪽 쪼갠 값
  let pobiLeftPageNum = pageLeftSplit(pobi);
  let crongLeftPageNum = pageLeftSplit(crong);
  let pobiRightPageNum = pageRightSplit(pobi);
  let crongRightPageNum = pageRightSplit(crong);

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

    // 페이지 최대 값
    return Math.max(multiNums(nums), addNums(nums));
  };
}

module.exports = problem1;
