# Feature List (Problem Requirements Specification)

## Input Exception Process method

1. input is not a string
2. input string length is over 1000 or under 1

## Check CharCode is Uppercase or Lowercase method

- return if charCode is either uppercase or lowercase alphabet ASCII

## Convert Character if Character is Uppercase or Lowercase method

n th alphabet will convert to n th alphabet in reverse order from z

1. calculate difference between ASCII value of Z(z) and ASCII value of the input character
2. find converted char by adding calculated difference and ASCII value of A(a)

- return converted character

## Add Character to Answer string method

1. if character is not alphabet, add character to answer string
2. if character is alphabet, add converted character to answer string

- return answer string

# 기능 목록 (문제 요구사항 명세)

## 입력값 예외 처리 기능

1. 입력이 문자열이 아닌 경우
2. 입력된 문자열의 길이가 1000 초과 또는 1 미만인 경우

## 대문자 알파벳인지, 소문자 알파벳인지 확인하는 기능

- Char Code가 대문자 알파벳 또는 소문자 알파벳 아스키 값인지 리턴

## 대문자, 소문자 알파벳인 경우 변환하는 기능

n번째 알파벳은 z 부터 역순으로 n 번째 알파벳으로 변환

1. Z(z)의 아스키 값과 입력 문자의 아스키 값의 차를 구함
2. 구한 값을 A(a)의 아스키코드에 더해 변환된 문자 구함

- 변환한 문자 반환

## 정답 문자열에 합치는 기능

1. 알파벳이 아닌 경우 정답 문자열에 그냥 문자를 더함
2. 알파벳인 경우 정답 문자열에 변환된 문자를 더함

- 정답 문자열을 반환
