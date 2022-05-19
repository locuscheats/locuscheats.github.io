if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "% locuscheats", "% locuscheat", "% locuschea", "% locusche", "% locusch", "% locusc", "% locusc", "% locus", "% locu", "% loc", "% lo", "% l", "% lo", "% loc", "% locu", "% locus", "% locusc", "% locusch", "% locusche", "% locuschea", "% locuscheat", "% locuscheats"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
