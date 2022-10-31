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

## 📜 기능 목록

문자가 연속되지 않을 때까지 연속문자를 제거해야 하기 때문에 Recursion을 적용.

**1. cryptogram의 문자 연속 판별 기능**

- 연속문자 제거
- 더이상 문자가 연속되지 않는 경우
- 아직 이웃하는 문자가 연속될 경우 (Recursion)

**2. 연속문자 제거 기능**

- 연속되는 문자를 저장할 임시변수, 새로운 crptogram 변수
- 현재 문자가 연속될 경우 (임시변수에 연속되는 문자 저장, 임시변수 값으로 연속 판별 )
- 현재 문자가 연속되지 않는 경우 (임시 변수 초기화, 새로운 crptogram에 문자 저장)
