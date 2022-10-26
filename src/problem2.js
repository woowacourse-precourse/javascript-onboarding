/*
*요구사항

문자열이 주어진다. 문자열에서 2개 이상 중복되는 문자가 이어져있다면 삭제 시킨다.
삭제된 빈자리를 다시 양쪽의 문자를 땡겨서 채운다.

위 과정을 반복해서 더 이상 중복되는 문자가 연이어 나오지 않는다면 그 문자를 return.

*해결전략
연속되는 문자가 짝수라면 기본 스택 넣는 방법을 쓰면 되지만, 이 방법을 쓰면 연속되는 문자 개수가 홀수일경우가 예외사항 발생한다.
문자를 빈배열에 저장해가면서 담긴 문자가 넣을문자랑 같다면 배열에 저장하지 않는다.
이때, 변수하나를 boolean 값으로 설정하여 같은 단어가 연속으로 나오는 중인지를 체크하게 해준다.
연속으로 삭제가 되다가 이제 값이 달라지면, boolean 값을 다시 바꿔주고 배열에 저장되어있는 값을 pop 시키자. 

최종적으로 남은 문자를 return 

*기능 목록
1. 중복제거를 해주는 함수 deleteWords
*/

function problem2(cryptogram) {
  function deleteWords(words) {
    let [newWords, check, nextRepeat] = [[], false, false];
    words.split("").map((word) => {
      if (newWords[newWords.length - 1] === word) {
        [check, nextRepeat] = [true, true];
      } else {
        if (check === true) {
          newWords.pop();
          check = false;
        }
        newWords.push(word);
      }
    });
    if (check === true) newWords.pop();
    return [newWords.join(""), nextRepeat];
  }
}

module.exports = problem2;
