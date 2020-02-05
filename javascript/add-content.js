var today = new Date();
function time (){
    //input
    var hournow = prompt ('enter the time now','it will be 0-24');
    var greeting;
    //process
    if (hournow >= 18 && hournow <= 24){
        greeting = 'good evening!';
    }
    else if (hournow >= 12 && hournow < 18){
        greeting = 'good afternoon!';
    }
    else if (hournow >= 0 && hournow < 12){
        greeting = 'good morning!';
    }
    else {
        greeting = 'welcome!';
    }
    //output
    return greeting;
}
var greeting = time();
document.write ('<h3>' + greeting + '</h3>');
