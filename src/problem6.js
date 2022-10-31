function problem6(forms) {
  let nicknames =[];
  let emails = [];
  forms.forEach(element => {
    nicknames.push(element[1])
    emails.push(element[0])
    
  });

  // 조건에 부합하는 닉네임의 이메일을 추출
  let targetEmails = []
  for(let targetNickname of findNickname(nicknames)){
    let idx = nicknames.indexOf(targetNickname);
    targetEmails.push(emails[idx])
  }
  // 오름차순 정렬
  targetEmails.sort();

  console.log(targetEmails)
}

// 연속으로 중복된 문자들을 모은 배열 생성
function getConsecutiveStr(nickname){
  let wordList = new Set();
  for(let i =0;i<nickname.length;i++){
    for(let j = i+2;j<=nickname.length;j++){
      wordList.add(nickname.substring(i,j))
    }

  } return [...wordList];
}

// 중복된 문자를 가진 닉네임 추출
function findNickname(nicknames){

  // 공통으로 중복된 단어를 추출
  let temp = [];
  for(let nickname of nicknames){
    if(getConsecutiveStr(nickname).length != 1){
      temp.push((getConsecutiveStr(nickname)))
    } 
  } 
  let checkWord = [...new Set(temp.flat())];

// 중복된 단어를 가진 닉네임 추출
  let duplicatedNikname = [];
  for(let word of checkWord){
    for(let nickname of nicknames){
      if(nickname.includes(word)){
        duplicatedNikname.push(nickname)
      } 
    } break
  } return duplicatedNikname
    
  
  
}

const forms = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ];

problem6(forms)


module.exports = problem6;
