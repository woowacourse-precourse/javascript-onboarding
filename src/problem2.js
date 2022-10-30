// 중복 문자 제거 함수
function decryption(cryptogram) {
  let prev_step = '',
      one_step,
      prev_char,
      has_continuos;

  while (1) {
    one_step = [];
    prev_char = '';
    has_continuos = false;
    
    for (let char of cryptogram) {
      if (char === prev_char) {
        if (one_step.length == 1) one_step.pop();
        has_continuos = true;
      }
      else {
        if (has_continuos) {
          one_step.pop();
          has_continuos = false;
        }
        one_step.push(char); 
        prev_char = char;
      }
    }
    
    cryptogram = one_step.join('');
    if (!cryptogram || (prev_step && cryptogram == prev_step)) break;
    prev_step = cryptogram;
  }

  return cryptogram;
}

function problem2(cryptogram) {
  return decryption(cryptogram);
}

module.exports = problem2;
