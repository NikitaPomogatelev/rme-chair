export default class {
	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.interval;
		this.minutes;
		this.seconds;

	}

	start(){
		this.interval = setInterval(() => {
			this.tick();
		}, 1000);
	}

	tick() {
		this.minutes = parseInt(this.time / 60, 10);
        this.seconds = parseInt(this.time % 60, 10);

        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
		this.box.textContent = this.minutes + ":" + this.seconds;
		
		this.time--;
		
	
	
		if(this.time < 0){
			this.stop();
		}
	}

	stop(){
		clearInterval(this.interval);
	}
}