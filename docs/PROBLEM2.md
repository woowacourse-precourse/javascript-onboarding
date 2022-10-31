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


### ✅ 체크 리스트

- [V] 첫 포인터 시작점을 생성
- [V] 문자열 -> 배열로 변환

1. 포인터가 이동 가능한 유효 범위 지정
- [V] right 포인터가 cryptogram 문자열길이보다 작아야한다.
- [V] left 포인터는 0보다 크거나 같아야한다.

2. 중복 판단
 2-1. 두 포인터가 가리키는 문자가 같다.
 - [V] 해당 포인터 위치의 문자 제거
 - [V] 제거 후 left와 right 둘 다 한칸 씩 뒤로 옮긴다.

 2-2. 두 포인터가 가리키는 문자가 다르다.
 - [V] 두 포인터 둘 다 한칸 씩 앞으로 옮기기

- [V] 문자열을 합친 후 종료


### !!🚨 hotfix 
문제를 잘 읽어보면 한 텀에 현재 기준 중복되어있는 모든 문자를 지운다.
그렇기에 현재 중복된 문자 두개씩만 지우는 투포인터를 수정.

2. 중복 판단
 2-1. 두 포인터가 가리키는 문자가 같다.
 - [V] 해당 포인터 위치부터 rightpointer를 계속해서 더해준다.
 - [] rightpointer와 leftpointer가 달라지는 시점, cryptogramList를 그만큼 제거한다.
 - []rightpointer를 leftpointer + 1 로 바꾸고 다음 중복을 계속해서 위의 과정으로 제거 해나간다.

 2-2. 두 포인터가 가리키는 문자가 다르다.
 - [V] 각각 포인터를 한칸씩 앞으로 전진한다.
 - [] 만약 앞서 같았더라면, cryptogramList를 rightpointer - leftpointer만큼 제거한다.

 - [] 중복 판단의 과정을 지워지는 글자가 없을 때 까지 반복한다.