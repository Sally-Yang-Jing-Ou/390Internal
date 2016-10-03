(function() {
		var	$body = document.querySelector('body');

		(function() {
				console.log('going to another page');
				console.log(sessionStorage.getItem('probability'));
				console.log(document.getElementById("header"));
				//document.getElementById("prob").innerText = 2; //xmlHttp.responseText;
		})();
		// Need a function to process the input and submit to our database, http call?
})();

document.addEventListener('DOMContentLoaded', function() {
   // your code here
   document.getElementById("prob").innerText = "Your Dream has chance of " + sessionStorage.getItem('probability');
}, false);