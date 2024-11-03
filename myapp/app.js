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
const postController = require('./Controllers/postController.js');
const posts = require("./Data/posts.js");
const app = express();
app.use(express.static('public'))

const port = 3005;

app.get('/', (req, res) => {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const {title, content, image, tags} = post
        const markup = 
        `<h1>Benvenuto nel mio blog!</h1>
        <div class="col-4 pb-3>
        <div class="post d-flex">
        <spam>${title}</spam
        <p>${content}</p>
        <img src"${image} alt="photo">
        <spam>${tags}</spam>
        </div>
        </div>
        `
        res.send(markup) 
    }
})

app.get('/posts', postController.index)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

