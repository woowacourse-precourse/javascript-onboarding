function problem6(forms) {
  const nicknameArray = [];
  const errorUser = [];
  const errorUserEmail = []; 

for (const member of forms){
  const nickname = member[1];
  nicknameArray.push(nickname);
}

let dismantled = [];
for (const item of nicknameArray){
  const components = item.split('');
  dismantled.push(components);
}

const serialString = []; 
for (const components of dismantled){
  for(let i = 0; i < components.length-1; i++){
    serialString.push(components[i]+components[i+1]);
    }
}

const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index);
const duplicates = findDuplicates(serialString);
const duplicateSet = new Set(duplicates);
const duplicateArray = [...duplicateSet];

for (const item of nicknameArray){
  for(let i=0; i<duplicateArray.length; i++){
    if(item.indexOf(duplicateArray[i]) > -1){
    errorUser.push(item);
    }
  }
}

for (const member of forms){
  if(errorUser.indexOf(member[1])>-1){
    errorUserEmail.push(member[0])
    }
}

const answerSet = new Set(errorUserEmail);
const answerArray = [...answerSet];
const answer = answerArray.sort();
return answer;
}

module.exports = problem6;

//problem6 기능 목록
//[x] 유저들의 닉네임, 사용 제한 유저, 사용 제한 유저 이메일을 저장하기 위한 배열을 생성한다.
//[x] forms에서 유저들의 닉네임만을 추출하여 nicknameArray에 저장한다.
//[x]모든 닉네임에 대하여 2글자의 연속 문자열이 발생할 수 있는 모든 경우의 수를 계산한다.
//  [x] 모든 닉네임을 문자 단위로 분해한다.
//  [x] 발생할 수 있는 2글자의 연속 문자열들을 모두 계산해 배열에 저장한다.
//[x]계산된 경우의 수를 토대로 하여 현재 유저들 사이에서 발생할 수 있는 중복값을 구한다.
//  [x] 배열에서 중복된 값을 구하는 함수를 선언한다.
//    [x] 연속문자열 배열에서 중복값을 구하고, 중복되는 중복값은 삭제한다.
//[x]중복값이 포함되어있는 닉네임을 판별하여 사용 제한 유저 목록에 저장한다.
//[x]사용 제한 유저들의 이메일 주소를 추출하여 저장한다.
//[x]사용 제한 유저 이메일 목록에서 중복을 제거한 후 오름차 정렬한다.