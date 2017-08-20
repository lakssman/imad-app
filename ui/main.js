//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    //Create request object
    var request = new XMLHttpRequest();
    
    //read the request
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take an action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    //Make the request
    request.open('GET', 'http://lakshman809.imad.hasura-app.io/counter', true);
    request.send(null);
};