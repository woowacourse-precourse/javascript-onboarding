## 🚀 기능 요구 사항

암호문을 좋아하는 괴짜 개발자 브라운이 이번에는 중복 문자를 이용한 새로운 암호를 만들었다. 예를 들어 "browoanoommnaon"이라는 암호문은 다음과 같은 순서로 해독할 수 있다.

1. "browoanoommnaon"
2. "browoannaon"
3. "browoaaon"
4. "browoon"
5. "brown"

임의의 문자열 cryptogram이 매개변수로 주어질 때, 연속하는 중복 문자들을 삭제한 결과를 return 하도록 solution 메서드를 완성하라.

### 제한사항

- cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
- cryptogram은 알파벳 소문자로만 이루어져 있다.

### 실행 결과 예시

| cryptogram        | result  |
| ----------------- | ------- |
| "browoanoommnaon" | "brown" |
| "zyelleyz"        | ""      |

## 🚩 기능 목록

- class stack: 스택을 구현한다.

- function eraseConsecutiveChars: 문자열을 받아 중복 문자들을 제거한 뒤 return한다. 문자열을 순회하며 스택과 현재 문자를 기준으로 새로운 문자열에 추가할 문자를 고르는 함수를 호출한다. 중복 문자들을 삭제한 뒤 새로 생기는 중복 문자들은 삭제하지 않는다.

- function getNextStr: 스택이 비어있지 않고, 입력받은 문자와 스택에 담긴 문자가 다를 경우 새로운 문자열에 스택에 담겨있던 문자를 추가하는 함수를 호출한다.

- function getNextChar: 스택을 확인하고 스택의 크기가 1보다 크다면 중복되는 것이므로 빈 문자열을, 스택의 크기가 1이라면 스택에 담겨있던 문자를 반환한다.
