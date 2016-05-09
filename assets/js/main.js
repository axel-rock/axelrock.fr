// Resize iFrames
(function(){
	var iframes = document.querySelectorAll("iframe")
	for (var i = 0; i < iframes.length; i++) {
		var iframe = iframes[i]
		if (iframe.src.indexOf("youtube") > -1 ||
			iframe.src.indexOf("giphy") > -1 ||
			iframe.src.indexOf("vimeo") > -1) {
			iframe.setAttribute("aspectRatio", iframe.height / iframe.width)
			iframe.removeAttribute("width")
			iframe.removeAttribute("height")
			iframe.classList.add("resize-iframe")
		}
	}

	function _onresize (e){
		var iframes = document.getElementsByClassName("resize-iframe")
		for (var i = 0; i < iframes.length; i++) {
			var iframe = iframes[i]
			var container = iframe.parentNode
			iframe.setAttribute("width", container.offsetWidth)
			iframe.setAttribute("height", container.offsetWidth * iframe.getAttribute("aspectRatio")) 
		}
	}

	window.onresize = _onresize
	_onresize()
})();