# Feature List (Problem Requirements Specification)

## Input Exception Process method

1. input is not an array
2. input array length is over 10000 or under 1
3. input form is not an array
4. input form array length is not 2
5. input email length is over 19 or under 11
6. input email is not end with email.com
7. input name length is over 10 or under 1
8. input name has non-korean-character

## Divide name into two characters and return excluding duplicated values method

- return an array of names separated by two characters excludeing duplicated value

## Check Duplicated Name Using Map method

1. key = two-letter name divided , value = e-mail
2. check if values of the two-letter name array can be put in the map
3. if the key value already exists in the map, push both value of the map and the e-mail of word to answer array
4. remove duplicates from answer array and return

# 기능 목록 (문제 요구사항 명세)

## 입력값 예외 처리 기능

1. 입력이 배열이 아닌 경우
2. 입력된 배열의 길이가 10000 초과 또는 1 미만인 경우
3. 입력받은 폼이 배열이 아닌경우
4. 입력받은 폼의 길이가 2가 아닌경우
5. 입력받은 이메일의 길이가 19 초과 또는 11 미만인 경우
6. 입력받은 이메일이 email.com으로 끝나지 않을 경우
7. 입력받은 이름의 길이가 10 초과 또는 1 미만인 경우
8. 입력받은 이름에 한국어가 아닌 글자가 있는 경우

## 이름을 2글자 단위로 나눠서 중복을 제거해 반환하는 기능

- 이름을 두글자씩 나눠서 배열을 반환

## 맵을 이용해 중복을 검사하는 기능

1. 이름을 나눈 두 글자 key, 이메일을 value로 저장하는 map
2. 두 글자 이름 배열의 값들을 map에 넣을 수 있는지 확인
3. map에 이미 key 값이 존재한다면, map의 value 값과 넣으려던 단어의 이메일을 모두 answer 배열에 push
4. answer 배열에서 중복을 제거해 반환
