import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser'
// import fetch from 'node-fetch';

const app = express();


//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//TEMPLATE
// app.engine('handlebars', engine({defaultLayout: 'main'}));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.static('public'))

//Rotas
app.get('/', function (req, res) {

    fetch('http://localhost:3000/funcionarios', {method: 'GET'})
    .then(resp => resp.json())
    .then(resp => res.render('login', 
    {
        layout: 'main',
        dados: resp,
        title: 'Login | Cadastrinator',
        style: 'login',
        script: 'login'
    }
    ))
});

app.get('/funcionarios', function (req, res) {

    fetch('http://localhost:3000/funcionarios', {method: 'GET'})
    .then(resp => resp.json())
    .then(resp => res.render('funcionarios', 
    {
        layout: 'dashboard',
        dados: resp,
        title: 'Funcionários | Cadastrinator',
        style: 'funcionarios',
        script: 'funcionarios'
    }
    ))
});

app.get('/cadastrarfuncionario', function (req, res) {

    res.render('cadastrarFuncionario', 
    {
        layout: 'dashboard',
        title: 'Cadastrar Funcionário | Cadastrinator',
        style: 'cadFuncionario',
        script: 'cadFuncionario'
    })
});

app.post('/teste', function(req, res){
    res.write('O nome informado: ' + req.body.nome)
    res.end()
})


app.listen('8080')