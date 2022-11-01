function replaceItem(item, index, array){
  const checkEng = /[a-zA-Z]/;
  if(!checkEng.test(item)) return;

  if(item == item.toUpperCase()){
    array[index] = String.fromCharCode((155 - item.charCodeAt(0)))
  } else{
    array[index] = String.fromCharCode((219 - item.charCodeAt(0)))
  }
}

function problem4(word) {
  let wordArr = word.split('');

  wordArr.forEach(replaceItem);
  return wordArr.join('');
  
}

module.exports = problem4;