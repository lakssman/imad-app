//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    //Make request to counter endpoint
    
    //read the request
    
    //render the variable
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHtml = counter.toString();
};