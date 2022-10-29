function problem4(word) {
  let answer;
  return answer;
}

function makeFrogDictionary(){
  let frog_dict = {};
  const a_ascii = 'a'.charCodeAt(0);
  const z_ascii = 'z'.charCodeAt(0);
  const A_ascii = 'A'.charCodeAt(0);
  const Z_ascii = 'Z'.charCodeAt(0);
  
  for (let i = 0; i<=25; i++) {
    frog_dict[String.fromCharCode(a_ascii+i)] = String.fromCharCode(z_ascii-i); // 소문자
    frog_dict[String.fromCharCode(A_ascii+i)] = String.fromCharCode(Z_ascii-i); // 대문자
  }
  
  return frog_dict;
}

module.exports = problem4;
