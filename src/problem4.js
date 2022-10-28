function replaceItem(item, index, array){
  const checkEng = /[a-zA-Z]/;
  if(!checkEng.test(item)) return;
  
}

function problem4(word) {
  let wordArr = word.split('');

  wordArr.forEach(replaceItem);
  
}

module.exports = problem4;
