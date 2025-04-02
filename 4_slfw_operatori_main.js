/*ESERCITAZIONE SELFWORK 4 OPERATORI JS MODULO 6 COESO AULAB */

//DICHIARAZIONE E INIZIALIZZAZIONE VARIABILI PRENDENDO SPUNTO DALLA CANZONCINA.

    let totgatti = 44; // Totale dei Gatti.
    let gattinfila = 6;// Numero Gatti Per Fila.
    let numfile = (parseInt (totgatti / gattinfila));//Numero Totale delle File ricavabili dal totale dei gatti suddivisi per 6 per ogni fila.
    let restogatti = totgatti % gattinfila; // Quantità di Gatti restanti in base alla suddivisione per 6 delle file.
    let gattinuovafila = gattinfila - restogatti;// Numero di gatti necessari per creare una nuova fila.
   
    console.log(`Ci sono ${totgatti} 
gatti in fila per ${gattinfila}
per un totale di ${numfile} file di gatti con un avanzo di ${restogatti} e ne mancano ${gattinuovafila} per una nuova fila`);

// DICHIARO E INIZIALIZZO UNA VARIABILE PER VERIFICARE I TIPI DI DATO RICAVATI DALLE OPERAZIONI E PRESENTI NELLE VARIABILI.

    let tipodati = [typeof totgatti, typeof gattinfila, typeof numfile, typeof restogatti, typeof gattinuovafila];
        
console.log('Questi sono il tipo di dati presenti nelle variabili:');
console.log(tipodati);
     
    