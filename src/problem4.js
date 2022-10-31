function problem4(word) {
  let answer = '';

  for (let char of word) {
    const charCode = reverseCharCode(char)
    if (charCode !== -1) answer += String.fromCharCode(charCode)
    else answer += char
  } 
  return answer;
}
function reverseCharCode(char) {  
  let res = -1
  const UPPER_START = 65, UPPER_END = 90, LOWER_START = 97, LOWER_END = 122
  const temp = char.charCodeAt(0)

  if (temp >= LOWER_START && temp <= LOWER_END) res = LOWER_END - temp + LOWER_START
  else if (temp >= UPPER_START && temp <= UPPER_END) res = UPPER_END - temp + UPPER_START
  
  return res
}

module.exports = problem4;

// 0 ~ 25
// 0 = 25
// 1 = 24
