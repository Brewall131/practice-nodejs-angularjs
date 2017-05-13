angular.module('TestApp', []);

angular.module('TestApp')
	.controller('MainController', ctrlFunc);

function ctrlFunc() {
	this.message = 'Hello';
	this.family = [
		{
			name: "Breana"
		},
		{
			name: "Chris"
		},
		{
			name: "Ben"
		},
		{
			name:"Sagan"
		},
		{
			name: "Ralpheno"
		}
	];
}