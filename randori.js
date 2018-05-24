/* 
    Ecrivez une fonction minutesTillMidnight(heure), où heure est sous la forme "HH:MM".
    Cette fonction renvoie le nombre de minutes qui séparent heure de minuit.
*/
var heure = new Date('May 24, 18 11:21'); // 'May 24, 18 11:21'
var minuit = new Date('May 25, 18 24:00')
var result = minuit.getHours()+ ":" +minuit.getMinutes() -  heure.getHours()+ ":" +heure.getMinutes();

console.log(heure.getHours()+ ":" +heure.getMinutes());
console.log(minuit.getHours()+ ":" +minuit.getMinutes());

console.log(result);