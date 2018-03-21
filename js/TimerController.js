class ThemeController{
    constructor(){

    }

    reageerOpThemeButton1(){
        
    }

    reageerOpThemeButton2(){

    }

    reageerOpThemeButton3(){

    }

    initKeys(){
                
        window.onkeyup = function(e) {
            var key = e.keyCode ? e.keyCode : e.which;
            
                    console.log(key);
                if(key == 84){
                //letter t
                    ctrlT = false;
                    console.log("ctrl t = false");
                } 


            if(key == 37 || key == 39){ // pijltje links en rechts
                selected = (selected === 'minute') ? 'second' :'minute';

            }


            if (key == 38) { // pijltje omhoog
                if(selected == 'minute'){
                //	minuutOmhoog();
                }else if(selected == 'second'){
                //	secondeOmhoog();
                }
                
                //updateTime();

            }else if (key == 40) { // pijltje omlaag
                if(selected == 'minute'){
                //	minuutOmlaag();
                }else if(selected == 'second'){
                //	secondeOmlaag();
                }
                //updateTime();
            }else if(key == 13){ // enter
            
                if(timeRun){
                    clearInterval(interval);
                }else{
                    startTimer();
                }
                timeRun = !timeRun;
                

                
            }
            

            if(key == 46){ //delete knop


            clearInterval(interval);
            timeRun = false;
            m = 0;
            s= 0;
            typed = "0"; updateTime();
            
            }

            console.log("KEY {0}", key)
            
            if(timeRun == false){
            switch(key){
                case 48:
                case 96: // Numpad0
                    typed += ""+0;
                    break;
                case 49:
                case 97: // Numpad1
                    typed += ""+1;
                    break;
                case 50:
                case 98: // Numpad2
                    typed += ""+2;
                    break;
                case 51:
                case 99: // Numpad3
                    typed += ""+3;
                    break;
                case 51:
                case 100: // Numpad4
                    typed += ""+4;
                    break;
                case 52:
                case 101: // Numpad5
                    typed += ""+5;
                    break;
                case 53:
                case 102: // Numpad6
                    typed += ""+6;
                    break;
                case 54:
                case 103: // Numpad7
                    typed += ""+7;
                    break;
                case 55:
                case 104: // Numpad8
                    typed += ""+8; 
                    break;
                case 56:
                case 105: //Numpad9
                    typed += ""+9;
                    break;
                }

                if((key >= 96 && key <= 105) || (key >= 49 && key <= 56) ){
                    console.log("numUPDATE");
                    m = Number(typed);
                    updateTime();
                }
            }
        }
    }


}