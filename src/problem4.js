// 엄마 말씀을 반대로 변환하는 기능(딕셔너리 활용)
function problem4(word) {
  let alphabet = {},
      alpha_a = 65,
      alpha_z = 90, 
      frog_word = '',
      alpha_upper, alpha_lower;

  for (let i = 0; i <= 25; i++) {
    alphabet[String.fromCharCode(alpha_a++)] = String.fromCharCode(alpha_z--);
  }
  
  for (let char of word) {
    alpha_upper = alphabet[char];
    alpha_lower = alphabet[char.toUpperCase()];

    if (alpha_upper) frog_word += alpha_upper;
    else if (alpha_lower) frog_word += alpha_lower.toLowerCase();
    else frog_word += char;
  }
  return frog_word;
}

module.exports = problem4;
