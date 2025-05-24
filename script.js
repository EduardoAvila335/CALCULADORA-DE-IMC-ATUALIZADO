let pessoa = document.getElementById('pessoa');
let pessoaum = document.getElementById('pessoaum');
let pessoadois = document.getElementById('pessoadois');
let pessoatres = document.getElementById('pessoatres');
let pessoaquatro = document.getElementById('pessoaquatro');
let pessoacinco = document.getElementById('pessoacinco');



function calcular(){
    let altura = Number(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let div = document.getElementById('div');
    let botaolimpar = document.getElementById('botaolimpar');
    
    let alturavalor = altura * altura;
    let resultado = peso / alturavalor;

    if(altura == '' || peso == ''){
        alert('Preencha todos os campos!!');
        div.innerHTML = '';
        botaolimpar.style.display = 'none';
        pessoa.style.border = 'none';
        pessoaum.style.border = 'none';
        pessoadois.style.border = 'none';
        pessoatres.style.border = 'none';
        pessoaquatro.style.border = 'none';
        pessoacinco.style.border = 'none';
        return;
      
    }


    if(resultado <= 18.5){
        botaolimpar.style.display ="inline-block"
        pessoa.style.border = '2px solid red';
        div.innerHTML = `<h4 style="color: rgb(0, 136, 255);"s>Você está abaixo do normal</h4><h4> Seu IMC é: (${resultado.toFixed(1)})</h4>`
    }else if(resultado <= 24.9 && resultado >= 18.6){
        botaolimpar.style.display ="inline-block"
        pessoaum.style.border = '2px solid red';
        div.innerHTML = `<h4 style="color: rgb(29, 101, 164);"s>Você está normal</h4><h4> Seu IMC é: (${resultado.toFixed(1)})</h4>`
    }else if(resultado <= 29.9 && resultado >= 25.0){
        botaolimpar.style.display ="inline-block"
        pessoadois.style.border = '2px solid red';
        div.innerHTML = `<h4 style="color: rgb(205, 118, 26);"s>Você está sobrepeso</h4><h4> Seu IMC é: (${resultado.toFixed(1)})</h4>`
    }else if(resultado <= 34.9 && resultado >= 30.0){
        botaolimpar.style.display ="inline-block"
         pessoatres.style.border = '2px solid red';
        div.innerHTML = `<h4 style="color: rgb(212, 81, 25);"s>Você está com obesidade grau I</h4><h4> Seu IMC é: (${resultado.toFixed(1)})</h4>`
    }else if(resultado <= 39.9 && resultado >= 35.0){
        botaolimpar.style.display ="inline-block"
         pessoaquatro.style.border = '2px solid red';
        div.innerHTML = `<h4 style="color: rgb(162, 49, 29);"s>Você está com obesidade grau II</h4><h4> Seu IMC é: (${resultado.toFixed(1)})</h4>`
    }else if(resultado >= 39.9){
        botaolimpar.style.display ="inline-block"
         pessoacinco.style.border = '2px solid red';
        div.innerHTML = `<h4 style="color: rgb(230, 21, 21);"s>Você está com obesidade grau III</h4><h4> Seu IMC é: (${resultado.toFixed(1)})</h4>`
    }

    rolaratela()

   
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
}

function limpar(){
    div.innerHTML = '';
    botaolimpar.style.display = 'none';
    pessoa.style.border = 'none';
    pessoaum.style.border = 'none';
    pessoadois.style.border = 'none';
    pessoatres.style.border = 'none';
    pessoaquatro.style.border = 'none';
    pessoacinco.style.border = 'none';
    return;
}

function rolaratela(){
    document.getElementById("explicacoes").scrollIntoView({ behavior: "smooth" });
}