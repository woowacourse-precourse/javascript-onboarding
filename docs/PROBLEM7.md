## 🚀 기능 요구 사항

레벨 2의 팀 프로젝트 미션으로 SNS(Social Networking Service)를 만들고자 하는 팀이 있다. 팀에 속한 크루 중 평소 알고리즘에 관심이 많은 미스터코는 친구 추천 알고리즘을 구현하고자 아래와 같은 규칙을 세웠다.
- 사용자와 함께 아는 친구의 수 = 10점 
- 사용자의 타임 라인에 방문한 횟수 = 1점

사용자 아이디 user와 친구 관계를 담은 이차원 배열 friends, 사용자 타임 라인 방문 기록 visitors가 매개변수로 주어질 때, 미스터코의 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬하여 최대 5명을 return 하도록 solution 메서드를 완성하라. 이때 추천 점수가 0점인 경우 추천하지 않으며, 추천 점수가 같은 경우는 이름순으로 정렬한다.

### 제한사항

- user는 길이가 1 이상 30 이하인 문자열이다.
- friends는 길이가 1 이상 10,000 이하인 배열이다.
- friends의 각 원소는 길이가 2인 배열로 [아이디 A, 아이디 B] 순으로 들어있다.
  - A와 B는 친구라는 의미이다.
  - 아이디는 길이가 1 이상 30 이하인 문자열이다.
- visitors는 길이가 0 이상 10,000 이하인 배열이다.
- 사용자 아이디는 알파벳 소문자로만 이루어져 있다.
- 동일한 친구 관계가 중복해서 주어지지 않는다.
- 추천할 친구가 없는 경우는 주어지지 않는다.

### 실행 결과 예시

| user   | friends                                                                                                                         | visitors                                      | result                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------- |
| "mrko" | [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ] | ["bedi", "bedi", "donut", "bedi", "shakevan"] | ["andole", "jun", "bedi"] |

### 기능 구현
- isValidUser(user)
  - user의 제한 사항을 확인합니다.

- isValidFriends(friends)
  - friends의 제한 사항을 확인합니다.

- isValidFriendsElement(friends)
  - friends의 각 요소 배열의 길이를 확인하고, 제한 사항을 확인합니다.

- isObjectKeys(friendList, friend)
  - friendList의 키 중 friend가 포함되어 있는지를 확인합니다.

- getFriendList(user, friends)
  - 각 아이디 별 friendList 객체를 만들어줍니다.
  - 이 때, user가 friendList 프로퍼티 키 배열에 존재하지 않을 때, friendList객체에 user 프로퍼티를 빈 배열로 선언해줍니다.

- pushFriendList(friendList, friend)
  - friendList 객체의 프로퍼티 별 친구 목룍 배열을 만들어줍니다.

- isIncludesObjectKeys(object, key)
  - object 객체 프로퍼티 키 배열에 key가 포함되어있는지 확인해줍니다.

- getFriendRecommandScore(friendList, user)
  - friendList를 입력받아 친구 추천 점수 객체를 만들어 반환합니다.
  - 함께 아는 친구의 수를 찾기 위해 filter 함수를 통해 user의 친구 배열과 다른 사람의 친구 배열의 교집합을 구해, 교집합 배열 길이에 10을 곱한값을 객체에 담아줍니다.

- getVisitorRecommandScore(recommandScore, userFriendList, visitors)
  - user의 방문객 점수 배열을 반환해줍니다.
  - user의 친구 목록에 없는 방문객이라면 1점을 획득합니다.

- sortResult(recommandScore)
  - 추천 점수가 담긴 객체의 값 배열을 점수별 내림차순을 해준 뒤, set 자료구조로 변환합니다.
  - 만약 set 구조에 0이 포함되어있다면 제거합니다. 추천점수가 0점인 경우를 제외하기 위함입니다.
  - 내림차순으로 정렬된 set의 값들을 통해 recommandScore 객체에서 같은 값을 가지는 프로퍼티 키 부터 정렬하여 resultArr에 담아줍니다.
  - resultArr를 반환할 때, resultArr의 길이가 5보다 크면 splice를 이용해 5개의 요소만 반환해줍니다. 아니라면 resultArr전체를 반환합니다.

- problem7(user, friends, visitors)
  - 인자의 유효성을 확인합니다.
  - friendList를 만들어줍니다.
  - recommandScore를 만들어줍니다.
  - sortResult를 통해 반환받은 값을 반환합니다.