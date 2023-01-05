var email = document.getElementById('email');
var senha = document.getElementById('senha');
var nome = document.getElementById('nome');
var sobrenome = document.getElementById('sobrenome');
var pais = document.getElementById('pais');



function validateElemntos(){
	var nome = document.getElementById('nome').value;
     var senha = document.getElementById('senha').value;
     var email = document.getElementById('email').value;
     var sobrenome = document.getElementById('sobrenome').value;
	var pais = document.getElementById('pais').value;


	if(nome == "" || senha =="" || email == "" || sobrenome == "" || pais == "" ){
		alert('Nenhum dos campos pode estar vazio');
	}else{
		alert('Login efetuado com sucesso');
	
	}
	
}

















email.addEventListener('focus',()=>{
	email.style.borderColor = "#3366FF";

});

email.addEventListener('blur',()=>{
	email.style.borderColor = "gray";

});





nome.addEventListener('focus',()=>{
	nome.style.borderColor = "#3366FF";

});

nome.addEventListener('blur',()=>{
	nome.style.borderColor = "gray";

});





sobrenome.addEventListener('focus',()=>{
	sobrenome.style.borderColor = "#3366FF";

});

sobrenome.addEventListener('blur',()=>{
	sobrenome.style.borderColor = "gray";

});






pais.addEventListener('focus',()=>{
	pais.style.borderColor = "#3366FF";

});

pais.addEventListener('blur',()=>{
	pais.style.borderColor = "gray";

});











senha.addEventListener('focus',()=>{
	senha.style.borderColor = "#3366FF";

});

senha.addEventListener('blur',()=>{
	senha.style.borderColor = "gray";

});
