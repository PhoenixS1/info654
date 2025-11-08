  async function fetchBatesdemographics() {
 	var response = await fetch('geneflo.json');
	var data = await response.json();
	var imageUrl = data.url;
	document.getElementById('Batesdemogrpahics').innerHTML = `<img src="https://informationr.net/ir/27-SpIssue/CoLIS2022/figs/colis2201fig1.png" alt="Flow Demo">`;
    }

