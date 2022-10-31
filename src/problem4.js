function getAlphabetDict() {
  let alphabets = {};

  for (let alpha_a = 65, alpha_z = 90; alpha_a <= 90, alpha_z >= 65; alpha_a++, alpha_z--) {
    alphabets[String.fromCharCode(alpha_a)] = String.fromCharCode(alpha_z);
  }

  return alphabets;
}

function convertWord(word, alphabets) {
  let converted_word = '',
      uppercase, 
      lowercase;
  
  for (let char of word) {
    uppercase = alphabets[char];
    lowercase = alphabets[char.toUpperCase()];

    if (uppercase) converted_word += uppercase;
    else if (lowercase) converted_word += lowercase.toLowerCase();
    else converted_word += char;
  }

  return converted_word;
}

function problem4(word) {
  const alphabets = getAlphabetDict();

  return convertWord(word, alphabets);
}

module.exports = problem4;
