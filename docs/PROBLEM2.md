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

---

## 🔍문제풀이

### 💻기능 구현 순서

1. 배열을 순차적으로 돌면서 배열의 before index와 값이 같다면 pop, 틀리다면 push한다.
2. 1번의 push된 배열을 중복&연속 된 값이 있는지 확인 후 다시 1번을 실행한다.

### ❗예외사항

- 없음

### ❓궁금한점

- 첫번째 인덱스와 마지막 인덱스면 어떻게 구현을 해야할까 -> do/while & [index-1] 사용
- 중첩문보다는 javascript의 함수(reduce, filter)들을 사용하고 싶다.

### ✔️문제 풀이 방식 체크

1. browoanoommnaon
   <br>browoan&nbsp;&nbsp;&nbsp;&nbsp;naon -> oomm
2. browoannaon
   <br>browoa&nbsp;&nbsp;aon -> nn
3. browoaaon
   <br>browo&nbsp;&nbsp;on -> aa
4. browoon
   <br>brow&nbsp;&nbsp;n -> oo
