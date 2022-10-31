// 중복 문자 제거 함수
function decryption(cryptogram) {
  let prev_step = '',
      current_step,
      prev_char;

  while (1) {
    current_step = [];
    prev_char = '';
    
    for (let char of cryptogram) {
      if (char === prev_char && char === current_step[current_step.length - 1]) current_step.pop();
      if (char !== prev_char) {
        current_step.push(char); 
        prev_char = char;
      }
    }
    
    cryptogram = current_step.join('');
    if (!cryptogram || (cryptogram === prev_step)) break;
    prev_step = cryptogram;
  }

  return cryptogram;
}

function problem2(cryptogram) {
  return decryption(cryptogram);
}

module.exports = problem2;
