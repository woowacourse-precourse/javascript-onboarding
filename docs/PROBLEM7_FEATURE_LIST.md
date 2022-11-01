# Feature List (Problem Requirements Specification)

## Input Exception Process method

1. user is not a string
2. user length is over 30 or under 1
3. friends is not an array
4. friends element is not an array
5. friends element array length is not 2
6. id is not a string
7. id length is over 30 or under 1
8. id has non-lowercase-alphabet

## Save Friends to map method

- friends = 2 names array
- map Structure
  - id : { isFriend : true, friends : \[ \], score : 0}
- if one of the two in friends is user, isFriend = true

1. insert another person into friends if the key value id already exists in the map
2. if the key value id is not in the map, insert a new one in the map
   - isFriend = isFriend
   - friends = \[Another one\]

## Count the score of Friends Both Know method

find the friends of the value of the map as the key of the map and score + 10 if isFriend === true

- return the calculated score

## Count visitors score method

1. score + 1, if value in the visitors array is in key values of the map
2. create a map element with score = 1 if it does not exist in the map

## Sort and return calculated IDs

1. only elements with isFriend=false in the map are pushed into the idNScore array in the form of \[id, score\]
2. sort by score first, if the score is the same, sort it by name
3. If the recommend score is over 0 , push to the correct answer array, up to 5 from the top

- return answer array

# 기능 목록 (문제 요구사항 명세)

## 입력값 예외 처리 기능

1. user가 문자열이 아닌 경우
2. user의 길이가 30 초과 또는 1 미만인 경우
3. friends가 배열이 아닌경우
4. friends의 원소가 배열이 아닌 경우
5. friends의 원소 배열의 길이가 2가 아닌 경우
6. id가 문자열이 아닌 경우
7. id의 길이가 30초과 1 미만인 경우
8. id에 알파벳 소문자가 아닌 문자가 있는 경우

## Friends 를 map 으로 저장하는 기능

- friends = 2명의 이름 배열
- Map 구조
  - id : { isFriend : true, friends : \[ \], score : 0}
- Friends 둘 중 한명이 user 인 경우 isFriend = true

1. key 값인 id가 이미 map에 존재할 경우 friends에 다른 한명 삽입
2. key 값인 id가 map에 없을경우 map에 새로 삽입
   - isFriend = isFriend
   - friends = \[ 다른 한명\]

## 함께 아는 친구 점수를 계산하는 기능

map의 value의 friends를 map의 key로 찾아 isFriend === true일 경우 score + 10

- 계산한 점수를 리턴

## 방문자 점수를 계산하는 기능

1. visitors 배열에 있는 값이 map의 key값인 경우 score + 1
2. map에 존재하지 않는경우 score = 1 인 map 원소 생성

## 아이디를 정렬하고 반환하는 기능

1. map에서 isFriend = false인 원소들만 idNScore 배열에 \[id, score\] 형태로 push
2. score 먼저, score가 같을 경우 이름순으로 정렬
3. 정렬된 위에서부터 최대 5개, 추천 점수가 0 이상인 경우를 정답 배열에 push

- 정답 배열 리턴
