  async function fetchBates() {
 	var response = await fetch('geneflo.json');
	var data = await response.json();
	var imageUrl = data.url;
	document.getElementById('Batesdemogrpahics').innerHTML = `<img src="${imageUrl}" alt="Flow Demo">`;
    }

