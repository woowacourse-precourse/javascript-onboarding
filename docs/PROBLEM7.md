## 기능 목록
1. 친구 리스트를 만든다.
```
   let friendsObj
```
2. 사용자의 친구를 찾는다.
```
   let userFriends
```
3. 사용자와 함께 아는 친구에게 10점씩 더한다.
```
 function setScore()
```
4. 사용자의 타임 라인에 방문한 친구에게 1점씩 더한다.
```
 function setScore()
```
5. 추천할 친구를 찾고 정렬한다.
```
 function sortObj()
```

## 예외 처리
1. 최대 5명을 넘을 경우
```
if(recommendFriends.length > 5) return answer.slice(0,5)
```
2. 추천 점수가 0 일 경우