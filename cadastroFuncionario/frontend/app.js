import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser'
// import fetch from 'node-fetch';

const app = express();


//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//TEMPLATE
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.static('public'))

//Rotas
app.get('/', function (req, res) {

    fetch('http://localhost:3000/funcionarios', {method: 'GET'})
    .then(resp => resp.json())
    .then(resp => res.render('login', 
    {
        dados: resp,
        title: 'Home | Login',
        style: 'login',
        script: 'login'
    }
    ))

    // res.render('login')
});


// app.post('/teste', function(req, res){
//     res.write('O nome informado: ' + req.body.nome)
//     res.end()
// })

app.post('/teste', function(req, res){
    let nome = req.body.nome
    let password = req.body.password

    let dados = {'nome': nome, 'password': password}

    fetch('http://localhost:3000/funcionarios',{
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {'Content-Type':'application/json'}
    })
    .then(res.redirect('/'))
})

app.listen('8080')