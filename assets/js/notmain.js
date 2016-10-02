(function() {
		var	$body = document.querySelector('body');

		(function() {
				var imagesDict = {
						images: {
							'images/bgsky.jpg': 'center',
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
							//$bg.style.backgroundPosition = imagesDict.images[k];
							$wrapper.appendChild($bg);
						$bgs.push($bg);
				}
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');
				// loop
				// window.setInterval(function() {
				// 	lastPos = pos;
				// 	pos++;
				// 	    // Wrap to beginning
				// 		if (pos >= $bgs.length)
				// 			pos = 0;

				// 	    // Swap images
				// 		$bgs[lastPos].classList.remove('top');
				// 		$bgs[pos].classList.add('visible');
				// 		$bgs[pos].classList.add('top');

				// 		window.setTimeout(function() {
				// 			$bgs[lastPos].classList.remove('visible');
				// 		}, imagesDict.delay / 2);

				// }, imagesDict.delay);
		})();
		// Need a function to process the input and submit to our database, http call?
})();

function processText() {

	let dream = document.getElementById("email").value;
	var input = dream.split(" ");

	//var lex = nlp_compromise.lexicon();

	//var analysis = nlp_compromise.text(dream).tags();
	var findTags = ["Infinitive", "Noun", "Adverb", "Organization", "Country", "City", "Comparative", "Superlative", "Adjective", "PresentTense", "PastTense", "FutureTense", "Abbreviation", "Plural"];
	var tags = [];
	var tagCounter = 0;

	for (var i = 0; i < input.length; i++) {
		var test = nlp_compromise.text(input[i]).tags();
		if (findTags.indexOf(test[0][0]) > -1) {
			tags[tagCounter] = input[i];
			tagCounter++;
		}
	}

/*	for (var i = 0; i < analysis[0].length; i++) {
		if (findTags.indexOf(analysis[0][i]) > -1) {
			tags[tagCounter] = input[i];
			tagCounter++;
		}
	}*/

	alert(tags);

}