var IMAGES = document.querySelectorAll("img");
var SIZES = {
	showcase :"100vw",
	reason : "(max-width: 799px) 100vw, 372px",	
	feature : "(max-width: 799px) 100vw, 558px",
	story : "(max-width: 799px) 100vw, 670px"
};
 
function makeSrcset(imgSrc) {
	let markup = [];
	let width = 400;
	for(let i=0; i<5; i++){
		markup[i] = imgSrc + "-"+ width +".jpg" + width + "w";
		width+=400;
	}
	return markup.join();
}


for (var i=0; i <IMAGES.length; i++){
// to know thte source of images
	var imgSrc = IMAGES[i].getAttribute('src');
// to cut the last 8 digits for the img file
	imgSrc = imgSrc.slice(0,-8);
	var srcset = makeSrcset(imgSrc);
	IMAGES[i].setAttribute("srcset",srcset);
 
// get the type of our layout part,
	var type = IMAGES[i].getAttribute("data-type");
	var sizes = SIZES[type];
	IMAGES[i].setAttribute("sizes",sizes);

 
}