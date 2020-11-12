

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




document.getElementById("submitIt").addEventListener("click", function () {        
    var request = new XMLHttpRequest();
    //var data;
    var input = document.getElementById("search").textContent;

    request.open('GET', "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&input=" + input + "&key=AIzaSyB6TVzwO2st38aW8DznH6E9NCMIuawc-Bs");
    request.onload = function() {
        var response = request.response;
        var parsedData = JSON.parse(response);
        console.log(parsedData);
        //data = parsedData;
    }

    request.send();
});