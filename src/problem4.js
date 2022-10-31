function problem4(word) {
  let answer = "";
  const al = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const al2 = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  [...word].forEach((str) => {
    if (str === str.toUpperCase()) {
      if(al.indexOf(str) !== -1) {
        answer += al2[al.indexOf(str)];
      }else{
        answer += str;
      }
    }else {
      str = str.toUpperCase();
      str = al2[al.indexOf(str)];
      str = str.toLowerCase();
      answer += str;
    }
  });
  return answer;
}
problem4("abcdefghijklmnopqrstuvwxyz");
module.exports = problem4;
