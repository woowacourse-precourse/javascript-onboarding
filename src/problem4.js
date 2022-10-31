function problem4(word) {
  let answer = '';

  for (w of word){
    if (w == " "){
      answer += " ";
      continue;
    }
    num = w.toUpperCase().charCodeAt(0) - 65;
    if (w === w.toLowerCase()){
      answer += frog_dict.split("").reverse().join("")[num].toLowerCase();
    } else {
      answer += frog_dict.split("").reverse().join("")[num];
    }
  }

  return answer;
}

frog_dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(problem4("I love you"));

module.exports = problem4;
