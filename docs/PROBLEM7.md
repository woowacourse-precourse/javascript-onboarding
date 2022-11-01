## 함수 설명

### <MyError클래스>

설명 : 제한 사항 처리를 담당하는 (상위) 클래스

- checkLimit() : 하위 클래스에 checkLimit()함수를 강제하는 오버라이딩 구현
- occurError() : 하위 클래스에 occurError()함수를 강제하는 오버라이딩 구현
- checkAllError() : 모든 하위 클래스의 인스턴스를 받아 에러 처리 동작 수행

### <UsersError클래스>

설명 : 주어진 입력값 중 users에 대한 제한 사항 처리를 담당하는 (하위) 클래스

- checkLimit() : user의 길이가 1이상 30미만인지 확인
- checkLower() : user가 소문자인지 확인
- occurError() : user에 대한 모든 에러 확인

### <FriendsError클래스>

설명 : 주어진 입력값 중 friends에 대한 제한 사항 처리를 담당하는 (하위) 클래스

- checkLimit() : friends의 배열 길이가 1이상 10000미만인지 확인
- checkIDLimit() : friends 배열 원소값(아이디)의 길이가 1이상 30미만인지 확인
- checkIDListLimit() : friends 배열 길이가 2인지 확인
- occurError() : friends에 대한 모든 에러 확인

### <VisitorsError클래스>

설명 : 주어진 입력값 중 visitors에 대한 제한 사항 처리를 담당하는 (하위) 클래스

- checkLimit() : visitors의 배열 길이가 1이상 10000이하인지 확인
- occurError() : visitors에 대한 모든 에러 확인

### <SNSModel클래스>

설명 : 메인 로직 구현 시 필요한 데이터 자료구조(`친구 관계그래프`, `알고리즘 우선순위 스코어보드`)를 저장하는 클래스

- getFriendRelation() : 친구관계그래프(Map 자료형)을 리턴
- getScoreBoard() : 알고리즘 우선순위 스코어보드(Object 자료형)을 리턴
- saveFriendGraph() : 주어진 friends 배열에 친구 관계를 map 자료형에 저장
- makeFriendGraph() : 친구관계 그래프를 만들고 만든 결과값 리턴 `({'mrko', ['donut', 'b'], 'donut': ['mrko', 'c'] })`
- makeScoreBoard() : 알고리즘에 뜰 수 있는 사람들에 한 해 스코어보드를 만들고 결과값 리턴

### <SNSAlgorithm클래스>

설명 : 메인 로직 구현 시 필요한 기능들을 구현한 클래스

- getFriendsFor(person) : person의 친구들을 배열로 리턴
- isRecommand(person) : user의 SNS알고리즘에 해당 사람이 알고리즘에 떠도 되는지 확인
- scroeFriendToFriend() : 친구의 친구를 찾아(추천 알고리즘에 떠도 되는) 그 사람에게 10점을 준다.
- scoreVisitor() : 방문자 중 추천 알고리즘에 떠도 되는 사람에게 1점을 준다.
- recommand() : 알고리즘 우선순위 스코어보드를 보고 최종 추천인 5인을 선발한다. (최종 결과값)

### 그 외

제가 어떤 식으로 이렇게 많은 클래스로 분리했는지는 [우아한 테크코스 프리코스 1주차 회고 링크](https://velog.io/@turtle601/%ED%9A%8C%EA%B3%A0-%EC%9A%B0%EC%95%84%ED%95%9C-%ED%85%8C%ED%81%AC%EC%BD%94%EC%8A%A4-5%EA%B8%B0-1%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0)를 통해서 확인 가능합니다!!

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
