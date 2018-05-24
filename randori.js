/* 
    Ecrivez une fonction minutesTillMidnight(heure), où heure est sous la forme "HH:MM".
    Cette fonction renvoie le nombre de minutes qui séparent heure de minuit.
*/


function minutesTillMidnight(heure){
    let heure = new Date();
    heure.setHours(17,0,0,0) // soit on met une valeur arbitraire soit celle de l'ordi
    let minuit = new Date()
    minuit.setHours(24,0,0,0) // defini l'heure, les minutes, les secondes et les milisecondes.
    console.log(minuit.toString())
    console.log(heure.toString())
    let resultMilisecondes = minuit.getTime() - heure.getTime()
    console.log(resultMilisecondes) // resultat en milisecondes
    let arrondirMinutes = Math.ceil(resultMilisecondes/60000) // Math.ceil() retourne le plus petit entier supérieur ou égal au nombre donné.
    console.log(arrondirMinutes)
    return arrondirMinutes
    }
    
    MinutestoMidnight()
    
    function convertMinutesToHours(){
    
    }
    