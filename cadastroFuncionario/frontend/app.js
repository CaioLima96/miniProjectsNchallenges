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

    res.render('login',
        {
            layout: 'main',
            title: 'Login | Cadastrinator',
            style: 'login',
            script: 'login'
        }
    )
});

app.get('/dashboard/funcionarios', function (req, res) {

    fetch('http://localhost:3000/funcionarios', { method: 'GET' })
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

app.get('/dashboard/cadastrarfuncionario', function (req, res) {

    res.render('cadastrarFuncionario',
        {
            layout: 'dashboard',
            title: 'Cadastrar Funcionário | Cadastrinator',
            style: 'cadFuncionario',
            script: 'cadFuncionario'
        })
});

app.post('/cadastrarfuncionario', function (req, res) {

    let nome = req.body.nome
    let idade = req.body.idade
    let email = req.body.email
    let cargo = req.body.cargo
    let endereco = req.body.endereco
    let salario = req.body.salario
    let status = req.body.status
    let dataAdmissao = req.body.dataAdmissao

    let dados = {
        'nome': nome,
        'idade': idade,
        'email': email,
        'cargo': cargo,
        'endereco': endereco,
        'salario': salario,
        'status': status,
        'dataAdmissao': dataAdmissao
    }

    fetch('http://localhost:3000/funcionarios', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res.redirect('/dashboard/funcionarios'))
})

app.get('/dashboard/editarFuncionario', function(req, res) {
    res.render('editarFuncionario',
    {
        layout: 'dashboard',
        title: 'Editar Funcionario | Cadastrinator',
        style: 'editarFuncionario',
        script: 'editarFuncionario'
    })
})


app.listen('8080')