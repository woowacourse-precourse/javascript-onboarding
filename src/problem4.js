const problem4 = (word) => {
  let answer;
  answer = changeWord(word);
  return answer;
};
const BIG_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SMALL_ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const reverseAlphabet = { " ": " " };
const ALPHA_LEN = 26;

for (let location = 0; location < ALPHA_LEN; location++) {
  reverseAlphabet[BIG_ALPHABET[location]] =
    BIG_ALPHABET[ALPHA_LEN - 1 - location];
  reverseAlphabet[SMALL_ALPHABET[location]] =
    SMALL_ALPHABET[ALPHA_LEN - 1 - location];
}

const changeWord = (word) => {
  let reverse = "";
  for (let alphabet in word) {
    reverse += reverseAlphabet[word[alphabet]];
    // console.log(word[alphabet]);
  }
  return reverse;
};
/*
| A   | B   | C   | D   | E   | F   | G   | H   | I   | J   | K   | L   | M   |
 N   | O   | P   | Q   | R   | S   | T   | U   | V   | W   | X   | Y   | Z   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Z   | Y   | X   | W   | V   | U   | T   | S   | R   | Q   | P   | O   | N   |
 M   | L   | K   | J   | I   | H   | G   | F   | E   | D   | C   | B   | A   |
=> dictionary로 해결하면 될 것 같다는 생각.
=> dictionary로 만드니 너무 코드가 보기 어려워 진다는 것을 느낌, 
=> ABCDEFGHIJKLMNOPQRSTUVWXYZ 로 글자를 선언해서 위치로 바꾸는게 더 효율적일 것이라고 생각.
*/

module.exports = problem4;
