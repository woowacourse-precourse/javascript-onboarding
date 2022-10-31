function problem6(forms) {
  
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
function findNickname(forms){
  let nicknames =[];
  let emails = [];

  forms.forEach(element => {
    nicknames.push(element[1])
    emails.push(element[0])
    
  });

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

console.log(findNickname(forms))


module.exports = problem6;
