// since this is a static site, keep this file as small as possible
// FUNCTIONAL & NAVIGATIONAL

function scrolldown(target, speed, offset_ratio) {
  $('html, body').animate({
    scrollTop: $(target).offset().top * offset_ratio
  }, speed);
}

function scrollup(target, speed) {
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, speed);
}

function resumePopup() {
  //TODO is actually whitened
}

function resumeDownload() {
  //TODO
}

// PROJECT SECTION SCROLL EFFECT

window.addEventListener('scroll', function() {
  var element = document.querySelector('.project-wrapper');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
	// don't do on safari (bug)
	var browserResult = bowser.getParser(navigator.userAgent).getResult();
	if (browserResult.browser.name == "Chrome") {
		if(position.top >= 0 && position.bottom <= window.innerHeight) {
		}

		// checking for partial visibility
		if(position.top < window.innerHeight && position.bottom >= 0) {
			var mosaic = document.querySelector('#mosaic');
			mosaic.className = mosaic.className.replace(
				mosaic.className,
				'bg-scroll'
			);
		}
		else {
			var mosaic = document.querySelector('#mosaic');
			mosaic.className = mosaic.className.replace(
				mosaic.className,
				'bg-fixed'
			);
		}
	}
	else if (browserResult.browser.name != "Safari") {
		var mosaic = document.querySelector('#mosaic');
		mosaic.className = mosaic.className.replace(
			mosaic.className,
			'bg-fixed'
		);
	}
	else {
		var mosaic = document.querySelector('#mosaic');
		mosaic.className = mosaic.className.replace(
			mosaic.className,
			'bg-no-image'
		);
	}
});

// ANIMATION

function load_animators() {
	//discriminate for safari
	var browserResult = bowser.getParser(navigator.userAgent).getResult();
	var topContainer = document.querySelector('#top-container');
	if (browserResult.browser.name == "Safari") {
		topContainer.classList.add('fixed-background');
	}

	//set entire page visible
	document.getElementById("page").style.display = "block";
	document.getElementById("loading").style.display = "none";

  load_progress();
  load_timeline();
  load_projects();
}

function load_progress() {
  var progressor = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.skill');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            elems[i].className.split(' ')[2],
            elems[i].className.split(' ')[1] + '-after'
          );
        }
      }
    }
    return {
      init: init
    };
  };
  progressor().init();
}

function load_timeline() {
  var progressor = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.timeline-entry');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            elems[i].className.split(" ")[1],
            elems[i].className.split(" ")[0] + "-after"
          );
        }
      }
    }
    return {
      init: init
    };
  };
  progressor().init();
}

function load_projects() {
  var progressor = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.project-card');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= -windowHeight / 4 ) {
          if (i % 2 === 0) {
            elems[i].className = elems[i].className.replace(
              elems[i].className.split(' ')[1],
              'project-card-after-right'
            );
            elems[i].className = elems[i].className.replace(
              elems[i].className.split(' ')[2],
              'project-card-visible'
            );
          }
          else {
            elems[i].className = elems[i].className.replace(
              elems[i].className.split(' ')[1],
              'project-card-after-left'
            );
          }
        }
      }
    }
    return {
      init: init
    };
  };
  progressor().init();
}
