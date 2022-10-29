function problem4(word) {
  let answer = '';
  let frog_dict = makeFrogDictionary();
  const isAlpha = str => /^[a-zA-z]$/.test(str);

  for (let i=0 ; i<word.length; i++){
    if (isAlpha(word[i])){
      answer += frog_dict[word[i]];
      continue;
    }
    answer += word[i];
  }
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
