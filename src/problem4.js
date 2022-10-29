/*
아스키코드 번호를 이용해 매핑용 배열을 만들어서 해결
*/

function problem4(word) {
  let answer = [];

  const code_A = 'A'.charCodeAt(0);
  const code_Z = 'Z'.charCodeAt(0);
  const code_a = 'a'.charCodeAt(0);
  const code_z = 'z'.charCodeAt(0);

  const frog_uppercase = new Array(26);
  const frog_lowercase = new Array(26);
  
  // mapping array 만들기
  for (let i=0; i<26; i++)
  {
    frog_uppercase[i] = String.fromCharCode(code_Z - i);
    frog_lowercase[i] = String.fromCharCode(code_z - i);
  }

  // 변환
  for (let i=0; i<word.length; i++)
  {
    code = word.charCodeAt(i);
    if (code_A <= code && code <= code_Z)
      answer.push(frog_uppercase[code - code_A]);
    else if (code_a <= code && code <= code_z)
      answer.push(frog_lowercase[code - code_a]);
    else
      answer.push(word[i]);
  }
  answer = answer.join('');

  return answer;
}

module.exports = problem4;
