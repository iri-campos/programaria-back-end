const express = require("express") //iniciando o express
const router = express.Router() //configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid') //chamado o uuid para criação de id automatico

const app = express() //iniiciando o app
app.use(express.json())
const porta = 3333 //criando a porta

//lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Iridiana Campos Amarante',
        imagem: 'https://media.licdn.com/dms/image/v2/C4D03AQGqAaKjn8_4Ig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1597270861031?e=1732147200&v=beta&t=JuQw3HfS_FrvCWV8wAcha0VLZavq86vjdn1Bcsf2Gac',
        minibio: 'Consultora de projetos SAP e estudante de Análise de Dados'
    },
    {
        id: '2',
        nome: 'Simara Conceição',
        imagem: 'https://media.licdn.com/dms/image/v2/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1563116727359?e=1732147200&v=beta&t=hcYPcs5TUoCTdQSfaAconX7GlDWnNPnxnmf_MtBc4zw',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        id: '3',
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686007268307?e=1732147200&v=beta&t=FjXSNeYVmG0BLa3eJvvdjogawU1PfiyL9b6_kZs_Z14',
        minibio: 'Fundadora da Programaria'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST incluindo uma nova mulher a lista
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PATCH alterando um cadastro existente
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if(mulher.id === request.params.id) {
            return mulher
        }

    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if(request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if(request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if(request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher){
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //configuração rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configuração rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configuração rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //configuração rota DELETE /mulheres/:id
app.listen(porta, mostraPorta) //servidor ouvindo a porta