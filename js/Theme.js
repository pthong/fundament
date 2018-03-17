class Theme{
    constructor(themeName = "default", bgColor = "#000", txtColor = "#FFF"){
        this.name = themeName;
        this.backgroundColor = bgColor;
        this.textColor = txtColor;

    }

    applyTheme(){
       document.body.style.backgroundColor = this.backgroundColor;
       document.querySelector("#time").style.color = this.textColor;
    }

    
    addToLocalStorage(){
        if(true){
            localStorage.setItem("theme_" + this.name, JSON.stringify(this));
        }else{
            alert("Please download a accaptable browser");
        }
    }


}