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

# problem6 구현 코드

## 메인 함수

```
function problem6(forms) {
  var answer = [];
  let map = new Map();
  let rejectIndex = [];
  handleExcept(forms, rejectIndex);
  setMap(forms, map);
  checkNickname(forms, map, rejectIndex);
  deduplicate(rejectIndex);
  pushAnswer(answer, forms, rejectIndex);
  return answer;
}
```

## 입력 예외처리 함수

```
function handleExcept(forms, rejectIndex){
  handleFormSize(forms);
  handleString(forms, rejectIndex);
}
```

## 입력 크기 예외처리 함수

```
function handleFormSize(forms){
  if(forms.length > 10000){
    forms = forms.slice(0, 10000);
  }
}
```

## 입력 문자열 예외처리 함수

- 이메일 형식이 email.com인지
- 이메일 크기가 11자 미만 or 20자 이상
- 크루 닉네임 크기가 0인지
- 크루 닉네임 글자가 전부 한글인지 => 정상적으로 작동하지 않아 주석처리

```
function handleString(forms, rejectIndex){
  for(let i = 0; i < forms.length; i++){
    const emailForm = "email.com";
    let crueEmail = forms[i][0];
    let crueNickname = forms[i][1];
    if((crueEmail.indexOf(emailForm) == -1)){
      rejectIndex.push(i);
    }
    else if((crueEmail.length < 11) || (crueEmail.length >= 20)){
      rejectIndex.push(i);
    }
    else if((crueNickname.length == 0) || (crueNickname.length >= 20)){
      rejectIndex.push(i);
    }
  }
}
```

## forms의 모든 닉네임을 2글자씩 분할하여 해시맵에 넣는 함수

```
function setMap(forms, map){
  for(let i = 0; i < forms.length; i++){
    for(let j = 0; j < forms[i][1].length - 1; j++){
      let tmp = forms[i][1].substr(j,2);
      if(map.has(tmp)){
        map.set(tmp, map.get(tmp) + 1);
      }
      else{
        map.set(tmp, 1);
      }
    }
  }
}
```

## 중복된 닉네임이 있는지 체크하는 함수

### 예외처리된 사용자의 경우 index가 중복으로 들어갈 수 있기 때문에 함수를 종료하기 전 반환 배열을 오름차순 sort

```
function checkNickname(forms, map, rejectIndex){
  for(let i = 0; i < forms.length; i++){
    for(let j = 0; j < forms[i][1].length - 1; j++){
      let tmp = forms[i][1].substr(j,2);
      if(map.get(tmp) > 1){
        rejectIndex.push(i);
        break;
      }
    }
  }
  rejectIndex.sort();
}
```

## 반환되는 사용자 인덱스 리스트 중 중복입력된 사용자의 인덱스를 하나만 남게 제거하는 함수

```
function deduplicate(rejectIndex){
  rejectIndex = rejectIndex.filter(function(item, index){
    return rejectIndex.indexOf(item) === index;
  });
}
```

## 정답에 반환되는 사용자들의 이메일을 넣고 오름차순으로 정렬하는 함수

```
function pushAnswer(answer, forms, rejectIndex){
  for(let i = 0; i < rejectIndex.length; i++){
    answer.push(forms[rejectIndex[i]][0]);
  }
  answer.sort();
}
```
