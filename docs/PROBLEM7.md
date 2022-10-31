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

### 구현할 기능 목록
1. 친구 관계를 담은 friends 배열을 통해 friend_dict 오브젝트 정의, score 오브젝트 정의하는 makeObject 함수 구현
- 매개변수 : friends(친구관계 배열),friend_dict(object), score(object)
- return값 : friend_dict, score
- friend_dict = {이름 : [친구1,친구2,...]} 형식의 object
- score = {이름 : 점수, 이름:점수, ...} 형식의 object
2. friend_dict 오브젝트에 'user'의 친구에 대한 정보 user_friend로 저장하고, friend_dict 오브젝트에서 삭제.
3. user가 친구들이 있을 경우, friend_dict 오브젝트를 순회하면서 user와 친구들이 겹치는 사람의 score를 +10 증가시키는 friendScore 함수 구현
- 매개변수 : friend_dict, score, user_friend(user의 친구들을 담은 배열)
- return : score
4. 사용자의 타임라인에 방문한 사람의 기록인 visitors 배열을 순회하여 방문한 사람의 점수 +1 증가시키는 visitorScore 함수 구현
- 매개변수 : visitors,score
- return값 : score
5. 점수가 0점인 사람들, user와 이미 친구인 사람들의 score 원소를 삭제하는 deleteFriend 함수 구현
- 매개변수 : score(object), user_friend(user의 친구들 배열)
- return값 : score
6. score object 에서, 점수대로 내림차순 정렬하되, 같은 점수일 경우 이름순으로 정렬하는 sortScore 함수 구현
- 매개변수 : score(object), sortedScore(array)
- return값 : sortedScore
7. 정렬된 sortedScore 배열에서, 최대 5개만 가져오는 getTopFive 함수 구현
- 매개변수 : sortedScore, answer
- return값 : answer