window.addEventListener("resize", () => {
	let height = window.innerHeight;
	let width = window.innerWidth;

	if (height > width) { //simple redirection
		console.log("redirected to mobile version");
		window.location.replace("mobile.html");
	}
});
