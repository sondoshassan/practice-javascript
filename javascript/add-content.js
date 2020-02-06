var hournow;
function time (){
    //input
    var hournow = prompt ('enter the time now','it will be 0-24'); //identify var and store the data from prompt 
    var greeting; //identify var 
    //process
    if (hournow >= 18 && hournow <= 24){ //if statment to determine which massege I want to sent for user
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
document.write ('<p>' + time() + '</p>');


