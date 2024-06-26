Carosello Mono Array
===
**Consegna**  
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

**Milestone 1**  
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.  

**Milestone 2**  
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.  
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.  
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.  

**Milestone 3**  
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.  

**Bonus 1**  
Aggiungere il *ciclo infinito* del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.  

**Bonus 2**  
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.  
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.  

## Svolgimento
1. Creare un'array con dentro il percorso delle immagini
2. Creare un counter
3. Tramite un ciclo *for* inserire le immagini dinamicamente e concatenarle con un template literal all'HTML
4. Importare i bottoni a cui dare al click la funzione di counter ++/-- per scorrere tra le foto, ma in caso di inizio/fine carosello resettare il counter per renderlo infinito
5. Gestire la visibilità delle immagini non selezionate tramite la classe hide da aggiungere/togliere
