function problem2(cryptogram) {
  var answer;
  answer = decipher(cryptogram);
  return answer;
}

module.exports = problem2;

//문자를 배열로 변환후 중복제거 이후 다시 문자로 변경한다.
function decipher(word) {
  word.toLowerCase();
  const arr = word.split(""); // 문자를 배열로 취급

  const charArray = decrypto(arr);
  const key = charArray.join("");

  return key;
}

//중복문자 제거 함수
function decrypto(arr) {
  let newArr = []; //새로운 배열을 담는다.
  let deletedWord = "";
  let index = 0; //배열삭제추가등으로 인덱스가 동적이기때문에 직접 조절해줌.

  arr.map((word) => {
    if (newArr.length === 0) {
      newArr.push(word);
      index += 1;
      return;
    } //첫글자 또는 배열이 비었을시 반드시 추가
    if (word === newArr[index - 1]) {
      newArr.pop();
      deletedWord = word;
      index -= 1;
      return;
    } //새로 들어올 문자가 기존문자의 마지막과 같으면 기존문자 삭제후 인덱스 감소
    if (word === deletedWord) {
      return; //이전에 삭제된 문자와 새로 들어올 문자가 같으면 무시
    } else {
      newArr.push(word);
      deletedWord = "";
      index += 1;
    } //새로운 글자는 추가하고 인덱스 증가.
  });
  return newArr;
}
