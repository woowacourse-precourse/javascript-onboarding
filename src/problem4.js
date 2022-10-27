// dictionary = "ABCDEFGHIJKLM NOPQRSTUVWXYZ";
// A = 0, B = 1, C = 2, D = 3, E = 4, F = 5,
// G = 6, H = 7, I = 8, J = 9, K = 10, L = 11, M = 12,
//  N = 13, O = 14, P = 15, Q = 16, R = 17, S = 18, T = 19,
// U = 20, V = 21, W = 22, X = 23, Y = 24, Z = 25

// 25 - (Z  ) = 0  a
// 25 - (L ) = 14 o

function problem4(word) {
  let Dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let dictionary = Dictionary.toLowerCase();
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (Dictionary.includes(word[i])) {
      // 25로 빼주고 그 인덱스 값의 밸류값을 찾아줌
      result.push(Dictionary.charAt(25 - Dictionary.indexOf(word[i])));
    } else if (dictionary.includes(word[i])) {
      result.push(dictionary.charAt(25 - dictionary.indexOf(word[i])));
    } else {
      result.push(" ");
    }
  }
  return result.join("");
}

module.exports = problem4;

/*
1. word 값이 들어오면 치환할수 있게 변환
2. 소문자면 소문자, 대문자면 대문자
3. 빈칸은 빈칸에
*/
