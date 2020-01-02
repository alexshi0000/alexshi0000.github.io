function preloader() {
	if (document.images) {
		var urls = [
			"./images/ipad-main-noglasses.jpg",
			"./images/main-bg-min.jpg",
			"./images/cofplant.png",
			"./images/floating-desk-min.jpg",
			"./images/galaxy-optimized.gif",
			"./images/dualmetro.jpg",
			"./images/chat.png",
			"./images/tetris.gif",
			"./images/fractree.jpg",
			"./images/stallman-min.png",
			"./images/autodeck.jpg",
			"./images/emotion.jpg",
			"./images/redphone.jpeg"
		]
		var imgs = [];
		let n = urls.length;
		for (var i = 0; i < n; i++)
			imgs.push(new Image());

		for (var i = 0; i < n; i++)
			imgs[i].src = urls[i];

		console.log(imgs);
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

function redir() {
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
}

addLoadEvent(preloader, redir());
