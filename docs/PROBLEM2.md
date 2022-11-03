## 🔍 기능 구현 목록

1. 문자열 cryptogram의 첫번째 문자를 포함하는 stack 만들기
2. cryptogram의 두번째 문자부터 마지막 문자까지 해당 문자가 앞 문자와 동일한지 확인하기

- 이전 문자와 동일하면 해당 문자를 stack에서 제외하기
- 이전 문자와 동일하지 않으면 해당 문자를 stack에 추가하기

3. stack에 있는 문자를 공백없이 모두 합친 새로운 문자열 반환하기

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

