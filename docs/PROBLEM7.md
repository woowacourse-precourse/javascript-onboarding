1. user의 친구를 찾아 배열을 return하는 getUserFriends 함수를 선언한다.
   - user를 배열에 저장한다.
   - friends의 원소 인덱스 0이 user일 떄 인덱스 1이 user의 친구이다.
   - 인덱스 1이 user일 때 인덱스 0이 user의 친구이다.
2. friends 배열의 값들이 user의 친구가 아닐 경우 10점을 추가하는 score10 함수를 선언한다.
   - friends 원소 안에 user의 친구가 한 명있으면, 다른 한 명의 점수를 10점 추가한다.
   - friends 원소 안의 값들이 전부 user의 친구거나 user의 친구가 아니라면 점수 배정하지 않는다.
   - user의 친구가 없다면 점수를 줄 친구가 없으므로 함수를 빠져나간다.
3. visitors 배열의 값이 user의 친구가 아닐 경우 1점 추가하는 score1 함수를 선언한다.
   - visitor가 user의 친구가 아니면 1점 추가한다.
4. object를 2차원 배열로 바꾼 후 점수가 가장 높은 순으로 sort 해서 친구 이름이 담긴 배열을 return하는 result 함수를 선언한다.
   - 최대 5명을 return하도록 한다.
5. problem7에서 기능을 구현한다.

리팩토링1) Object에 점수를 추가하는 로직이 겹치기 때문에 addScoreToObj 함수를 선언하여 중복을 제거함
