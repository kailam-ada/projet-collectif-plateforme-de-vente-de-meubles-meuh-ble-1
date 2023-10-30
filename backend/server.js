const express = require('express');
const app = express();

const port =  3004;

app.use(express.json());


app.get('/', (req,res) =>{
    console.log(req.query);
    res.send('Voci la réponse du serveur Express !');
})

app.get('*', (req,res) =>{
    res.status(404).send('error');
})

app.post('/',(req,res) =>{
    console.log(req.body);
    res.send('ok')

})

app.listen(port, () => {
    console.log(`Le serveur Express est en cours d'écoute sur le port  ${port}`);
  });

