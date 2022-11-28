var container = document.querySelector('.container')
var entrega = document.getElementById('entrega')
var retirada = document.getElementById('retirada')

var nome = document.createElement('input')
nome.className = 'form-control'
nome.placeholder = 'Informe seu nome'

var whatsapp = document.createElement('input')
whatsapp.className = 'form-control'
whatsapp.placeholder = 'Informe seu Whatsapp'

var cep = document.createElement('input')
cep.className = 'form-control'
cep.placeholder = 'Informe seu CEP'

var cpf = document.createElement('input')
cpf.className = 'form-control'
cpf.placeholder = 'Informe seu CPF'

var pagamento = document.createElement('select')
pagamento.innerHTML = '<option>Selecione a forma de pagamento</option>'
pagamento.className = "form-select"

var pix = document.createElement('option')
pix.innerHTML = 'PIX'
pagamento.appendChild(pix)

var cartao = document.createElement('option')
cartao.innerHTML = 'CARTÃO'
pagamento.appendChild(cartao)

var dinheiro = document.createElement('option')
dinheiro.innerHTML = 'DINHEIRO'
pagamento.appendChild(dinheiro)

entrega.addEventListener('click', addEntrega)
retirada.addEventListener('click', addRetirada)

function addEntrega() {
    container.appendChild(nome)
    container.appendChild(whatsapp)
    container.appendChild(pagamento)
    container.appendChild(cep)
    container.removeChild(cpf)
}

function addRetirada() {
    container.replaceChild(cpf, cep)
}

