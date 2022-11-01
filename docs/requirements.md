# 기능구현 목록

## Problem 1
- [x] 각각의 최대 숫자를 구하기
	- [x] 자리수를 각각 더하기 -> reduce
	- [x] 자리수를 각각 곱하기 -> reduce
	- [x] 두개 중 최대 숫자 구하기 -> Math.max
- [x] 결과를 비교해서 최종값 출력
	- [x] pobi < crong = 2 
	- [x] pobi > crong = 1 
	- [x] 동점 = 0
 
- [x] 예외처리 : page가 유효한 숫자인지 확인
  - [x] 두개의 값이 모두 숫자인지 확인
  - [x] crong이 pobi보다 1 큰 숫자인지 확인

<br />

## Problem 2
- [x] 연속된 중복값이 있는지 확인 -> isRepeated
- [x] 중복된 값이 있는 경우 제거 -> copy_cryptogram
- [x] 중복된 값이 없을 때까지 반복 (while문 이용)

<br />

## Problem 3
- [x] targetNumber까지 iterate
- [x] 해당 숫자안에 369 중 하나가 포함되는지 확인
  - [x] 숫자를 문자로 변환
  - [x] includes, filter 사용해서 포함된 숫자 확인
  - [x] length를 이용해서 개수 확인

<br />

## Problem 4
- [x] 대응되는 문자가 아스키로 변환했을 때 합이 155라는 것을 이용
  - [x] 문자 -> 아스키코드 : charCodeAt
  - [x] 아스키코드 -> 문자 : fromCharCode
- [x] 대문자는 대문자로 유지
- [x] 소문자는 소문자로 유지

- [x] 예외처리 : A-Z, a-z가 아닌 경우 그대로 유지

<br />

## Problem 5
- [x] 잔돈 배열을 내림차순으로 선언하기
- [x] 가장 큰수 (잔돈 액수)부터 이용해서 지불하는 원리 사용
	- [x] 나눠서 몫을 차례대로 push -> Math.floor 사용
	- [x] 나누고 남은 돈을 다시 money에 재할당

<br />

## Problem 6
- [x] name 별도의 array로 분리
- [x] name : email hash map 만들기
- [x] name을 두개씩 비교해가면서 similiarity check
  - [x] 글자가 두개 이상 같은 경우 더 이상 check하지 않음 (break)
  - [x] 연속된 글자인지 체크 (flag에 index를 담은 후 현재 index와 1 차이가 나는지 확인)
- [x] 중복된 문자가 있는 name array를 iterate 하면서 대응되는 이메일 출력 (hashmap 이용)
- [x] 결과로 도출한 이메일 목록을 sort하기 (오름차순)

<br />

## Problem 7
- [x] 친구별로 누구와 직접적인 친구인지 확인 (친구별 hashmap 만들기)
- [x] 친구별로 score 계산
	- [x] user과 친구인 경우: +10
	- [x] 방문자인 경우: +1
- [x] 점수가 높은 친구순으로 sort
	- [x] 점수가 동정이면 이름순으로 sort
- [x] 최대 다섯명까지만 출력
- [x] 추천 점수 0이면 추천하지 않음