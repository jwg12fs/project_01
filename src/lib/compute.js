export default (target) => {
	
			target.prototype.add = function (a, b){
				return a + b;
			}
				
			target.prototype.sub = function (a, b){
				return a - b;
			}
				
			target.prototype.mul = function (a, b){
				return a * b;
			}
				
			target.prototype.dev = function (a, b){
				return a / b;
			}
				
}