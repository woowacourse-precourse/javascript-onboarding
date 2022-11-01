## pob7 feature 목록
- freinds 배열 순회을 통한 user의 친구 리스트(myFriends 배열) 생성
- freinds를 순회하며 함께 아는 친구인 경우 recFreinds 배열에 해당 친구 이름 추가
- recFreinds 객체 원소 별 개수를 count 후 ans 객체에 추가 (key:추천 친구 이름 / value:연산된 추천 점수+10)
- recFreinds 초기화 후 visiors 배열 탐색을 통해 추천 친구인 경우 recFreinds 배열에 해당 친구 이름 추가
- recFreinds 객체 원소 별 개수 세어 count 후 ans 배열에 추가 (key:추천 친구 이름 / value:연산된 추천 점수+1)
- ans배열의 value 기준으로 정렬하여 key값만 answer 배열에 추가하여 결과 도출
- value가 같다면 key 기준으로 추가 정렬 진행
