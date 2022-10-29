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

#### TODO

- 배열을 이용한 스택의 구현으로 큰 문제의 틀을 잡음.
- cryptogram을 배열로, answer를 스택으로 간주.
- 배열을 이용한 스택의 구현 중 가장 중요한 top의 설정.
- stack에 들어온 데이터와 들어올 데이터를 비교하면서, 같으면 stack내의 값을 pop, 그리고 cryptogram의 인덱스를 증가시키면서 자연스레 배열의 다음 값으로 이동하고, 다르면 cryptogram 배열의 값을 stack 내로 push한다. 
- 위에 구현한 기능들을 for문으로 감싸주면서 중복이 없을때까지 반복.
- answer를 다시 문자열로 변경하고 리턴.