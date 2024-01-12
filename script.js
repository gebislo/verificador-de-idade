function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano || fAno.value < ano - 120){
        window.alert('ERRO! verifique os dados e tente novamente')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe-menino.jpg')

            }else if(idade < 25){
                //jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')

            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')

            }else{
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
                
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe-menina.jpg')
            }else if(idade < 25){
                //jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        img.style = 'object-fit: cover; width: 300px; height: 300px; border-radius: 50%; margin-top: 30px'
        res.appendChild(img)
    }
}