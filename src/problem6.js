function requirements(arr) {
  if (arr.length >= 1 && arr.length <= 10000) {
      
      let emailList = arr.flat().filter(element => element.includes("@"));

      if (emailList.every(element => element.includes("@email.com"))) {
          if (emailList.every(element => element.length >= 11 && element.length < 20)) {

              let nicknameList = arr.flat().filter(element => !element.includes("@"));

              if (nicknameList.every(element => (element.length >= 1 && element.length < 20))) {
  
                  let korean = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g;
                  
                  if (nicknameList.every(element => element.match(korean)) === true); {
                      return true;
                  }
              }
          }
          
      }
  }
  return false;
}

function problem6(forms) {
  let formsDuplicate = [...forms];
  let answer = [];
  let duplicates;
  let i = 0;
  let j = 0;
  if (requirements(forms) === true) {
      while (i < forms.length) {

          while (j < (forms[i][1].length - 1)) {
            let compare = forms[i][1].slice(j, j + 2);
      
            duplicates = formsDuplicate.filter(element => element[1].includes(compare));
            
            formsDuplicate = formsDuplicate.filter(element => !element[1].includes(compare));
      
            answer.push(duplicates);
      
            j++;
          }
      
          i++;
      
        }
      
        answer = answer.flat().flat().filter(item => item.includes("@"));
        answer = answer.filter((item, index) => answer.indexOf(item) === index).sort();
      
        return answer;
  }
}



module.exports = problem6;