function calculoMedia(){
    let nome = (window.document.getElementById('nome').value)
    let n1 = Number(window.document.getElementById('n1').value)
    let n2 = Number(window.document.getElementById('n2').value)
    let n3 = Number(window.document.getElementById('n3').value)
      
    
    let media = (n1+n2+n3)/3
    innerHTML = media

    if(media>=6){
        document.getElementById("resp").innerHTML =  `Parabens ${nome} Você foi APROVADO!! Sua média foi ${media.toFixed(1)}`
    }
    else{
        document.getElementById("resp").innerHTML =  ` ${nome} Você foi REPROVADO!! Sua média foi ${media.toFixed(1)}`
    }
}