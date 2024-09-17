const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Iridiana Campos Amarante',
        imagem: 'https://media.licdn.com/dms/image/v2/C4D03AQGqAaKjn8_4Ig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1597270861031?e=1732147200&v=beta&t=JuQw3HfS_FrvCWV8wAcha0VLZavq86vjdn1Bcsf2Gac',
        minibio: 'Consultora de projetos SAP e estudante de Análise de Dados'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)