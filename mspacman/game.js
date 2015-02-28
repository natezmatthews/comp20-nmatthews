function init() {
	var ctx = document.getElementById('game_canvas').getContext('2d');
	var img = new Image();   // Create new img element
	img.addEventListener("load", function() {
		ctx.drawImage(img,322,2,472,136,0,0,472,136);
		ctx.drawImage(img,83,23,13,14,37,31,13,14);
	}, false);
	img.src = 'pacman10-hp-sprite.png'; // Set source path
}