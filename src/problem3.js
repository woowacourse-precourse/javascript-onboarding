function problem3(number) {
  // Initializaiton of all possible numbers in array
  const arr = Array(number)
    .fill()
    .map((_, i) => String(i + 1));

  // RegEx pattern for checking if each number includes 3, 6 or 9
  const pattern = /[369]/g;
  let answer = 0;

  // Check how many 3, 6, 9 do all numbers contain
  for (const i of arr) {
    const count = i.match(pattern) !== null ? i.match(pattern).length : 0;
    answer += count;
  }

  return answer;
}

module.exports = problem3;
