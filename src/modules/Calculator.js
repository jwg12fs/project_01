import compute from '../lib/compute';

@compute
export default class Calculator {
	constructor(el){
		this.name = 'Calculator';
		this.oresult = el.getElementsByClassName('result')[0];
		this.oinputs = el.getElementsByTagName('input');
		this.obtn_Group = el.getElementsByClassName('btnGroup')[0];

	}

		
	init(){
		this.bindEvent();
		
	}


	bindEvent(){

		this.obtn_Group.addEventListener("click", this.btnclick.bind(this), false);

	}

	
	btnclick(ev){
		var e = ev || window.event;

		var tar = e.target || e.srcElement;

		var tarbtn = tar.getAttribute('data-type');
		
		this.render(tarbtn);

	}
	getValue(){
		
			var num = [
					Number(this.oinputs[0].value.replace(/\s+/g, '')),
					Number(this.oinputs[1].value.replace(/\s+/g, ''))
				]
			return num;

	}
	render(res){
		var getnum = this.getValue();
			
		this.oresult.innerHTML = this[res](getnum[0], getnum[1]);

	}
	
	
}







	