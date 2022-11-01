function problem2(cryptogram) {
  var answer;
  let i = 0;
  answer = [...cryptogram];

  loop1:
  while (i < answer.length){
    if (answer[i] == answer[i+1]){
      answer.splice(i,2);
      i = 0;
      continue loop1;
      }
    i++;
  };

  return answer.join("");
}

module.exports = problem2;
