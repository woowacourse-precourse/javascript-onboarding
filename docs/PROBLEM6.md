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

| forms | result |
| --- | --- |
| [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ] | ["jason@email.com", "jm@email.com", "mj@email.com"] |

### 기능 구현
- findAtIndex(email)
	- 이메일에 포함되는 '@'문자의 인덱스번호를 반환합니다.

- isValidEmail(forms)
	- 이메일이 제한사항에 충족하는 형태의 입력값인지 확인합니다.
	- 이메일의 길이 제한사항과, 도메인을 'email.com'으로 제한하는 조건을 추가해주었습니다.

- checkKorean(char)
	- 닉네임으로 들어오는 문자들이 한글인지 판단하는 함수입니다.

- isValidNickName(forms)
  - 입력받은 배열 forms에서 각 요소별 닉네임의 유효성을 확인합니다.
  - 닉네임의 길이 제한사항과, 한글로만 이루어져있는지를 확인합니다.

- substrNickName(nickName)
  - 닉네임이 중복으로 판단되는 조건은 '같은 글자가 연속적으로 포함되는 닉네임' 입니다. 따라서 2자 이상 중복되면 중복 닉네임으로 판단하기 위해 닉네임을 2자씩 부분 배열로 만들어주었습니다.
  - substring을 사용하여 닉네임 문자열마다 2자씩 쪼개어 반환하는 배열에 넣어주었습니다.

- getCheckArr(forms)
  - 각 닉네임 별 substrNickName 배열의 요소들을 하나로 합쳐주는 배열 checkArr을 반환합니다.

- isOverlapInCheckArr(checkArr, substrNickName)
  - checkArr의 요소와 substrNickName이 같은 경우를 filter로 찾고, 그 배열의 길이가 1이 아니라면 중복이 있다는 뜻이므로 true를 반환합니다.

- getOverlapArr(forms, checkArr)
  - overlapArr 배열을 만들어줍니다.
  - isOverlapForm 함수를 통해 forms 배열 요소들 중 중복으로 확인되는 요소들을 overlapArr에 넣어줍니다.

- isOverlapForm(form, checkArr)
  - forms의 각 요소 별 닉네임의 부분 배열을 구해준 뒤, isOverlapInCheckArr를 실행합니다.
  - true가 반환되었다면 다시 true를 반환합니다.

- checkOverlap(forms)
  - getCheckArr 함수를 통해 checkArr배열을 만들어줍니다.
  - getOverlapArr 함수를 통해 overlapArr배열을 만들어줍니다.
  - overlapArr를 반환할 때 sort함수를 이용하여 오름차순으로 정렬해서 반환합니다.

- problem6(forms)
  - 인자의 유효성을 검사합니다.
  - checkOverlap 함수를 실행하고, 반환받은 값을 반환합니다.

