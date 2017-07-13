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


	Template.app.events({
		"click button" (event, instance) {

			var client = new HttpClient();
			client.get('https://api.fixer.io/latest?base=USD', function (response) {
				currency = JSON.parse(response);
				//console.log(currency);

				var convfrom = instance.$("#js-from").val();
				//console.log(convfrom);
				//console.dir($.type(currency.rates.EUR));

				var country = currency.rates.EUR

				document.getElementById('output').value = (parseFloat(country) * convfrom).toFixed(2);
			});
		},

	})
