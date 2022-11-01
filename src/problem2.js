const problem2 = (cryptogram) => {
  let answer;
  answer = popSameWord(cryptogram);
  return answer;
};

const popSameWord = (cryptogram) => {
  let decryption = [];
  cryptogram.split("").map((word) => {
    // console.log(word);
    if (decryption[decryption.length - 1] === word) {
      decryption.pop();
    } else decryption.push(word);
  });
  return decryption.join("");
};

/*
1. "browoanoommnaon"4
2. "browoannaon"
3. "browoaaon"
4. "browoon"
5. "brown"

임의의 문자열 cryptogram이 매개변수로 주어질 때, 연속하는 중복 문자들을 삭제한 결과를 return 하도록 solution 메서드를 완성하라.
=> stack을 통해서 같은 글자가 들어 올때마다 pop 해주는 방향으로 구현하면 될 것 같다.
*/

module.exports = problem2;
