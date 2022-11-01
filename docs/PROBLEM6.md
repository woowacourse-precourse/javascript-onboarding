## 🚀 기능 목록.
1. 이름을 두개씩 끊어서 담는 배열 생성(한명씩) `makeOverlappingArr(crewName)`

2. 겹치는 이름이 있는 걸 모두 확인하기 위해 이름에 두개씩 끊어서 obj생성`makeOverlappingObj(forms)`
    - 이름의 배열값을 하나씩 넣어서 obj 생성(전체)
    - ex)"제이엠"=> {"제이":1, "이엠":1}
         "제이슨" => {"제이":2, "이엠":1, "이슨":1}

3. 같은 글자가 연속적으로 포함되는 경우를 확인 `checkName(name)`
    - obj의 value가 1보다 크면 true
    - 포함되지 않는 경우에는 false

4. 이메일과 이름을 확인 후, <answer>에 email 추가.

5. 만들어진 <answer> 배열 전처리 `preAnswer`
    - 오름차순 / - 중복 제거

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
