(function() {
		var	$body = document.querySelector('body');

		(function() {
				var imagesDict = {
						images: {
							'images/bg1.jpg': 'center',
							'images/bg2.jpg': 'center',
							'images/bg3.jpg': 'center'
						},
						delay: 3000
				};
				var	pos = 0, lastPos = 0,
					$wrapper, $bg, $bgs = [], 
					k, v;

			    // Create background stuff - wrapper, images.
				$wrapper = document.createElement('div');
				$wrapper.id = 'bg';
				$body.appendChild($wrapper);

				for (k in imagesDict.images) {
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = imagesDict.images[k];
							$wrapper.appendChild($bg);
						$bgs.push($bg);
				}
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');
				// loop
				window.setInterval(function() {
					lastPos = pos;
					pos++;
					    // Wrap to beginning
						if (pos >= $bgs.length)
							pos = 0;

					    // Swap images
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, imagesDict.delay / 2);

				}, imagesDict.delay);
		})();
		// Need a function to process the input and submit to our database, http call?
})();

function getProbability(tags) {
	// check the input array of tages
	 //window.location.href = "./result.html";
	if(tags === undefined)
	{
		return undefined;
	}
	
	// construct http calling
	// var frm = document.getElementById("search");
	// frm.action = "";
	// frm. = tages[0];
	// frm.submit();
	
	// ajax
	var xmlHttp = new XMLHttpRequest();
	//xmlHttp.setRequestHeader("Content-type","text/plain");
	
	// prepare data
	var name = "key_list=";
	var data = name;
	data = data + tags[0].text;
	for(var i = 1; i < tags.length; i++)
	{
		data = data + "&";
		data = data + name;
		data = data + tags[i].text;
	}
	
	// set asy. function
	// xmlHttp.onreadystatechange = function()
	  // {
	    // if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	    // {
		  // alert(xmlHttp.responseText);
		// }
	  // };
	xmlHttp.open("POST", "http://ec2-54-159-120-252.compute-1.amazonaws.com:443/cgi-bin/dreamer.py", false);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send(data);
	var ret = xmlHttp.responseText;
	// calculate percentage
	var val_ret = new Number(ret);
	val_ret = val_ret * 100.0;
	// set the lower bound
	if(val_ret < 0.00000001)
	{
		val_ret = 0.00000001;
	}
	// to percentage string
	ret = val_ret.toString();
	var ret_length = ret.length;
	if(ret_length > 10)
	{
		ret = ret.substr(0, 10);
	}
	ret = ret + "%";
	
	sessionStorage.setItem('probability', ret);
	if(sessionStorage.getItem('probability')){
		console.log('store success');
	}else{
		console.log('store fail');
	}
	//alert(xmlHttp.responseText);
	//document.getElementById("prob").innerText = 2; //xmlHttp.responseText;
}


// function processText() {

// 	var dream = document.getElementById("email").value;
// 	var input = dream.split(" ");

// 	//var lex = nlp_compromise.lexicon();

// 	//var analysis = nlp_compromise.text(dream).tags();
// 	var findTags = ["Infinitive", "Noun", "Adverb", "Organization", "Country", "City", "Comparative", "Superlative", "Adjective", "PresentTense", "PastTense", "FutureTense", "Abbreviation", "Plural"];
// 	var tags = [];
// 	var tagCounter = 0;

// 	for (var i = 0; i < input.length; i++) {
// 		var test = nlp_compromise.text(input[i]).tags();
// 		if (findTags.indexOf(test[0][0]) > -1) {
// 			tags[tagCounter] = input[i];
// 			tags[tagCounter ]= {'text' : input[i]}
// 			tagCounter++;
// 		}
// 	}

// 	getProbability(tags);
// }



 angular.module('myApp', ['ngTagsInput'])
    .controller('MyCtrl', function($http, $window) {
    var todoList = this;
    var index = 0;
    todoList.tags = [
        // { text: 'this' },
        // { text: 'some' },
        // { text: 'cool' },
        // { text: 'tags' }
    ];

    todoList.processText = function(event){
    	// if(event.keyCode == 32){
    	// alert("this");
    		console.log(todoList.dreamtext - input);
    	// todoList.tags.push({ text: todoList.dreamtext });
		// let dream = document.getElementById("email").value;
			var dream = todoList.dreamtext;
			var	input = dream.split(" ");
			var findTags = ["Infinitive", "Noun", "Adverb", 
							"Organization", "Country", "City", 
							"Comparative", "Superlative", "Adjective", 
							"PresentTense", "PastTense", "FutureTense", 
							"Abbreviation", "Plural"];
			var tags = [];
			var tagCounter = 0;
			todoList.tags = [];

			for (var i = 0; i < input.length; i++) {
				var test = nlp_compromise.text(input[i]).tags();
				console.log("at index: " + i + test + "00i" + findTags.indexOf(test[0][0]));
				console.log( findTags.indexOf(test[0][0])>-1);
				if (findTags.indexOf(test[0][0]) > -1) {
					console.log(test[0][0] + " hi ");
					tags[tagCounter] = input[i];
					tagCounter++;
					todoList.tags.push({text: input[i]});
					console.log(todoList.tags);
				}
			}

	};

	todoList.getProb = function() {
		//$window.location.href = "./result.html";
		window.getProbability(todoList.tags);
	
	}
});