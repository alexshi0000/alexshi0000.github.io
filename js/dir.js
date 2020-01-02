let height = window.innerHeight;
let width = window.innerWidth;

if (height <= width) { //simple redirection
	console.log("redirected to desktop version");
	window.location.replace("home.html");
}
else {
	console.log("redirected to mobile version");
	window.location.replace("mobile.html");
}
