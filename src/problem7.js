function problem7(user, friends, visitors) {
    var answer = [];
    var userfr = [];
    var usernf = [];
    var usernfN = [];
    for(var i = 0; i<friends.length; i++){
        if(friends[i].includes(user))
            if(friends[i][0] == user)userfr.push(friends[i][1]);
            else userfr.push(friends[i][0]);
    }

    for(var i = 0; i<friends.length; i++){
        if(!friends[i].includes(user)){
               if(userfr.includes(friends[i][1])){
                    
                    if(!usernfN.includes(friends[i][0])) {
                        usernf.push([friends[i][0], 10]);
                        usernfN.push(friends[i][0]);
                    }
                    else {
                        usernf[usernfN.indexOf(friends[i][0])][1] += 10;
                    }

                }else if (userfr.includes(friends[i][0])){
                    
                    if(!usernfN.includes(friends[i][1])) {
                        usernf.push([friends[i][1], 10]);
                        usernfN.push(friends[i][1]);
                    }
                    else {
                        usernf[usernfN.indexOf(friends[i][1])][1] += 10;
                    }

                }else{
                    usernf.push([friends[i][0], 0]);
                    usernf.push([friends[i][1], 0]);
                }
        }
    }

    for(var i =0; i<visitors.length; i++){
        if(!userfr.includes(visitors[i])){
            if(usernfN.includes(visitors[i])){
                usernf[usernfN.indexOf(visitors[i])][1] += 1;
            }else{
                usernf.push([visitors[i], 1]);
                usernfN.push(visitors[i]);
            }
        }
    }

    usernf.sort((function(v1, v2){
            if(v2[1] > v1[1]){
                return 1;
            }else if(v2[1] <v1[1]){
                return -1;
            }else{
                if(v1[0] < v2[0]){
                    return -1;
                }else if(v1[0] > v2[0]){
                    return 1;
                }else{
                    return 0;
                }
            }
        }));
    
    var count = 0;
    for(var i = 0; i<usernf.length; i++){
        if(usernf[i][1] > 0 && !answer.includes(usernf[i][0])){
            answer.push(usernf[i][0]);
            count++;
        }else break;
        if(count == 5)break;
    }
    return answer;
}
module.exports = problem7;