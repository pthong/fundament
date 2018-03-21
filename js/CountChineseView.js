class CountChineseView extends Observer{
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
		let chineseChar;
		switch(s){
	//		case 0: chineseChar = "&#x0950" + "  yî"; break;
			case 1:  chineseChar = "&#x4e00;" + "  yî"; break;
			case 2:  chineseChar = "&#x4e8c" + "  èr"; break;
			case 3:  chineseChar = "&#x4e09" + "  sân"; break;
			case 4:  chineseChar = "&#x56db" + "  sì"; break;
			case 5:  chineseChar = "&#x4e94" + "  wŭ"; break;
			case 6:  chineseChar = "&#x516d" + "  liù"; break;
			case 7:  chineseChar = "&#x4e03" + "  qî"; break;
			case 8:  chineseChar = "&#x516b" + "  bâ"; break;
			case 9:  chineseChar = "&#x4e5d" + "  jiŭ"; break;
			case 10:  chineseChar = "&#x5341" + "  shí"; break;
			default: chinseChar = "h";


		}
		document.querySelector("#time2").innerHTML = chineseChar; //"&#x4e00;"//s;
	}

}