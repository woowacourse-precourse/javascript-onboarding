# Feature List (Problem Requirements Specification)

## Input Exception Process method

1. input is not a number
2. input number is not an int
3. input number is over 1000000 or under 1

## Convert Money by Unit method

1. push quotient of money divided by unit to input answer array
2. if quotient > 0, money = remainder of money dived by unit

- return money

## Run Money Exchange function from large amount

1. Run money exchange function from unit 50000₩ to 1₩ in order

- return answer array

# 기능 목록 (문제 요구사항 명세)

## 입력값 예외 처리 기능

1. 입력이 숫자가 아닌 경우
2. 입력된 숫자가 정수가 아닌 경우
3. 입력된 숫자가 1000000 초과 또는 1 미만인 경우

## 단위에 맞게 돈을 변환하는 기능

1. 단위로 돈을 나눈 몫을 입력받은 정답 배열에 push
2. 몫이 0보다 큰 경우, 단위로 돈을 나눈 나머지를 잔돈으로

- 남은 잔돈을 리턴

## 큰 액수부터 돈 변환 함수 실행

1. 50000원부터 1원까지 차례대로 돈 변환 함수 실행

- 정답 배열 반환
