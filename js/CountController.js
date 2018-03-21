class CountController{
    constructor(){
        this.counter = new CountModel();
        this.timerView = new CountView(this.counter);
        this.timerView2 = new CountChineseView(this.counter);
        this.timerView3 = new CountSpeechView(this.counter);
    
    }
}