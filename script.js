function carregar(){
var msg = document.getElementById ('msg')
var img = document.getElementById ('imagem')
//var data = new Date ()
var hora=8
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora <12){
    //bom dia
    msg.innerHTML = 'Bom dia'
    img.src = 'foto-dia.png'
    document.body.style.backgroundColor = '#e5d450'
} else if(hora >= 12 && hora <= 18) {
    // boa tarde
    img.src = 'foto-tarde.png'
    document.body.style.backgroundColor = '#f34a0799'
} else {
    //boa noite
    img.src = 'foto-noite.png'
    document.body.style.backgroundColor = '#101b68'
    }
}