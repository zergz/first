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

	}
byId("name").onclick = function(){
	byClass("content2")[0].style.webkitTransform = 'translate(0px, 0px)';
	byClass("content")[0].style.webkitTransform = 'translate(0px, 0px)';
	}

byId("kode").onmouseover = function(){
	byId("kode").style.opacity = "0.8";
	}
byId("kode").onmouseleave = function(){
	byId("kode").style.opacity = "1";
	}

function clikedOne(){
	byId("back").style.webkitTransform = "rotate(0deg)";
	byClass("content2")[0].style.webkitTransform = 'translate(0px, -106%)';
	byId("icons").style.display = "inline-flex";
}	
function clikedTwo(){
	// byId("back").style.webkitTransform = "rotate(180deg)";
	// byClass("content3")[0].style.height = "0px";
	// byId("icons").style.display = "none";
}	

byId("back").onclick = function(){
	if(window.getComputedStyle(byClass("content3")[0], null).getPropertyValue("height") == "0px"){
		clikedOne();
	}else{
		clikedTwo();
	}
}

setTimeout(function(){
	document.getElementById("embed_npfido").style.display = "none";
},200);