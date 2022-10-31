## 🚀 기능 요구 사항

어느 연못에 엄마 말씀을 좀처럼 듣지 않는 청개구리가 살고 있었다. 청개구리는 엄마가 하는 말은 무엇이든 반대로 말하였다.

엄마 말씀 word가 매개변수로 주어질 때, 아래 청개구리 사전을 참고해 반대로 변환하여 return 하도록 solution 메서드를 완성하라.

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Z | Y | X | W | V | U | T | S | R | Q | P | O | N | M | L | K | J | I | H | G | F | E | D | C | B | A |

### 제한사항

- word는 길이가 1 이상 1,000 이하인 문자열이다.
- 알파벳 외의 문자는 변환하지 않는다.
- 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.

### 실행 결과 예시

| word | result |
| --- | --- |
| "I love you" | "R olev blf" |


### 구현할 기능 목록
1. word 문자열을 배열로 변환 :white_check_mark:
- spread operator를 이용
2. 문제에서 주어진 청개구리 사전 선언 :white_check_mark:
- object 로 정의
3. 1에서 배열로 바꾼 word_arr를 순회하면서, 대문자로 바꾸고 dictionary에 따라 변환하는 convertByDict 함수 구현 :white_check_mark:
- 매개변수 : word_arr(word 배열), dictionary(청개구리 사전)
- return 값 : word_arr() (변환된 word_arr 배열)
4.대-소문자는 원래 문자대로 유지해야 하기 때문에, 원래 문자가 소문자이면 바뀐 문자도 소문자로 바꿔주는 checkCase() 함수 구현 :white_check_mark:
- 매개변수 : origin_word(원래 문자배열), converted_word(사전으로 바꾼 문자 배열)
- return 값 : converted_word(대소문자 구별하여 다시 바뀐 문자 배열)
5. join 함수를 이용하여 문자배열을 문자열로 변환함 :white_check_mark:
