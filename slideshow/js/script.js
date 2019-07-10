var i = 0; // dasawyisi
	var images = []; // suratebis masibvi
	var next = document.getElementsByClassName('next')
	var back = document.getElementsByClassName('back')

	// suratebis masivshi shetana
	images[0] = '1.jpg';
	images[1] = '2.jpg';
	images[2] = '3.jpg';
	images[3] = '4.jpg';

	// slideshow 
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

	}

	window.onload = changeImg;
		document.getElementById("myBtn").addEventListener("click", nextImg);
		function nextImg(){
			document.slide.src = images[i];
	
			if(i < images.length - 1){
				i++;
			} else {
				i = 0;
			}
	
		}