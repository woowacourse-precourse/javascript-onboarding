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

### 기능 목록

#### 1. 해독 기능 구현

1. 빈배열 만들기
2. cryptogram을 순회하면서 빈배열에 문자 하나씩 push하기
3. 이때, 배열의 마지막 요소가 push하려는 문자와 같을 경우, 다른 문자가 나올때까지 인덱스를 증가시킨다.
4. 3에서 다른 문자가 나오면, push하기 전에 배열의 마지막 요소를 pop으로 제거후 다른 문자를 push한다.
5. 문자열의 끝까지 위의 과정을 반복한다.
