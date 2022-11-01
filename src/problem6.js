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
}



module.exports = problem6;