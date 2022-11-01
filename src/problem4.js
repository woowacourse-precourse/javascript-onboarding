function problem4(word) {
  let answer = '';
  const upper_arr = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  const lower_arr = upper_arr.map(x => x.toLowerCase());
  const UPPER_CASE_NUM = 65;
  const LOWER_CASE_NUM = 97;

  const words = word.split('');
  for (let i = 0; i < words.length; i++) {
    const ascii = words[i].charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
      answer += upper_arr[ascii - UPPER_CASE_NUM];
    } else if (ascii >= 97 && ascii <= 122) {
      answer += lower_arr[ascii - LOWER_CASE_NUM];
    } else {
      answer += words[i];
    }
  }

  return answer;
}

module.exports = problem4;