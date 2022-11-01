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

---

## 🕹구현 기능목록

✅ 배열을 참고하여 network Map을 형성하는 함수

- `function updateNetwork(friends, network)` : 이차원 배열 friends와 빈 Map이 인자로 들어갔을 때 `이름=>[친구1, 친구2, ...]` 형태의 Map으로 업데이트 하는 함수

✅ 친구목록을 참고하여 score를 추가하는 함수

- `function updateNetworkScore(user, network, scoreMap)` : 친구목록을 참고하여 함께아는 친구가 있을 경우 scoreMap에 점수를 10점 추가하는 함수

✅ 방문자들을 참고하여 score를 추가하는 함수

- `function updateVisitScore(visitors, scoreMap)` : 방문자를 참고하여 1회 방문했을 경우 scoreMap에 점수를 1점 추가하는 함수

✅ 점수를 내림차순, 같은 점수면 이름을 오름차순으로 정렬하는 함수

- `function getSortedScoreArr(scoreMap)` : Map scoreMap이 인자로 주어졌을 때, 점수를 내림차순, 같은 점수면 이름을 오름차순으로 정렬한 배열을 반환

✅ 이미 user의 친구를 추천목록에서 삭제하는 함수

- `function removeAlreadyFriend(user, network, scoreMap)` : 문자열 user와 Map인 network와 scoreMap이 주어졌을 때 network를 참고하여 user의 친구는 scoreMap에서 삭제하는 기능

✅ 배열에서 앞쪽 5개의 첫번째 요소를 배열로 반환하는 함수

- `function select5Person(sortedArrSet)` : 이차원 배열이 인자로 주어졌을 때 앞쪽 5개의 요소를 반환하게 되는데 각 요소의 첫번째 요소만 배열로 반환

✅ solution 함수

- forms에서 같은 글자가 연속적으로 포함되는 사람의 이메일을 오름차순으로 정렬하여 반환
