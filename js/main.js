//global functions

function byId (id){
	return document.getElementById(id);
}
function byClass (id){
	return document.getElementsByClassName(id);
}


// windnow.onscroll = function(){

// 	console.log("asd");
// 	}




byId("kode").onclick = function(){

	document.getElementsByClassName("content2")[0].style.webkitTransform = 'translate(0px, -100%)';
	document.getElementsByClassName("content")[0].style.webkitTransform = 'translate(0px, -100%)';


	}
byId("name").onclick = function(){
	document.getElementsByClassName("content2")[0].style.webkitTransform = 'translate(0px, 0px)';
	document.getElementsByClassName("content")[0].style.webkitTransform = 'translate(0px, 0px)';
	byId("kode").style.opacity = "1";
	}
byId("kode").onmouseover = function(){
	byId("kode").style.opacity = "0.8";
	}
byId("kode").onmouseleave = function(){
	byId("kode").style.opacity = "1";
	}

// function clikedOne(){
// 	document.getElementsByClassName("content2")[0].style.WebkitTransition = "all 20s"
// 	byId("back").style.webkitTransform = "rotate(0deg)";
// 	document.getElementsByClassName("content2")[0].style.webkitTransform = 'translate(0px, -100%)';
// 	byClass("content3")[0].scrollIntoView();
// 	byId("icons").style.display = "inline";
// }	
// function clikedTwo(){
// 	byId("back").style.webkitTransform = "rotate(180deg)";
// 	byClass("content3")[0].style.height = "0px";
// 	byId("icons").style.display = "none";
// }	



setTimeout(function(){
	document.getElementById("embed_npfido").style.display = "none";
},200);