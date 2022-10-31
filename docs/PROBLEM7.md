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

### 요구 사항 분석

- friends
  - [x] user의 친구를 찾는다.
  - [x] 친구 관계를 구한다. (friends 이차원 배열을 사람과 친구목록의 key-value로 변환한다.)
  - [x] user와 친구가 아닌 사람의 친구가 user의 친구와 동일한지 찾는다.
  - [x] 동일한 친구의 수 \* 10점
- visitors
  - [x] 방문자의 방문 횟수를 구한다.
  - [x] 함께 아는 친구와 방문 횟수의 합을 구한다.
- result
  - [x] 함께 아는 친구의 수 점수와 방문 횟수 점수 더하기
  - [x] 점수 높은 순으로 정렬한다. 추천 점수가 같다면 이름순으로 정렬한다.
  - [x] 점수가 0인 경우 제외한다.
  - [x] 점수가 가장 높은 순으로 최대 5명을 return 한다.
  - [x] 이미 친구인 경우 결과에서 제외한다.

### 리팩토링

- [x] 불필요한 함수 제거 (findUserFriends -> relations[user])
- [x] 예외사항 분리 (이미 친구인 경우, 점수가 0인 경우)
- [x] crewScores 구하는 과정 (reduce, Object.entries -> reduce)
- [x] 함께 아는 친구 점수 객체에 방문 횟수 점수 더하기 (getVisitorScores, getCrewScores -> addVisitorScores)
- [x] 함수, 변수명 수정 (exceptCrew -> filterValidCrew, exception -> valid)
- [x] user와 user friends 선 필터링 (validVisitors, validRelations)
- [x] 크루 총합 점수 함수 분리 (getCrewScores)
- [x] 필터 함수 수정 (filterValidCrew, filterValidScore)
- [x] 크루 이름 추출 분리
- [x] 변수명 수정 (validCrews -> validCrewScores)
