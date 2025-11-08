  async function fetchdogImage() {
 	var response = await fetch('geneflo.json');
	var data = await response.json();
	var imageUrl = data.url;
	document.getElementById('dogImage').innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
    }


