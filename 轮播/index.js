var div = document.querySelector("#div1"),
	imgs = div.querySelector("ul").children,
	ol = document.querySelector("ol"),
	ul=document.querySelector("ul"),
	prev = document.querySelector("#goPrev"),
	next = document.querySelector("#goNext"),
	index = 0,
	lastIndex = 0,
	btns = [];
	
for(var i = 0 ; i <= imgs.length-3 ; i++ ){
	var li = document.createElement("li");
	li.innerHTML = i+1;
	if(i===0) li.className = "ac";
	ol.appendChild(li);
	btns.push(li);
	}
	
for(let i = 0 ; i < btns.length ; i++){
	btns[i].onclick = function(){
		index = i;
		change();
		lastIndex = index;
	}
}
	
next.onclick = function(){
	index += 1;
	if(index == imgs.length-2){
		index = 0;
		ul.style.top =0;
	}
	change();
	lastIndex = index;
}
prev.onclick = function(){
	if(--index < 0){
		index = btns.length - 1;
		ul.style.top =(btns.length+1)*500 + "px";
	}
	change();
	lastIndex = index;
}


function qiehuan(){
	timer = setInterval(function(){
		next.onclick();
	},1500);
}

qiehuan();
div.onmouseleave = qiehuan ;

div.onmouseenter = function(){
	clearInterval(timer);
}

function change() {
	btns[lastIndex].classList.remove('ac');
	
	btns[index].classList.add('ac');

	ul.style.top = -(index+1)*500+"px";
}