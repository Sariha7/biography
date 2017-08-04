
/*Worked with Brad and Grace on how to do this section since I was having a lot of issues with it
*/

function inputs(){
	return {
		firstname: document.getElementById('firstname').value,
		lastname: document.getElementById('lastname').value,
		email: document.getElementById('email').value,
		phone: document.getElementById('phone').value,
	}
}

var submit= document.getElementById('submit');

submit.addEventListener('click', function(event){
	var value = inputs();

	if (value.firstname === '' || value.lastname === '' || value.email ==='' || value.phone === ''){
	 alert("Please fill out all fields.");
		event.preventDefault();
	} else {
		alert("Thank you for reaching out!");
	}
});






























//contact.getelementbyid('conact-form').submit()

//document.getElementById("myForm").reset()

//var form = document.getElementById("form-id");
/*
document.getElementById("your-id").addEventListener("click", function () {
  form.submit();
});*/