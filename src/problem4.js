function problem4(word) {
  var answer;

  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnofqrstuvwxyz';
  var re = 'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba';

  var index = x => str.indexOf(x);
  var translate = x => index(x) > -1 ? re[index(x)] : x;

  if (word == null){
    word = "";
  }

  answer = word.split('').map(translate).join('');
  return answer;
}


module.exports = problem4;