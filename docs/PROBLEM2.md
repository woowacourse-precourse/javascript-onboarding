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

<hr>

### 기능 목록

1. 변수 선언: 암호 해독문을 최종적으로 저장할 문자열 answer, 암호문(cryptogram)을 문자 하나씩 쪼갠 문자 배열 cryptoArray, 암호문을 해독하여 연속되는 반복 문자를 제거한 결과 배열 decrypt.
2. delRepitition(): 암호 문자 배열 cryptoArray를 인자로 받아, 해당 배열 내에서 연속되는 반복 문자를 검사하고 연속성이 존재하는 문자들은 repeatedLetter 배열에 저장하여 이후 문자에 대해 검사에 활용 후 제거하고 연속성이 확인되지 않은 문자들은 decrypted 배열에 저장하여 반환하는 함수이다.
3. delReptition()을 수행한 문자 배열과 이전에 수행한 문자 배열의 값이 동일할 때까지 반복한다.
4. 최종적으로 추출한 결과 배열(decrypt)을 문자열로 변환하여 answer에 저장하고 반환한다.
