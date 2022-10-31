function problem4(word) {
  var answer = '';
  let arr = word.split('')
  var temp;
  var change;

  arr.forEach(element => {
    temp = element.charCodeAt(0);
    if (65 <= temp && temp <= 90) {
      change = 155 - temp;
      answer += String.fromCharCode(change);
    }
    else if (97 <= temp && temp <= 122) {
      change = 219 - temp;
      answer += String.fromCharCode(change);
    }
    else {
      answer += element;
    }
  });
  return answer;
}

module.exports = problem4;
