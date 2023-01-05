var nome = document.getElementById('nome');
var senha = document.getElementById('senha');

function validateNome(){
	var nome = document.getElementById('nome').value;
     var senha = document.getElementById('senha').value;
	if(nome == "" || senha ==""){
		alert('Nenhum dos campos pode estar vazio');
	}else{
		alert('Login efetuado com sucesso');
	
	}
	
}




















nome.addEventListener('focus',()=>{
	nome.style.borderColor = "#3366FF";

});

nome.addEventListener('blur',()=>{
	nome.style.borderColor = "gray";

});


senha.addEventListener('focus',()=>{
	senha.style.borderColor = "#3366FF";

});

senha.addEventListener('blur',()=>{
	senha.style.borderColor = "gray";

});

