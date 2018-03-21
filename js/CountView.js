class CountView extends Observer{
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
		document.querySelector("#time").innerHTML = s; //"&#x4e00;"//s;
	}

}