var HttpClient = function () {
	this.get = function (aUrl, aCallback) {
		var anHttpRequest = new XMLHttpRequest();
		anHttpRequest.onreadystatechange = function () {
			if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
				aCallback(anHttpRequest.responseText);
		}

		anHttpRequest.open("GET", aUrl, true);
		anHttpRequest.send(null);
	}
}

var client = new HttpClient();
client.get('https://api.fixer.io/latest?base=USD', function (response) {
	currency = JSON.parse(response);
	//console.log(currency);

	var output = document.getElementById('output');
	console.log(currency);
	output.innerHTML = currency.rates.EUR;
});
