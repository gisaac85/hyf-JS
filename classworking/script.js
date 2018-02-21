var say = document.getElementById('say');
say.onclick = function () {


    var fname = document.getElementById('first_name').value;
    var lname = document.getElementById('last_name').value;

    var helloResult = 'Hello <b>' + fname + '</b> ' + lname;

    document.getElementById('result').innerHTML = helloResult;

    document.getElementById("print").innerHTML = str;
}




//document.getElementById('say').addEventListener('click', say_hi);