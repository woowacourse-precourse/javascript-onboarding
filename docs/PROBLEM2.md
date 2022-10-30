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
## problem 2 기능 목록
### 예외 처리에 관하여
- 다음과 같은 제한 사항이 주어져있다.
  - 주어지는 cryptogram은 문자열이다.
  - cryptogram은 길이가 1 이상 1000 이하이다.
  - cryptogram은 알파벳 소문자로만 이루어져있다.
<br>

- 입력값은 위의 제한 사항을 지킨 값이라고 판단하였다.
- 따라서 별도의 예외처리는 하지 않았다.

### feature1 : 연속하는 중복 문자 제거
- 문자열에서 연속하는 중복 문자를 제거한다.
- decrypting 함수를 선언하고 이 함수를 통해 암호를 해독한다.
  - 인자 값은 cryptogram이다.
<br>

- 문자열에 다른 연속하는 중복 문자가 없을 때까지 제거하는 과정을 반복한다.
- 문자열에 더 이상 연속하는 중복 문자가 없다면 해당 문자열을 반환한다.