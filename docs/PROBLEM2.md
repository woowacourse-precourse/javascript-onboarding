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
### 기능 목록
1. cryptogram 문자열에서 문자를 하나씩 비교한다.
stack 배열의 마지막 문자는 해당 문자의 비교시에 직전 문자와 같지 않다는 조건을 통과하였음을 의미하고 prev는 char 직전 문자 종류에 대한 정보를 담고 있다.

  - stack 배열에 넣는 경우 : 기존 stack 배열에 들어간 마지막 문자와 같지 않고 직전 문자와 같지 않은 경우 

  - stack 배열에서 빼는 경우 : 기존 stack 배열에 들어간 마지막 문자와 같은 경우
