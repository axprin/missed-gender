// initial setup of options page
function setup() {
	chrome.storage.sync.get(["deadName", "chosenName"], function(data) {
		document.getElementById('dead-name').value = data.deadName === undefined ? '' : data.deadName;
		document.getElementById('chosen-name').value = data.chosenName === undefined ? '' : data.chosenName;
	});
}

// sets confirmation message
function setConfirmation() {
	var confirmation = document.getElementById('confirmation');
	var save = document.getElementById('save');

	confirmation.setAttribute('style', 'display: block');
	save.setAttribute('style', 'display: none');
}

// removes confirmation message
function removeConfirmation() {
	var confirmation = document.getElementById('confirmation');
	var save = document.getElementById('save');

	confirmation.setAttribute('style', 'display: none');
  	save.setAttribute('style', 'display: block');
}

// Saves options to chrome.storage
function saveOptions() {
	var deadName = document.getElementById('dead-name').value;
	var chosenName = document.getElementById('chosen-name').value;
	var confirmation = document.getElementById('confirmation');
	var save = document.getElementById('save');
	chrome.storage.sync.set({
		"deadName": deadName,
		"chosenName": chosenName
	}, setConfirmation);
}

// function clearOptions() {
// 	chrome.storage.sync.clear();
// 	setConfirmation();
// }

// set it up and add listeners
setup();
document.getElementById('save').addEventListener('click', saveOptions);
// document.getElementById('clear').addEventListener('click', clearOptions);
document.getElementById('dead-name').addEventListener('input', removeConfirmation);
document.getElementById('chosen-name').addEventListener('input', removeConfirmation);
