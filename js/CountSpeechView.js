class CountSpeechView extends Observer{
	constructor(model){
		super(model);
		this.model.addObserver(this);
	}

	update(){
		super.update();
		let aantalSecondes = this.model.seconds;
		this.show(aantalSecondes);
		
	}

	show(s){
		var msg = new SpeechSynthesisUtterance();
		msg.volume = 0.5; // 0 to 1
		msg.text = s;
		msg.lang = 'zh';
		speechSynthesis.speak(msg);
	}

}