var waittime = 5000;
var result = 0;

function calc1() {
    var threshold = 4;
    var input1 = document.getElementById('b1').value;
    if (isNaN(input1)) {
        alert("only numbers allowed. I bet your a timhead idiot.");
        return;
    }

    input1 = Number(input1);
    
    if (input1 > threshold) {
        alert("4 is the maximum number of stars, try again...");
        document.getElementById('b2').value = -999
        return;
    }

    else if (input1 < 0) {
        alert('Negative bags of popcorn is not possible... try again');
        document.getElementById('b2').value = -999
        return;
    }

    popup();

    result = Number(input1) * 1.25 - 0.00000001;
    
    setTimeout(function() {settopnum(result);}, waittime);
}

function calc2() {
    var threshold = 5;
    var input1 = document.getElementById('b3').value;

    if (isNaN(input1)) {
        alert("only numbers allowed. I bet your a timhead idiot.");
        return;
    }

    input1 = Number(input1);

    if (input1 > threshold) {
        if (input1 == 6) {
            alert("6 BAGS IS NOT POSSIBLE. THE SCALE ONLY GOES TO 5.");
        }
        alert("5 is the maximum number of bags of popcorn...\n despite what some people might say.......");
        document.getElementById('b4').value = -999
        return; // This stops the execution of the rest of the function
    }


    else if (input1 < 0) {
        alert('Negative stars is not possible... try again');
        document.getElementById('b4').value = -999
        return;
    }

    popup();

    result = Number(input1) * 0.8 - 0.00000001 - 1;
    setTimeout(function() {setbotnum(result);}, waittime);
}

function popup() {
    var image = document.getElementById("loadingblock");
    image.style.display = "block";
    setTimeout(function() {
        image.style.display = "none";
    }, waittime);
}

function settopnum(stars) {
    document.getElementById('b2').value = stars;
}

function setbotnum(bags) {
    document.getElementById('b4').value = bags;
}


  