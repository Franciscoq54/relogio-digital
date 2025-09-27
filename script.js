
function mostrarDados(){
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()
    const msghora = window.document.getElementById('hora')
    const msgSaud = window.document.getElementById('msg') 
    const foto = window.document.querySelector('#img img')

    msghora.innerHTML = `Neste Momento são <strong>${hora}h:${min}m:${seg}s</strong>` 

    if(hora >= 6 && hora < 13){
        msgSaud.innerHTML = `Bom Dia`
        msgSaud.style.color = '#FFD700'
        foto.src = 'fotomanha.jpg'
        foto.style.background = '#FFD700'
    }
    else if(hora >= 13 && hora < 19){
        msgSaud.innerHTML = `Boa Tarde`
        msgSaud.style.color = '#6b6be6ff'
        foto.src = 'fototarde.jpg'
        foto.style.background = '#6b6be6ff'
    }
    else{
        msgSaud.innerHTML = `Boa Noite`
        msgSaud.style.color = '#808080'
        foto.src = 'fotonoite.jpg'
        foto.style.background = '#808080'
    }
   
}
//atualiza a hora a cada segundo
setInterval(mostrarDados, 1000)
//ao carregar o site executa imediatamente 
mostrarDados()