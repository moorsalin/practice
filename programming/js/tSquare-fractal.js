//execute here http://www.dukelearntoprogram.com/course1/example/index.php
function drawSquare(image,x,y,l) {
	var h = l/2;
	for (var i = x-h; i < x+h; i++) {
		for (var j = y-h; j < y+h; j++) {
			var px = image.getPixel(i,j);
			px.setRed(255);
		}
	}
	return image;
}

function getCorners(x,y,len) {
	var h = len/2;
	var i,j,k,l;
	i = [x-h,y-h];
	j = [x+h,y-h];
	k = [x-h,y+h];
	l = [x+h,y+h];
	return [i,j,k,l];	
}

function tSquare(image,iterations,x,y,length) {
	//print(iterations);
	image = drawSquare(image,x,y,length);
	if (iterations === 1 || length === 4) {
		return image;
	}
	for (var corner of getCorners(x,y,length)) {
		var i = corner[0];
		var j = corner[1];
		image = tSquare(image,iterations-1,i,j,length/2)
	}
	return image;
	
}
var im = new SimpleImage(256,256);
var x = (im.getWidth()+1)/2;
var y = (im.getHeight()+1)/2;
print(tSquare(im,3,x,y,128));