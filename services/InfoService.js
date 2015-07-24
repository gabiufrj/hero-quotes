var app = angular.module('app');

app.service('InfoService', function () {

	this.selectedQuote = undefined;
	this.quotes = [
		'PC na sala é foda',
		'Hum!',
		'Esse tem 10 clãs',
		'Esse joga',
		'Marca recuado aí',
		'2 a 1 é difícil de virar',
		'Fala baixo, Thiago!',
		'Mato Grosso do Sul ou do Norte?',
		"Vira 180º pra esquerda",
		"Tá ali a tua direita-esquerda",
		"Tá vendo ali onde eu tô mirando?",
		"Te viuuuuuu Fanelliiiii",
		"Tô tomando tiruuuuuuuuuu",
	];
	
	this.selectedImage = undefined;
	this.images = [
		'images/1.jpg',
		'images/2.jpg',
		'images/3.jpg',
		'images/4.jpg',
		'images/5.jpg',
		'images/6.jpg',
		'images/7.jpg',
		'images/8.jpg',
		'images/9.jpg',
	];
	
	this.getQuote = function () {
		var i = Math.floor((Math.random() * this.quotes.length));
		
		while (this.quotes[i] === this.selectedQuote) {
			i = Math.floor((Math.random() * this.quotes.length));
		}
		
		this.selectedQuote = this.quotes[i];
		return this.selectedQuote;
	}
	
	this.getAllQuotes = function () {
		return this.quotes;
	}

	this.getImage = function () {
		var i = Math.floor((Math.random() * this.images.length));
		
		while (this.images[i] === this.selectedImage) {
			i = Math.floor((Math.random() * this.images.length));
		}
		
		this.selectedImage = this.images[i];
		return this.selectedImage;
	}
});