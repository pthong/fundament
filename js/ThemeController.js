class ThemeController{
    constructor(){
		if(document.getElementById("test"))
			document.getElementById("test").addEventListener("click", (e) => this.testClick());
		if(document.getElementById("save"))
			document.getElementById("save").addEventListener("click", (e) => this.saveClick());
		if(document.getElementById("show"))
			document.getElementById("show").addEventListener("click", (e) => this.showClick());
		

        this.theme = new Theme();
        this.checkThemePreference();
		this.logAvailableThemes();


    }

    checkThemePreference(){
        if(localStorage.themePreference){
            console.log("there is a preference");
            this.setThemeByNameFromLocalStorage(localStorage.themePreference);
        }else{
            console.log("there is no");
			let ob = new Theme("original blue", "#123456", "#EDCBA9");
			ob.applyTheme(); ob.addToLocalStorage();
			let em = new Theme("early morning", "#4e3622", "#e0ad7d");
			em.addToLocalStorage();
			this.setThemePreference("original blue");

			


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
        console.log("settheme");
       let jsObj = JSON.parse(localStorage.getItem("theme_" + themeName));
       this.theme.name  = jsObj.name;
       this.theme.backgroundColor = jsObj.backgroundColor;
       this.theme.textColor = jsObj.textColor;

       this.theme.applyTheme();
       this.setThemePreference(this.theme.name);
    }

    setThemePreference(themename){
        localStorage.setItem("themePreference", themename);
    }

	logAvailableThemes(){
	
			for(var key in localStorage){
		
			if(key[0] == "t" && key[1] == "h" && key[2] == "e"){
				localStorage.getItem(key).name;
				console.log(key.slice(6));
			}
		}

	}
    

}