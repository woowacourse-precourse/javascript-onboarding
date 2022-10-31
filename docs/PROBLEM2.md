## 🚀 기능 구현 목록

1. 예외처리를 해준다.
2. 중복된 문자의 index 값을 찾아준다. 만약 없다면 반복을 종료하고 출력한다.
3. 중복된 문자의 index를 통해 암호문자열의 중복을 제거해준다.
4. 중복 제거시 사용한 undefined된 문자들을 제거한다.
5. 암호 문자열 cryptogram를 중복이 제거된 문자열로 바꿔준다.
6. 1~4번을 중복된 문자가 없어 질 때까지 반복한다.

<br>

- [x] 예외 상황

  - [x] cryptogram 길이가 1 이상 1000 이하가 아닌경우 예외처리
  - [x] cryptogram이 알파벳 소문자가 아닌경우 예외처리

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
