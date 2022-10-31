function problem2(cryptogram) {
  var answer;
  let delete_list;
  while (true) {
    delete_list = check(cryptogram);
    if (delete_list.length === 0) break;
    cryptogram = delete_word(cryptogram, delete_list);
  }
  answer = cryptogram;
  return answer;
}

function check(word) {
  const delete_list = [];
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      delete_list.push(i);
      if (delete_list.includes(i - 1)) continue;
      else delete_list.push(i - 1);
    }
  }
  return delete_list.sort((a, b) => b - a);
}

function delete_word(word, delete_list) {
  for (let i = 0; i < delete_list.length; i++) {
    let index = delete_list[i];
    word = word.substring(0, index) + word.substring(index + 1);
  }
  return word;
}
module.exports = problem2;
