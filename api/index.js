const { default: axios } = require('axios');
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Inicial');
})

app.get('/deputados', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados').then(resultado => {

        res.send(resultado.data);
    })

})


app.get('/deputados/uf/:uf', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=' + req.params.uf).then(resultado => {

        res.send(resultado.data);
    })

})

app.get('/deputados/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados/' + req.params.id).then(resultado => {

        res.send(resultado.data);
    })
})

app.get('/deputados/:id/despesas', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados/' + req.params.id + '/despesas?itens=100').then(resultado => {

        res.send(resultado.data);
    })
})

app.get('/eventos/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    axios.get('https://dadosabertos.camara.leg.br/api/v2/eventos/').then(resultado => {

        res.send(resultado.data);
    })
})

app.get('/eventos/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    axios.get('https://dadosabertos.camara.leg.br/api/v2/eventos/' + req.params.id).then(resultado => {

        res.send(resultado.data);
    })
})

app.get('/eventos/:id/deputados', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    axios.get('https://dadosabertos.camara.leg.br/api/v2/eventos/' + req.params.id + '/deputados').then(resultado => {

        res.send(resultado.data);
    })
})

app.listen(3000, () => {
    console.log('alive');
})