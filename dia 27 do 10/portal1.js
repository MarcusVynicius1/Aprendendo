function mostrarTopico(numero){
    var verificarN = numero 
    var div = document.getElementById("pDivs");
    var div2 = document.getElementById("pDivs2");
    var div3 = document.getElementById("pDivs3");

    if(verificarN === 1){ 
            div.innerHTML = "<p>" + "O Levantamento de Requisitos serve para..." + "<p>"
            div2.innerHTML = "<ul><li>" + "Artigo1" + "</li><br>" + "<li>" + "Artigo2" + "</li><br>" + "<li>" + "Artigo2" + "</li></ul>"
            div3.innerHTML = "<ul><li>" + "Ferramenta 1" + "</li><br>" + "<li>" + "Ferramenta 2" + "</li><br>" + "<li>" + "Ferramenta 3" + "</li></ul>"
            
        } else {  
        if(verificarN === 2){  
            div.innerHTML = "<p>" + "A Análise de Requisitos serve para..." + "<p>"
            div2.innerHTML = "<ul><li>" + "Artigo1" + "</li><br>" + "<li>" + "Artigo2" + "</li><br>" + "<li>" + "Artigo2" + "</li></ul>"
            div3.innerHTML = "<ul><li>" + "Ferramenta 1" + "</li><br>" + "<li>" + "Ferramenta 2" + "</li><br>" + "<li>" + "Ferramenta 3" + "</li></ul>" 

        } else {
        if(verificarN === 3){
            div.innerHTML = "<p>" + "A etapa de Implementação é importante para..." + "<p>"
            div2.innerHTML = "<ul><li>" + "Artigo1" + "</li><br>" + "<li>" + "Artigo2" + "</li><br>" + "<li>" + "Artigo2" + "</li></ul>"
            div3.innerHTML = "<ul><li>" + "Ferramenta 1" + "</li><br>" + "<li>" + "Ferramenta 2" + "</li><br>" + "<li>" + "Ferramenta 3" + "</li></ul>"
    } else {
        if(verificarN === 4){
            div.innerHTML = "<p>" + "A Realização de Testes serve para..." + "</p>"
            div2.innerHTML = "<ul><li>" + "Artigo1" + "</li><br>" + "<li>" + "Artigo2" + "</li><br>" + "<li>" + "Artigo2" + "</li></ul>"
            div3.innerHTML = "<ul><li>" + "Ferramenta 1" + "</li><br>" + "<li>" + "Ferramenta 2" + "</li><br>" + "<li>" + "Ferramenta 3" + "</li></ul>"

        } else {
            if(verificarN === 5){
            div.innerHTML = "<p>" + "A Realização de manutenção serve para..." + "</p>"
            div2.innerHTML = "<ul><li>" + "Artigo1" + "</li><br>" + "<li>" + "Artigo2" + "</li><br>" + "<li>" + "Artigo2" + "</li></ul>"
            div3.innerHTML = "<ul><li>" + "Ferramenta 1" + "</li><br>" + "<li>" + "Ferramenta 2" + "</li><br>" + "<li>" + "Ferramenta 3" + "</li></ul>"
            }
        }
     }
    }
  }  
 }
    

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
  
const loginForm = document.getElementById("login-usuario-form");
const msgAlertErroLogin = document.getElementById("msgAlertErroLogin");


loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (document.getElementById("email").value === "") {
        msgAlertErroLogin.innerHTML = "<div class='alert alert-danger' role='alert'>Erro: Necessário preencher o campo usuário!</div>";
    } else if (document.getElementById("senha").value === "") {
        msgAlertErroLogin.innerHTML = "<div class='alert alert-danger' role='alert'>Erro: Necessário preencher o campo senha!</div>";
    } else {
        const dadosForm = new FormData(loginForm);

        const dados = await fetch("validar.php", {
            method: "POST",
            body: dadosForm
        });

        const resposta = await dados.json();

        if(resposta['erro']){
            msgAlertErroLogin.innerHTML = resposta['msg']
        }else{
			window.location.reload();
            loginForm.reset();
			document.getElementById("myForm").style.display = "none";
        }
    }
});

window.onload = function(){
	//var logado = document.getElementById("LoginFeito").value
    var logado = "Sim";
	if(logado === "Sim"){
		document.getElementById("botao1").innerHTML = "<h3 style='position: absolute; margin-top: 30px; width: 91%; text-align: right; color: black; animation: none'> Bem vindo " + document.getElementById("nome").value + "</h3>"
		document.getElementById("botao2").innerHTML = "<a href='sair.php'><button class='button2'>Sair</button></a>"
        document.getElementById("botaoAdd").style.display = "block";
	}
	if(logado === "Nao"){
		document.getElementById("botao1").innerHTML = "<div id='dados-usuario'>" + "<button class='button' onclick='openForm()'>Logar</button>" + "</div>"
		document.getElementById("botao2").innerHTML = "<button class='button2'>Cadastra-se</button>"
	}
}

function MostrarArq(){

    if(document.getElementById("mostrarArq").style.display === "block"){
        document.getElementById("mostrarArq").style.display = "none";
        document.getElementById("botaoArq").textContent = "Mostrar Arquivos"
        
    } else {
        document.getElementById("mostrarArq").style.display = "block";
        document.getElementById("botaoArq").textContent = "Esconder Arquivos"
    }
    
}