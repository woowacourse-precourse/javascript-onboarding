function problem4(word) {
  let answer;
  let arr = [];
  //TODO 대소문자 구분

  let mom = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  let reverse = [...mom].reverse();

  for (let text of word) {
    let count = 0;
    let upperText = text.toUpperCase();
    for (let moms of mom) {
      count = count+1
      if(upperText === moms){
        if(text != moms) {
          text = reverse[count - 1].toLowerCase();
        } else {
          text = reverse[count - 1];
        }
        break;
      }
    }
    arr.push(text);
  }

  answer = arr.join('');
  return answer;
}

console.log(problem4("I love you"))
module.exports = problem4;
