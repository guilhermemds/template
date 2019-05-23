function cadastrar() {
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var p1 = document.getElementById('password1').value;
	var p2 = document.getElementById('password2').value;

    if(p1 != p2){
    	
    	alert('Senhas não conferem, por favor digite senhas iguais')
    	
    	document.getElementById("password1").value = "";
    	document.getElementById("password2").value = "";
	
    }else{
    	alert("Nome: " + name + " \nTelefone: " +  phone + "\nEmail: " + email)
    	window.location.reload();
    }
    	
}