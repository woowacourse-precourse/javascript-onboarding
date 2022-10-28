# Feature List (Problem Requirements Specification)

## Input Exception Process method

1. input is not a string
2. input string length is over 1000 or under 1
3. input string has non-lowercase letter

### Delete Consecutive Duplicate Characters method

1. push characters to the stack from the front of the input string
2. If the next character to push is the same character as the top of the stack, pop stack
3. repeat until the end of the string
4. combine characters in a stack into string

- return combined strings

# 기능 목록 (문제 요구사항 명세)

## 입력값 예외 처리 기능

1. 입력이 문자열이 아닌 경우
2. 입력된 문자열의 길이가 1000 초과 1 미만인 경우
3. 입력된 문자열에 알파벳 소문자가 아닌 문자가 포함된 경우

## 연속하는 중복 문자 삭제 기능

1. 입력받은 문자열의 앞에서부터 한 문자씩 스택에 push
2. 만약 다음 저장할 문자가 스택의 탑과 같은 문자일 경우 스택을 pop
3. 문자열의 끝까지 반복
4. 스택에 있는 문자들을 문자열로 합침

- 합친 문자열 반환