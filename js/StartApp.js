window.onload = function(){
    console.log("app is loaded");
    //defaultTheme = new Theme();
    //originalBleu = new Theme("myTheme","#123456","##EDCBA9");
    themeController = new ThemeController();    
	countController = new CountController();
}

function doSomething(){
	var teller = 9728;
	setInterval(function(){
		teller++;
		document.querySelector("#time").innerHTML = "&#" + teller + " " + "&#"+ (teller+1)+ " " + "&#"+ (teller+2);
	},500);
}

