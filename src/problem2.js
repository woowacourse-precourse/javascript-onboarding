// 중복 문자 제거 함수
function decryption(cryptogram) {
  let result = [], 
      prev = '';

  for (let chr of cryptogram) {
    if (result.length === 0) result.push(chr); 
    else if (chr === result.at(-1)) prev = result.pop();
    else if (chr === prev) continue;
    else result.push(chr);
  }

  return result.join('');
}

function problem2(cryptogram) {
  return decryption(cryptogram);
}

module.exports = problem2;
