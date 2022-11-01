function problem4(word) {
  var answer ='';
  const big_corVal = 64;
  const small_corVal = 96;
  const func_num = 27;
  let arr_word = [];
  let arr_word_ascii = [];
  
  for(let i = 0; i < word.length; i++) {
    if(word.charCodeAt([i])>=65 &&word.charCodeAt([i])<=90) {
      arr_word_ascii[i] = func_num-(word.charCodeAt([i])-big_corVal);
    } else if(word.charCodeAt([i])>=97 &&word.charCodeAt([i])<=122) {
      arr_word_ascii[i] = func_num-(word.charCodeAt([i])-small_corVal);
    } else {
      arr_word_ascii[i] = word.charCodeAt([i]);
    }
  }

  for(let i = 0; i < arr_word_ascii.length; i++){
    if(word.charCodeAt([i])>=65 &&word.charCodeAt([i])<=90) {
      arr_word[i] = String.fromCharCode(arr_word_ascii[i]+big_corVal);
    } else if (word.charCodeAt([i])>=97 &&word.charCodeAt([i])<=122){
      arr_word[i] = String.fromCharCode(arr_word_ascii[i]+small_corVal);
    } else {
      arr_word[i] = String.fromCharCode(arr_word_ascii[i]);
    }
  }

  answer = arr_word.join('');
  return answer;
}

module.exports = problem4;
