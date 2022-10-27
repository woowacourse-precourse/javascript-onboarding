function problem6(forms) {
  const answerList = [];
  const nameArrays = [];
  const compareStrings = [];
  const duplicateNameList = []
  
  function findDuplicates(arr) {
    const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
    return [...new Set(filtered)]
  }
  
  forms.forEach((form)=>{
    nameArrays.push([...form[1]]);
  })
  nameArrays.forEach(nameArr=>{
    nameArr.forEach((string,index)=>{
      if (nameArr[index+1]===undefined){
        return;
      }
        compareStrings.push([string,nameArr[index+1]].join(""))
    });
  });
  
  const duplicateList = findDuplicates(compareStrings);
  
  nameArrays.forEach((nameArray,index)=>{
    nameArray.forEach((string,index2)=>{
      if (duplicateList.includes([string,nameArray[index2+1]].join(""))){
        duplicateNameList.push(nameArrays[index].join(""))
      }
    })
  })
  
  duplicateNameList.forEach(name=>{
    answerList.push(forms.find(form=>form[1]===name)[0]);
  })
  answerList.sort();
  return answerList;
}

module.exports = problem6;
