window onclick = function(e){
	if(!e.target.matches("#btn")){
		var i;
		var subArr=document.getElementsByClassName("sub");
		for(i=0;i<subArr.length;i++){
			if(subArr[i].style.display == "block"){
				subArr[i].style.display = "none";
			}
		}
    }
}

function showfullimg(img){
	var path = img.src;
	var imgs = document.getElementsByClassName("image");
	var center = screen.width/2-250;
	for(var i=0;i<imgs.lenght;i++){
		imgs[i].style.zIndex =i;
	}
	var startprev = path.indexOf("prev");
	if(startprev == -1){
		var startfull = path.indexOf("full");
		path.substring(startfull+5,startfull+30);
		img.src = "prev_" + path;
		var divImg = img.parentNode;
		divImg.style.width = "";
		divImg.style.height = "";
		divImg.style.position = "";
		divImg.style.top= "";
		divImg.style.left= "";
		divImg.style.zIndex= "";
		divImg.style.textAlign= "";
		divImg.style.paddingTop= "";
	}else{
		var divImg = img.parentNode;
		divImg.style.width = "100%";
		divImg.style.height = "100%";
		divImg.style.background= "#888";
		divImg.style.position = "fixed";
		divImg.style.top= "0px";
		divImg.style.left= "0px";
		divImg.style.zIndex= "10000";
		divImg.style.textAlign= "center";
		divImg.style.paddingTop= "100px";
		path = path.substring(startprev+5,startprev+30);
		img.src ="full" + path;
	}
} 