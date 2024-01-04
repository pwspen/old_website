var waittime = 5000;
var result = 0;

minionwaittime = 5;
errorwaittime = 15;
gandalfwaittime = 30;

cycletime = 500;
hz = 1000/cycletime;
minionodds = 1 - (1 / (hz * minionwaittime));
errorodds = 1 - (1 / (hz * errorwaittime));
gandalfodds = 1 - (1 / (hz * gandalfwaittime));

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
    
    if (Math.random() > 0.5) {
        setTimeout(function() {settopnum(result);}, waittime);
        }
        else {
        setTimeout(function() {alert("ERROR..??");}, waittime * 0.9);
        }
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
            alert("6 BAGS IS NOT POSSIBLE THE SCALE ONLY GOES TO 5. you dont deserve this web site go away.");
            setTimeout(function() {document.getElementById('gandalf').style.display = 'block';}, 100);
        }
        alert("5 is the maximum number of bags of popcorn...\n despite what some people might say.......");
        document.getElementById('b4').value = -999
        return;
    }


    else if (input1 < 0) {
        alert('Negative stars is not possible... try again');
        document.getElementById('b4').value = -999
        return;
    }

    popup();

    result = Number(input1) * 0.8 - 0.00000001 - 1;
    if (Math.random() > 0.5) {
    setTimeout(function() {setbotnum(result);}, waittime);
    }
    else {
    setTimeout(function() {alert("ERROR..??");}, waittime * 1.5);
    }
}

function popup() {
    var image = document.getElementById("loadingblock");
    image.style.display = "block";
    if (Math.random() > 0.6) {
        var wt = waittime * 3;
    }

    else {
        var wt = waittime;
    }

    setTimeout(function() {
        image.style.display = "none";
    }, wt);
}

function settopnum(stars) {
    document.getElementById('b2').value = stars;
}

function setbotnum(bags) {
    document.getElementById('b4').value = bags;
}

const errormessages = [ "G Amato sends his regards.",
                        "Get Punked IDIOT Grag Head Site LOL FUCK YOU",
                        "Get Minioned LOL LOSER!!",
                        "StarTrek4.location is not 'San Francisco';",
                        "Immortality is not 'Achieved';",
                        "Getting back to the movies",
                        "'Movies like Tom Cruise in them' not found;",
                        "Bottle is not 'Empty';",
                        "From...?",
                        "MarkPronsk.location not found;",
                        "In the HGTV series Property Brothers, Jonathan and Drew Scott help couples find, buy, remodel and transform extreme fixer-uppers into their ultimate dream house. Watch today on hgtv.com!"]

function generateerror() {
    if (Math.random() > errorodds) {
        alert("An error occurred! Please contact the site administrator.\n\nError message: ".concat(errormessages[Math.floor(Math.random()*errormessages.length)]));
    }
}

function randomPosition() {
    var x = (window.innerWidth - 250) * Math.random();
    var y = (window.innerHeight - 250) * Math.random();
    return { x: x, y: y };
}

function minion() {
    var img = document.getElementById('minion');
    var rnum = Math.random();

    if (img.style.display == 'block') {
        if (rnum > 0.5) {img.style.display = 'none'}
    }

    else if (rnum > minionodds) {
    var pos = randomPosition();
    img.style.left = pos.x + 'px';
    img.style.top = pos.y + 'px';
    img.style.display = 'block';
    }
}

function flashgandalf() {
    var img = document.getElementById('gandalf');
    var rnum = Math.random();
    if (rnum > gandalfodds && img.style.display == 'none') {
        img.style.display = 'block';
        setTimeout(function() {img.style.display = 'none';}, 1000);
    }
}

function cycle() {
    generateerror();
    minion();
    flashgandalf();
}

setInterval(cycle, cycletime);

  