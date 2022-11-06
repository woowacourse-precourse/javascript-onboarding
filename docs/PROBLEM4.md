1. 알파벳을 매개변수로 받아 청개구리 사전에 해당하는 문자를 return하는 frogDictionary 함수를 선언한다.
   - charCodeAt 메서드를 사용하여 알파벳을 아스키코드로 변환한다.
   - 대문자일 때는 155에서 해당 알파벳 아스키코드를 뺀다.
   - 소문자일 때는 219에서 해당 알파벳 아스키코드를 뺀다.
   - fromCharCode 메서드를 사용하여 아스키코드에서 알파벳으로 변환 후 return한다.
2. 알파벳인지 아닌지 확인하는 alphabelCheck 함수를 선언한다.
   - 알파벳일 때는 true
   - 알파벳이 아닌 문자일 때는 false
3. problem4에서 frogDictionary 함수와 alphabelCheck 함수를 사용하여 기능을 구현한다.
