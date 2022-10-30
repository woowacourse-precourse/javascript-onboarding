function problem4(word) {
  let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let frogDict = 'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba';
  const findIndex = (x) => input.indexOf(x);
  function translate(x) {if (findIndex(x) > -1){
    return frogDict[findIndex(x)]
  } return x;
}
}

module.exports = problem4;

//problem 4 기능 목록
//[x] 알파벳 대문자와 소문자를 순서대로 나열한 문자열을 input 변수에 할당한다.
//[x] 알파벳 대문자와 소문자를 거꾸로 나열한 문자열을 frogDict 변수에 할당한다.
//[x] 입력된 문자 x가 input의 몇 번째 문자에 해당하는지 확인하는 findIndex 기능을 구현한다.
//[x] findIndex기능으로 찾아낸 x의 순서를 frogDict에 대입하여 x를 청개구리어로 바꿔주는 기능을 구현한다.
//  [x] translate 기능 안에 if 조건문을 삽입하여 입력된 x가 알파벳이 아닐 경우 x를 그대로 반환하도록 한다.
//[] 주어진 문자열 word를 배열화하고, 배열에 translate를 적용한 후 join하여 다시 문자열로 변환하는 기능을 구현한다.
//[] 이를 answer로 두고 반환한다.