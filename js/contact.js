function submit_contact() {
	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	const subject = document.getElementById('subject').value
	const Http = new XMLHttpRequest()
	const url = 'https://protected-lake-99960.herokuapp.com/add?'
		+ '&name=' + name
		+ '&email=' + email
		+ '&message=' + subject
		+ '&incoming=personalsite'
	Http.open('POST', url)
	Http.send()
	//send success snackbar
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
