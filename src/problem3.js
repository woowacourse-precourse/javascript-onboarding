function problem3(number) {
  let answer = 0;
  const number_arr = Array.from({ length: number }, (v, i) => i + 1).map(x => String(x));
  const set = new Set(['3', '6', '9']);

  for (let i = 0; i < number_arr.length; i++) {
    const num_str = number_arr[i].split('');
    for (let j = 0; j < num_str.length; j++) {
      if (set.has(num_str[j])) {
        answer++;
      }
    }
  }

  return answer;
}

module.exports = problem3;
