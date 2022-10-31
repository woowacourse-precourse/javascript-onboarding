function problem4(word) {
  var answer;
  answer = flip_word(word);
  return answer;
}

function flip_big_alp(alp) {
  let flip;
  alp = alp.charCodeAt();
  flip = "A".charCodeAt(0) + "Z".charCodeAt(0) - alp;
  flip = String.fromCharCode(flip);
  return flip;
}

function flip_small_alp(alp) {
  let flip;
  alp = alp.charCodeAt();
  flip = "a".charCodeAt(0) + "z".charCodeAt(0) - alp;
  flip = String.fromCharCode(flip);
  return flip;
}

function flip_word(word) {
  let ans = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] == " ") ans += " ";
    else if (word[i] >= "a" && word[i] <= "z") ans += flip_small_alp(word[i]);
    else if (word[i] >= "A" && word[i] <= "Z") ans += flip_big_alp(word[i]);
    else ans += word[i];
  }
  return ans;
}
module.exports = problem4;

//A와 Z의 아스키코드의 합은 155. 모든 flip되는 쌍은 합이 155임.
console.log("a".charCodeAt(0));
