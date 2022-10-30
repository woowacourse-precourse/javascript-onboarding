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

------------------------------
<br>

## [작성자] : 김동우(DongWooKim97) 
</br> 

## 📝 구현할 기능 목록
</br> 

### ✔️ 기능 1. 입력값에 대한 유효성 및 에러(예외처리) 검사
<br>

  - 입력값에 에러가 없는지, 입력 양식이 유효한지 검사한지 검사  

    - 제시된 크루의 수인 1명 이상 10,000명 이하인지 확인 -> ```crewMemberInRange()```

    - 닉네임이 한글인지 확인 -> ```isNicknameKorean()```

    - 닉네임이 1자 이상 20자 이하인지 확인 -> ```nicknameLengthInRange()```
    
    - 이메일의 형식에 부합하는지 확인 -> ```correctEmail()``` 

    - 이메일의 길이가 11자 이상 20자 미만인지 확인 -> ```emailLengthInRange()```

    - 이메일의 도메인 형식이 '@email.com'에 부합하는지 확인 -> ```correctDomainType()```

</br> 

### ✔️ 기능 2. nicknameList를 순회하며 중복값을 검사하는 기능 추가
<br>

  - forms(입력값)로 부터 이메일와 닉네임을 분리하여 따로 저장 / ```const emailList``` 와 ```const nicknameList```

  - 우선 for-loop을 이용하여, ```nicknameList```를 전체 순회하는 작업을 한다.
    - ```for (let i = 0; i < nicknameList.length; i++)```
    - 여기서 전체순회를 하는 이유 ❓ 모든 인덱스의 닉네임들이 중복값이 있는지 확인해야 하기 때문 ❗️

<br>

  - 첫 for문 내부에 for문을 하나 더 만든다.  -> ```for (let j = 0; j <= nicknameList[i].length - 2; j++)```
  - 두 번째 반복문은 첫 반복문에서 바라보고 있는 인덱스의 값을 ```slice()```하여 중복값 확인하는 용도.
    - 문제에서, 두 글자 이상의 중복된 닉네임이 있는지 확인하라고 명시 ❗️
    - 또한 ```nicknameList```를 만들 때 닉네임의 길이로 오름차순 했기에 ```nicknameList```의 맨 앞 요소는 제일 길이가 짧은 요소 ❗️

<br>


  - 두번째 반복문 내부에 마지막 for문을 만든다.  -> ```for (let k = 0; k < nicknameList.length; k++)```
    - 마지막 반복문은 첫 반복문에서 가져온 인덱스와 두 번째 반복문을 통해 해당 인덱스의 잘라낸 문자열을 비교하는 과정이다.
      - 이 반복문은 전체를 순회하는 이유 ❓ 모든 인덱스의 닉네임들이 잘라낸 문자열이 포함되어 있는지 확인하기 위해 ❗️
    - 즉, 잘라낸 문자열이 포함되어 있는 인덱스는 닉네임이 중복되었다고 판단 ❗️ 
    - ```dupliceCrewEmail.push(emailList[k])``` --> 해당하는 인덱스가 잘라낸 문자열이 중복되었기 때문에 이메일을 새로 생성한 배열에 ```push```한다.


      ```javascrpit
      for (let i = 0; i < nicknameList.length; i++) {
        for (let j = 0; j <= nicknameList[i].length - 2; j++) {
          const headSliceWord = nicknameList[i].slice(0 + j, leastDuplicateWord + j);
          for (let k = 0; k < nicknameList.length; k++) {
            if ((i !== k) && (nicknameList[k].includes(headSliceWord))) duplicateCrewEmail.push(emailList[k]) }}}
      
      ```



  


  

    
