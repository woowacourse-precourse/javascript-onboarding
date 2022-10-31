## 🚀 기능 요구 사항

배달이가 좋아하는 369게임을 하고자 한다. 놀이법은 1부터 숫자를 하나씩 대면서, 3, 6, 9가 들어가는 숫자는 숫자를 말하는 대신 3, 6, 9의 개수만큼 손뼉을 쳐야 한다.

숫자 number가 매개변수로 주어질 때, 1부터 number까지 손뼉을 몇 번 쳐야 하는지 횟수를 return 하도록 solution 메서드를 완성하라.

### 제한사항

- number는 1 이상 10,000 이하인 자연수이다.

### 실행 결과 예시

| number | result |
| --- | --- |
| 13 | 4 |
| 33 | 14 |

### 구현할 기능 목록
1. 숫자를 배열로 변경하는 number_to_str 함수 구현 :white_check_mark:
- 매개변수 : number(정수)
- return값 : 정수를 각 자릿수로 나눈 array
2. 각 숫자 자릿수에 대해 3,6,9가 포함되어 있으면 answer에 +1 씩 계산하는 cal_clap 함수 구현 :white_check_mark:
- 매개변수 : answer(박수 수), check_num(3,6,9 배열), number_arr(정수를 각 자릿수로 나눈 array)
- return 값 : answer(박수 수)
