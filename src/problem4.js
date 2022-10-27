function problem4(word) {
    
    let answer =[];
    const arr= Array.from(word);
    let normal_Number = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ' '];

    let change_Number = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A',
    'z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i', 'h','g','f','e','d','c','b','a',' '];
    
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<normal_Number.length; j++){
        if(arr[i] == normal_Number[j]){
          answer[i] =  change_Number[j];
        }
      }
    }
    
    answer = answer.toString()
    let replaced_answer = answer.replace(/,/g, '');
      return replaced_answer;
  }

  
module.exports = problem4;
