function problem4(word1) {
  
  var answer=[];
  let lookup_table=new Map();
  let word=word1.split('')
  for(let i=0;i<26;i++){
    lookup_table.set(String.fromCharCode(97+i),String.fromCharCode(122-i))
    lookup_table.set(String.fromCharCode(65+i),String.fromCharCode(90-i))
  } 
const Change=(element)=>{
  if(lookup_table.get(element)!==undefined){
    element=lookup_table.get(element)
    answer.push(element)
  }else if(element===' '){
    answer.push(' ')
  }else{
    answer.push(element)
  }
}
word.map(element=>Change(element))
answer=answer.join('')
  return answer;
}
module.exports = problem4;
