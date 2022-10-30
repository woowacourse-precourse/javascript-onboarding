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
1. cryptogram이 제한 사항을 만족하는지 검사
- 문자열 길이가 1보다 작을 경우 공백 return
- 대문자는 소문자로 변경
2. 이웃하는 문자열이 동일한 모든 구간 체크
- 동일할 경우 위치 체크
3. 이웃하는 문자열이 동일한 구간 삭제
4. 2~3을 반복하여 더 이상 이웃하는 문자열이 중복되지 않는 문자열을 만드는 solution 메소드