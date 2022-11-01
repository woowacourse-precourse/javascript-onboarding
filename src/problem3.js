function problem3(number) {
  let answer = 0;
  const nums = { 3: true, 6: true, 9: true };
  for (let i = 1; i <= number; i++) {
    let strNum = String(i);
    for (let ch of strNum) {
      if (nums[ch] == true) answer++;
    }
  }
  return answer;
}

module.exports = problem3;
