var i = 0; // dasawyisi
	var images = []; // suratebis masibvi
	var time = 1000; // dro roca surati sheicvleba

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

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
