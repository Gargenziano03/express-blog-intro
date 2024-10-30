/*Esercizio
1. Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.
2. Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
3. Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
4. Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
5. La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
6. Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
7. Testare nel browser.
Bonus
1. Spostiamo l’array dei post in un file separato da importare poi dentro il controller
2. Creare una nuova rotta con cui stampare la lista in html come ul
3. Create una pagina statica html da cui far partire una chiamata ajax per consumare il vostro enpoint json.
*/




const express = require("express");
const app = express();
const port = 3005;

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

