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

//Submit name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
        //Create request object
    var request = new XMLHttpRequest();
    
    //read the request
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take an action
            if(request.status === 200) {
                    //Capture list of names
                     var names = request.responseText;
                     names = JSON.parse(names);
                     var list = '';
                     for (var i=0; i<names.length; i++) {
                     list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
            }
        }
        
    };
    //Make the request
    request.open('GET', 'http://lakshman809.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    //Make request to server and send name
    

};