class CountModel extends Observable {
    constructor() {
        super();
        this.minutes = 0;
        this.seconds = 0;
        this.id = setInterval(this.tick.bind(this), 1000);
    }

    setSeconds(s){
        this.seconds = s;
        this.notify();
    }

    startAndResume() {

    }

    reset() {

    }

    tick() {
        if(this.seconds < 10){
            this.setSeconds(this.seconds+1);
        }else{
            clearInterval(this.id);
        }
    }




}