## 🚀 기능 요구 사항

우아한테크코스에서는 교육생(이하 크루) 간 소통 시 닉네임을 사용한다. 간혹 비슷한 닉네임을 정하는 경우가 있는데, 이러할 경우 소통할 때 혼란을 불러일으킬 수 있다.

혼란을 막기 위해 크루들의 닉네임 중 **같은 글자가 연속적으로 포함** 될 경우 해당 닉네임 사용을 제한하려 한다. 이를 위해 같은 글자가 연속적으로 포함되는 닉네임을 신청한 크루들에게 알려주는 시스템을 만들려고 한다.

신청받은 닉네임 중 **같은 글자가 연속적으로 포함** 되는 닉네임을 작성한 지원자의 이메일 목록을 return 하도록 solution 메서드를 완성하라.

### 제한사항

- 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주한다.
- 크루는 1명 이상 10,000명 이하이다.
- 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
- 신청할 수 있는 이메일은 `email.com` 도메인으로만 제한한다.
- 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
- result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다.

### 실행 결과 예시

| forms                                                                                                                                                 | result                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ] | ["jason@email.com", "jm@email.com", "mj@email.com"] |

<hr>

### 기능 목록

1. result에 같은 이메일이 2번 이상 들어가지 않도록 set으로 선언하고, allSlices은 모든 닉네임을 2글자씩 자른 모든 단어(nameSlice)들을 key로 저장하고 그 단어들의 출현 빈도를 나타내는 개수를 value로 저장하는 map으로 선언한다.
2. firstSlice(nameSlice, allSlices): 닉네임 내 연속적인 2글자 nameSlice와 allSlices map 객체를 인자로 받아 allSlices에 nameSlice인 key가 존재하지 않는다면 해당 key를 생성하고 value를 0으로 선언한다.
3. addCount(nameSlice, allSlices): 닉네임의 연속적인 2글자 nameSlice와 allSlices map 객체를 인자로 받아 allSlices 안에 nameSlice에 해당하는 value(출현 빈도 수)를 1만큼 증가시킨다.
4. getSlices(forms, allSlices, index): 크루 목록 forms와 allSlices map 객체, forms의 현재 인덱스 값인 index를 인자로 받아 forms[index]에 해당하는 교육생의 닉네임을 연속적인 2글자로 자를 수 있는 경우들을 찾고 이 경우들을 firstSlice(), addCount()를 호출하여 allSlices에 반영한다.
5. getAllSlices(forms, allSlices): 크루 목록 forms와 allSlices map 객체를 인자로 받아 모든 크루들의 닉네임에 대해 getSlices()를 실행한다.
6. addEmail(nameSlice, forms, result): 닉네임의 연속적인 2글자 문자열 nameSlice, 크루 목록 forms, 중복이 있는 크루의 이메일을 저장하는 result set 객체를 인자로 받아 모든 크루에 대해 반복문을 수행하며 크루의 닉네임에 nameSlice가 포함되었다면 result에 크루의 이메일을 추가한다.
7. hasManyOverlaps(sliceInfo, forms, result): allSlices map 객체의 각 원소인 sliceInfo(닉네임 일부 문자열, 출현 빈도 수), 크루 목록 forms, 닉네임 일부가 중복된 크루의 이메일을 저장하는 result set 객체를 인자로 받아 sliceInfo[1](출현 빈도 수)가 1보다 크면 addEmail()을 호출하여 result에 해당하는 크루들의 이메일을 추가한다.
8. getEmails(allSlices, forms, result): allSlices map 객체, 크루 목록 forms, 닉네임 일부가 중복된 크루의 이메일을 저장하는 result set 객체를 인자로 받아, allSlices의 각 원소마다 반복문을 수행하며 hasManyOverlaps()를 호출하여 중복 부분이 2회 이상이면 해당 크루들의 이메일을 result에 저장한다.
9. result set객체를 배열 형식으로 변환하여 answer에 대입하고, answer 배열을 오름차순으로 정렬한다.
