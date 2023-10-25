import Calculator from '../modules/Calculator';



(function(doc){
	const owrap = doc.getElementsByClassName('wrap')[0];


	function init(){
		new Calculator(owrap).init();
		
	}
	
	init();
})(document);

function partialleft(f /*, ...*/){

}