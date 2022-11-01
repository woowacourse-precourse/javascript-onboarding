## 🚀 기능 요구 사항

암호문을 좋아하는 괴짜 개발자 브라운이 이번에는 중복 문자를 이용한 새로운 암호를
만들었다. 예를 들어 "browoanoommnaon"이라는 암호문은 다음과 같은 순서로 해독할
수 있다.

1. "browoanoommnaon"
2. "browoannaon"
3. "browoaaon"
4. "browoon"
5. "brown"

임의의 문자열 cryptogram이 매개변수로 주어질 때, 연속하는 중복 문자들을 삭제한
결과를 return 하도록 solution 메서드를 완성하라.

### 제한사항

- cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
- cryptogram은 알파벳 소문자로만 이루어져 있다.

### 실행 결과 예시

| cryptogram        | result  |
| ----------------- | ------- |
| "browoanoommnaon" | "brown" |
| "zyelleyz"        | ""      |

### 기능 구현 과정 정리

## 문자열이 중복이 제거될떄까지 다음의 과정을 반복합니다.

1. `is_not_valid`변수를 false로 초기화하고(중복이 있는지 없는지 판별), 문자열의
   길이만큼 순회하면서 `문자열[현재인덱스]`와 `문자열[현재인덱스+1]`가 동일한지
   확인합니다.

2. 만약 동일하다면, `next_index(마지막 중복 문자의 인덱스)`를 0으로 갱신하고,
   `find_last_index함수`를 실행합니다.

3. `find_last_index`는 중복문자의 시작부터 끝까지 찾으면서 결과의 0번쨰에는 true
   를 1번쨰에는 중복 문자의 마지막 인덱스를 넣어서 반환합니다.

4. 중복 문자가 있다면, (0번쨰가 true라면), `create_newstr`을 실행합니다.

5. 문자열을 `create_newstr`의 반환값으로 변환합니다.

6. `create_newstr`은 두개의 인덱스(first,last)와 문자열(answer)을 받아서,
   `0번쨰 인덱스 - first`까지의 substr, `last+1인덱스,마지막`까지 substr을 더해
   서 반환합니다.

7. 중복 문자가 없다면(0번쨰가 false라면), 종료합니다
