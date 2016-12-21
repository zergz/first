//global functions

function byId (id){
	return document.getElementById(id);
}
function byClass (id){
	return document.getElementsByClassName(id);
}


// 

byId("kode").onclick = function(){
	byClass("content2")[0].style.webkitTransform = 'translate(0px, -100%)';
	byClass("content")[0].style.webkitTransform = 'translate(0px, -100%)';
	byId("back").style.display = "block";
}

byId("name").onclick = function(){
	byClass("content2")[0].style.webkitTransform = 'translate(0px, 0px)';
	byClass("content")[0].style.webkitTransform = 'translate(0px, 0px)';
	byId("icons").style.display = "none";
}

byId("kode").onmouseover = function(){
	byId("kode").style.opacity = "0.8";
}

byId("kode").onmouseleave = function(){
	byId("kode").style.opacity = "1";
}

function clikedOne(){
	byId("back").style.webkitTransform = "rotate(0deg)";
	byId("icons").style.display = "inline-flex";
	byClass("content2")[0].style.webkitTransform = 'translate(0px, -107%)';
	console.log(byClass("content2")[0].offsetTop);	
}	

function clikedTwo(){
	byId("back").style.webkitTransform = "rotate(180deg)";
	byClass("content2")[0].style.webkitTransform = 'translate(0px, -100%)';
	setTimeout(function(){
		byId("icons").style.display = "none";
	}, 1000)
}	

byId("back").onclick = function(){
	if(byId("icons").offsetTop == 0 ){
		clikedOne();
	}
	else {
		clikedTwo();
	}
}

setTimeout(function(){
	document.getElementById("embed_npfido").style.display = "none";
},200);