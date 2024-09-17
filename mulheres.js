const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Iridiana Campos Amarante',
        imagem: 'https://media.licdn.com/dms/image/v2/C4D03AQGqAaKjn8_4Ig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1597270861031?e=1732147200&v=beta&t=JuQw3HfS_FrvCWV8wAcha0VLZavq86vjdn1Bcsf2Gac',
        minibio: 'Consultora de projetos SAP e estudante de Análise de Dados'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://media.licdn.com/dms/image/v2/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1563116727359?e=1732147200&v=beta&t=hcYPcs5TUoCTdQSfaAconX7GlDWnNPnxnmf_MtBc4zw',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686007268307?e=1732147200&v=beta&t=FjXSNeYVmG0BLa3eJvvdjogawU1PfiyL9b6_kZs_Z14',
        minibio: 'Fundadora da Programaria'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)