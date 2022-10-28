# Feature List (Problem Requirements Specification)

## Input Exception Process method
1. input is not an array
2. input array length is not 2
3. input array element is not a number
4. input array element is not an int
5. input array element is over 400 or under 1
6. input left page number is not odd number
7. input right page number is not { left page number + 1 }
- in these cases, return -1

## Score Calculation method
1. Calculate Sum of all the digits of each digit
2. Calculate Product of all the digits of each digit
3. Choose higher number by comparing Sum and Product as score
- return score

## Score Compare method
1. Compare the Scores of pobi and crong
- If Pobi's score is higher, return 1
- If Crong's score is higher, return 2
- If two scores are the same, return 0

# 기능 목록 (문제 요구사항 명세)

## 입력값 예외 처리 기능
1. 입력이 배열이 아닌 경우
2. 입력된 배열의 길이가 2가 아닌 경우
3. 입력된 배열의 요소가 숫자가 아닌 경우
4. 입력댄 배열의 요소가 정수가 아닌 경우
5. 입력된 배열의 요소가 400 초과 또는 1 미만인 경우
6. 입력된 왼쪽 페이지 번호가 홀수가 아닌 경우
7. 입력된 오른쪽 페이지 번호가 { 왼쪽 페이지 번호 + 1 } 이 아닌 경우
- 위 경우, -1을 리턴

## 점수 계산 기능
1. 각 자리 숫자를 모두 더하는 계산
2. 각 자리 숫자를 모두 곱하는 계산
3. 합과 곱을 비교해 둘 중 더 높은 숫자를 점수로 선택
- 점수를 리턴

## 점수 비교 기능
1. 포비와 크롱의 점수를 비교
- 포비의 점수가 더 높다면, 1을 리턴
- 크롱의 점수가 더 높다면, 2을 리턴
- 둘의 점수가 같다면, 0을 리턴
