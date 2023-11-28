// function botaoRaiz(){
//     var html2=``;
//     html2=`
//     <button type="button" id="bt-mostrar"><img src="https://cdn-icons-png.flaticon.com/256/16/16033.png"/></button>
//     `
//     document.getElementById("mostra").innerHTML=html2;
// }

// botaoRaiz();

function mudar(){
    
    var html1=``;
    var html1=`
    <button type="button" id="bt-sair" onclick="limpa()"><img src="https://cdn-icons-png.flaticon.com/256/3031/3031157.png"/></button>
    `   
    document.getElementById("mostra").innerHTML=html1;
}


function mostrar(){
    var html=``;
    html=`
    <div>home</div>
    <div>sobre</div>
    <div>contato</div>`
    document.getElementById("mobile").innerHTML=html;
    mudar();
}


function limpa(){
    window.location.reload(true);
}
document.getElementById('bt-mostrar').addEventListener('click', function(event){
    mostrar();
});
