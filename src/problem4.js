function problem4(word) {

  if(word.length < 1 || word.length > 1000){
    return false;
  }
  
  let arr = word.split("");
  
  for(let i=0; i < arr.length; i++) {
    if(arr[i].charCodeAt()>="A".charCodeAt() && arr[i].charCodeAt()<="Z".charCodeAt()){
      arr[i] = String.fromCodePoint("A".charCodeAt()+"Z".charCodeAt()-arr[i].charCodeAt());
    }else if(arr[i].charCodeAt()>="a".charCodeAt() && arr[i].charCodeAt()<="z".charCodeAt()){
      arr[i] = String.fromCodePoint("a".charCodeAt()+"z".charCodeAt()-arr[i].charCodeAt());
    }
  }
  const newWord = arr.join("");
  return newWord;
}

module.exports = problem4;
