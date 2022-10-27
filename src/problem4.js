function problem4(word) {
  var answer;
  return answer;
}

function checkAlpha(char) {
  if ('A' <= char && char <= 'Z') {
    return 'uppercase';
  } else if ('a' <= char && char <= 'z') {
    return 'lowercase';
  }
  return 'default';
}
module.exports = problem4;
