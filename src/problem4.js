function problem4(word) {
  var answer;

  var spell=String(word);
  var result='';

  for(let i=0; i<spell.length; i++){
    //대문자 변환
    if(spell[i]=='A'){
      result=result+'Z'
    }
    else if(spell[i]=='B'){
      result=result+'Y'
    }
    else if(spell[i]=='C'){
      result=result+'X'
    }
    else if(spell[i]=='D'){
      result=result+'W'
    }
    else if(spell[i]=='E'){
      result=result+'V'
    }
    else if(spell[i]=='F'){
      result=result+'U'
    }
    else if(spell[i]=='G'){
      result=result+'T'
    }
    else if(spell[i]=='H'){
      result=result+'S'
    }
    else if(spell[i]=='I'){
      result=result+'R'
    }
    else if(spell[i]=='J'){
      result=result+'Q'
    }
    else if(spell[i]=='K'){
      result=result+'P'
    }
    else if(spell[i]=='L'){
      result=result+'O'
    }
    else if(spell[i]=='M'){
      result=result+'N'
    }
    else if(spell[i]=='N'){
      result=result+'M'
    }
    else if(spell[i]=='O'){
      result=result+'L'
    }
    else if(spell[i]=='P'){
      result=result+'K'
    }
    else if(spell[i]=='Q'){
      result=result+'J'
    }
    else if(spell[i]=='R'){
      result=result+'I'
    }
    else if(spell[i]=='S'){
      result=result+'H'
    }
    else if(spell[i]=='T'){
      result=result+'G'
    }
    else if(spell[i]=='U'){
      result=result+'F'
    }
    else if(spell[i]=='V'){
      result=result+'E'
    }
    else if(spell[i]=='W'){
      result=result+'D'
    }
    else if(spell[i]=='X'){
      result=result+'C'
    }
    else if(spell[i]=='Y'){
      result=result+'B'
    }
    else if(spell[i]=='Z'){
      result=result+'A'
    }

    //소문자 변환
    else if(spell[i]=='a'){
      result=result+'z'
    }
    else if(spell[i]=='b'){
      result=result+'y'
    }
    else if(spell[i]=='c'){
      result=result+'x'
    }
    else if(spell[i]=='d'){
      result=result+'w'
    }
    else if(spell[i]=='e'){
      result=result+'v'
    }
    else if(spell[i]=='f'){
      result=result+'u'
    }
    else if(spell[i]=='g'){
      result=result+'t'
    }
    else if(spell[i]=='h'){
      result=result+'s'
    }
    else if(spell[i]=='i'){
      result=result+'r'
    }
    else if(spell[i]=='j'){
      result=result+'q'
    }
    else if(spell[i]=='k'){
      result=result+'p'
    }
    else if(spell[i]=='l'){
      result=result+'o'
    }
    else if(spell[i]=='m'){
      result=result+'n'
    }
    else if(spell[i]=='n'){
      result=result+'m'
    }
    else if(spell[i]=='o'){
      result=result+'l'
    }
    else if(spell[i]=='p'){
      result=result+'k'
    }
    else if(spell[i]=='q'){
      result=result+'j'
    }
    else if(spell[i]=='r'){
      result=result+'i'
    }
    else if(spell[i]=='s'){
      result=result+'h'
    }
    else if(spell[i]=='t'){
      result=result+'g'
    }
    else if(spell[i]=='u'){
      result=result+'f'
    }
    else if(spell[i]=='v'){
      result=result+'e'
    }
    else if(spell[i]=='w'){
      result=result+'d'
    }
    else if(spell[i]=='x'){
      result=result+'c'
    }
    else if(spell[i]=='y'){
      result=result+'b'
    }
    else if(spell[i]=='z'){
      result=result+'a'
    }
    else if(spell[i]==' '){
      result=result+' '
    }

  }

  answer=result;
  return answer;
}

module.exports = problem4;
