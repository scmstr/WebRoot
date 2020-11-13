

// function search() {
        
//     var request = new XMLHttpRequest();
//     //var data;
//     var input = document.getElementById("search").textContent;

//     request.open('GET', "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&input=" + input + "&key=AIzaSyB6TVzwO2st38aW8DznH6E9NCMIuawc-Bs");
//     request.onload = function() {
//         var response = request.response;
//         var parsedData = JSON.parse(response);
//         console.log(parsedData);
//         //data = parsedData;
//     }

//     request.send();
// }




   
var request = new XMLHttpRequest();
//var data;
request.open('GET', "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&input=" + "julios" + "&key=AIzaSyB6TVzwO2st38aW8DznH6E9NCMIuawc-Bs");
request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    //data = parsedData;
}
request.send();




// var request = new XMLHttpRequest();

// request.open('GET', "https://api.giphy.com/v1/gifs/random?api_key=TQESFhwanOQoqCjuJqBvsrENlKfrh9EV&tag=bike");
// request.onload = function() {
//     var response = request.response;
//     var parsedData = JSON.parse(response);
//     console.log(parsedData);
//     //data = parsedData;

//     var outputHere = document.getElementById('outputHere');
//     //put stuff in the output place on the html
// }

// request.send();
