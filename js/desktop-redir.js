window.addEventListener("resize", () => {
	let height = window.innerHeight;
	let width = window.innerWidth;

	if (height <= width) { //simple redirection
		console.log("redirected to desktop version");
		window.location.replace("index.html");
	}
});
