function validation(){
	var titlu = document.getElementById("titlu").value;
	var price = document.getElementById("price").value;
	var suprafata = document.getElementById("suprafata").value;
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding = "20px";

	if(titlu.length < 5){
		text = "Introduceti un titlu valid!";
		error_message.innerHTML = text;
		alert("Introduceti un titlu valid!");
		return false;
	}
	if(isNaN(price)){
		text = "Introduceti un pret valid!";
		error_message.innerHTML = text;
		alert("Introduceti un pret valid!");
		return false;
	}
	if(isNaN(suprafata)){
		text = "Introduceti o suprafata valida!";
		error_message.innerHTML = text;
		alert("Introduceti o suprafata valida!");
		return false;
	}
	if(message.length <= 140){
		text = "Introduceti mai mult de 140 de caractere!"
		error_message.innerHTML = text;
		alert("Introduceti mai mult de 140 de caractere!");
		return false;
	}
	if(name.length < 5){
		text = "Introduceti un nume valid!";
		error_message.innerHTML = text;
		alert("Introduceti un nume valid!");
		return false;
	}
	if(email.indexOf("@") == -1 || email.length < 6 ){
		text = "Introduceti o adresa de email valida!";
		error_message.innerHTML = text;
		alert("Introduceti o adresa de email valida!");
		return false;
	}
	if(isNaN(tel) || tel.length != 10){
		text = "Introduceti un numar de telefon valid!";
		error_message.innerHTML = text;
		alert("Introduceti un numar de telefon valid!");
		return false;
	}
	alert("Anunt adaugat cu success!")
	return true;
}