


var socket = io();
let input = document.getElementById('mensagem')
let submit = document.getElementById('submit')
let lista = document.getElementById('lista')
let campo = document.getElementById('campo')

const receber = (msg) =>{
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = msg
    div.appendChild(p)
    lista.appendChild(div)
    p.classList.add('receber')
    window.scrollTo(0, document.body.scrollHeight)
}

const enviar = (msg) =>{
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = msg
    div.appendChild(p)
    lista.appendChild(div)
    p.classList.add('enviada')
    window.scrollTo(0, document.body.scrollHeight)
}

campo.addEventListener('submit', (evento) => {
    console.log('teste')
    evento.preventDefault()
    if(input.value){
        enviar(input.value)
        socket.emit('enviar', input.value)
        input.value = ''
    }
})
socket.on('enviar', (msg) => {
    receber(msg)
})