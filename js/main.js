//global functions
function byId (id){
	return document.getElementById(id);
}
function byClass (id){
	return document.getElementsByClassName(id);
}


byId("kode").onclick = function(){
	byClass("content2")[0].scrollIntoView();
	}
byId("name").onclick = function(){
	byId("about").scrollIntoView();
	byId("kode").style.opacity = "1";
	}
byId("kode").onmouseover = function(){
	byId("kode").style.opacity = "0.8";
	}
byId("kode").onmouseleave = function(){
	byId("kode").style.opacity = "1";
	}
// byId("back").onclick = function(){
// 	byId("back").style.webkitTransform = "rotate(0deg)";
// 	byClass("content3")[0].style.height = "50px";
// 	byClass("content3")[0].scrollIntoView();
// 	}	

function clikedOne(){
	byId("back").style.webkitTransform = "rotate(0deg)";
	byClass("content3")[0].style.height = "50px";
	byClass("content3")[0].scrollIntoView();
}	
function clikedTwo(){
	byId("back").style.webkitTransform = "rotate(180deg)";
	byClass("content3")[0].style.height = "0px";
	
}	



byId("back").onclick= function(){
	if(window.getComputedStyle(byClass("content3")[0], null).getPropertyValue("height") == "0px"){
		clikedOne();
	}else{
		clikedTwo();
	}
}