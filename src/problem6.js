function problem6(forms) {
    var answer = [];

    for(var i = 0; i<forms.length; i++){
        
        for(var j = 0; j<forms[i][1].length-1; j++){
            var pt = forms[i][1].substring(j, j+2);
            
            for(var k = 0; k<forms.length; k++){
                
                if(i != k && forms[k][1].includes(pt)){
                    
                    if(!answer.includes(forms[i][0])) answer.push(forms[i][0]);
                    
                    if(!answer.includes(forms[i][0])) answer.push(forms[k][0]);       
                
                }
            }
        }
    }
    answer.sort();
    return answer;
} 
module.exports = problem6;