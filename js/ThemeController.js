class ThemeController{
    constructor(){
        document.getElementById("test").addEventListener("click", (e) => this.testClick());
        document.getElementById("save").addEventListener("click", (e) => this.saveClick());
        document.getElementById("show").addEventListener("click", (e) => this.showClick());


        this.theme = new Theme();
        this.checkThemePreference();

    }

    checkThemePreference(){
        if(localStorage.themePreference){
            console.log("there is a preference");
            this.setThemeByNameFromLocalStorage(localStorage.themePreference);
        }else{
            console.log("there is no");
        }



    }

    testClick(){
        console.log("applyClick");
       
        this.theme.name = document.getElementById("in_name").value;
        this.theme.backgroundColor= document.getElementById("in_background").value;
        this.theme.textColor = document.getElementById("in_text").value;
        this.theme.applyTheme();
    }

    saveClick(){
        console.log("added to local storage");

        this.theme.addToLocalStorage();
    }

    showClick(){
        let t = document.getElementById("in_thema").value;
        this.setThemeByNameFromLocalStorage(t);
    }

    setThemeByNameFromLocalStorage(themeName){
       let jsObj = JSON.parse(localStorage.getItem("theme_" + themeName));
       this.theme.name  = jsObj.name;
       this.theme.backgroundColor = jsObj.backgroundColor;
       this.theme.textColor = jsObj.textColor;
       
       this.theme.applyTheme();
       this.setThemePreference(this.theme.name);
    }

    setThemePreference(pref){
        localStorage.setItem("themePreference", pref);
    }

    

}