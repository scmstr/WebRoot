
var request = new XMLHttpRequest();
var data;


// request.open('GET', "https://hplussport.com/api/products");
request.open('GET', "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&input=dominos&key=AIzaSyB6TVzwO2st38aW8DznH6E9NCMIuawc-Bs");



request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
    console.log(parsedData);
    data = parsedData;
}

request.send();