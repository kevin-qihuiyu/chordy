var timer = null;
var interval_value;
var chordNames = [
    'C','F','G','#F','A','D','E','bA','bD','bE','B','bB'
]
var chordPool = [];

function prepareChordPool() {
    var checks = document.querySelectorAll('#selectChords input[type="checkbox"]');
    chordPool = [];
    for(var i =0; i < checks.length-1; i++) {
        var check = checks[i];
        if(check.checked == true) {
            chordPool.push(chordNames[i]);
        }
    }
    console.log(chordPool)
}

function displayChord(chordN) {
    document.getElementById('chordName').innerHTML = chordPool[chordN];
    document.getElementById('chordName').style.fontSize = '255px';
}

function start() {
    clearInterval(timer);
    var radios = document.getElementsByName('interval');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            interval_value = radios[i].value;
            break; 
        }
    }
    prepareChordPool();

    if (chordPool.length <=1 ) {
        document.getElementById('chordName').innerHTML = " Please select more chords...";
        document.getElementById('chordName').style.fontSize = '40px';
        document.getElementById('chordName').style.textAlign = 'center';
        return;
    }

    console.log("Ready...");
    document.getElementById('chordName').innerHTML = "Ready...";
    document.getElementById('chordName').style.fontSize = '80px';

    var chordN, chordPrev;
    timer = setInterval(function(){
        do {
            chordN = Math.floor(Math.random() * chordPool.length);
        }
        while (chordN === chordPrev)
        // console.log(chordN);
        displayChord(chordN);
        chordPrev = chordN;
    }, interval_value )
}



function toggleAllSelect(containerId) {
    // All checkbox booleans
    var checks = document.querySelectorAll('#' + containerId + ' input[type="checkbox"]');
    var toggleAllCheck = checks[checks.length - 1];
    for(var i =0; i< checks.length;i++) {
        var check = checks[i];
        if(!check.disabled) {
            // Set all checkbox the same status as the last checkbox
            check.checked = toggleAllCheck.checked;
        }
    }
}

