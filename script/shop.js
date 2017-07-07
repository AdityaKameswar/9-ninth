"use strict";


var film;
var filmCh;
var priceMax;
var priceMin;
var priceOut;

function vars(){
	film =document.getElementById("film");
	filmCh=film.childElementCount;
	priceMax=document.getElementById("inputMax");
	priceMin=document.getElementById("inputMin");
	priceOut=document.getElementById("inputOut");
}


function setWidth(){ //Setting width of sliding film for proper setting of child elements
	film.style.width= filmCh +"00%";
//	alert("java working");
}

function slide(a){
	if(a){
		if(film.style.left === "-"+(filmCh-1)+"00%"){
			film.style.left="0%";
		}
		else{
			film.style.left=(parseInt(film.style.left)-100)+"%";
		}
	}
	else{
		if(film.style.left === "0%"){
			film.style.left="-"+(filmCh-1)+"00%";
		}
		else{
			film.style.left=(parseInt(film.style.left)+100)+"%";
		}
	}
}

function inputSlider1(){
	
	if(priceMin.value > priceMax.value - 500){
		priceMin.value = priceMax.value - 500;
	}
	priceOut.innerHTML="₹" + priceMin.value + " to ₹" + priceMax.value;
}

function inputSlider0(){
	
	if(priceMax.value < parseInt(priceMin.value) + 500){
		priceMax.value = parseInt(priceMin.value) + 500;
	}
	priceOut.innerHTML="₹" + priceMin.value + " to ₹" + priceMax.value;
}




































