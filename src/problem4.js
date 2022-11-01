function problem4(word) {
  var answer = [];
  var frogword = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  var fL = frogword.split("");
  var fs = frogword.toLowerCase().split("");
  for (var x of word) {
    var num = x.charCodeAt();
    if (num >= 97 && num <= 122) {
      answer.push(fs[mwindex(x)]);
    }else if (num >= 65 && num <= 95) {
      answer.push(fL[mwindex(x)]);
    }else {
      answer.push(" ")
    }
  }
  answer = answer.join("");
  return answer;
}

function mwindex(str) {
  var answer = [];
  var momword = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var sL = momword.split("");
  var ss = momword.toLowerCase().split("");
  for (var x of str) {
    var num = x.charCodeAt();
    if (num >= 65 && num <= 95) {
      answer.push(sL.indexOf(x));
    }else if (num >= 97 && num <= 122) {
      answer.push(ss.indexOf(x));
    }else {
      answer.push(' ');
    }
  }
  return answer;
}


module.exports = problem4;