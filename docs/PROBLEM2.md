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

### 구현할 기능 목록
1. cryptogram 문자열을 배열로 변환하는 convert_str_to_arr 함수 구현 :white_check_mark:
- 매개변수 : str - cryptogram 문자열(string)
- return값 : convert_arr - 문자열을 배열로 변환한 값
2. cryptogram 배열에 중복 문자가 있는지 확인하는 check_repeat 함수 구현 :white_check_mark:
- 매개변수 : arr - cryptogram 배열
- return값 : isRepeat(boolean)
- 반복되는 연속된 문자열이 있는 경우 isRepeat = true, 없는 경우 isRepeat = false
3. 배열을 순회하면서 중복문자를 찾은 경우, 중복문자의 시작,끝 index 찾기 :white_check_mark:
- findRepeat : true이면 해당 중복 문자와 같은 문자 모두 찾은 경우, 아니면 false
4. find_scope 함수로 찾은 중복문자의 범위를 이용하여 중복문자 제거하는 remove_repeat 함수 구현 :white_check_mark:
- 매개변수 : start_idx(중복문자 시작 index),end_idx(중복문자 끝 index),convert_arr(배열)
- return값 : 없음
5. convert_arr 배열을 join 함수를 이용하여 string 문자열 값으로 변환. :white_check_mark:
