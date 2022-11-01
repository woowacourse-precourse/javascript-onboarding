function problem2(cryptogram) {
  let words = [...cryptogram]

  let check = true;
  while (check) {
    check = false; 
    for (let i = 0; i < words.length; i++) {
      if (words[i] == words[i + 1]) {
        words.splice(i, 2)
        check = true;
      }
    } 
  }

  return words.join('');
}

module.exports = problem2;
