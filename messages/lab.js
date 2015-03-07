function parse(){
	request = new XMLHttpRequest();
	request.open("GET", "http://messagehub.herokuapp.com/messages.json", true);
	request.onreadystatechange = parseData;
	request.send();
}

/* Comment test */

function parseData() {
	if (request.readyState == 4 && request.status == 200) {
		messagesDiv = document.getElementById("messages");
		converted = JSON.parse(request.responseText);
		for (i = 0; i < converted.length; i++) {
			messagesDiv.innerHTML += "<p>" + (converted[i]['content']) + "</p>";
		}
	}
	else if (request.readyState == 4 && request.status == 304){
		alert("No data changed, move along");
	}
	else if (request.readyState == 4 && request.status == 404){
		alert("Error: Content not found");
	}
}