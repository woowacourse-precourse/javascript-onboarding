const SPLIT_LENGTH = 2;

const removeDuplicateElement = (arr) => {
  return [...new Set(arr)]
}

const sliceNickname = (nickname) => {
  const sliceNickname = [];
  for(let i = 0; i < nickname.length - 1; i += 1){
    let slice = nickname.substr(i, SPLIT_LENGTH);
    sliceNickname.push(slice);
  }
  return sliceNickname;
}

const getDuplicateNickname = (arr) => {
  return removeDuplicateElement(arr.filter((item, index) => arr.indexOf(item) !== index));
}

const isDuplicate = (nicknameList, nickname) => {
  return nicknameList.some((nick) => nickname.includes(nick));
}

function problem6(forms) {
  const sliceNicknameList = forms.reduce((acc, [_ , nickname]) => { 
    return [...acc, ...sliceNickname(nickname)];
  }, []);
  
  const duplicateNicknameList = getDuplicateNickname(sliceNicknameList);
  
  return removeDuplicateElement(
    forms
    .filter(([,nickname]) => isDuplicate(duplicateNicknameList, nickname))
    .map(([email,]) => email)
  ).sort();
}

module.exports = problem6;
