var x = localStorage.length;
var y = "msg" + x;

function send() {
    x = localStorage.length;
    y = "msg" + x;
    // console.log(x);
    // console.log(y);

    localStorage.setItem(y, mes.value);

    outputMessage();
}

function outputMessage() {

    for (var i = 0; i <= x; i++) {
        var q = "msg" + i;

        var finalmsg = localStorage.getItem(q) + "<br><br>";

        // console.log("f= " + finalmsg);
    }

    var temp = document.getElementById('messageBox').innerHTML = document.getElementById('messageBox').innerHTML + finalmsg;
    document.getElementById('messageBox').innerHTML = "";
    document.getElementById('messageBox').innerHTML = temp;

    window.location.reload();

}

function displayMSG() {

    for (var i2 = 0; i2 < localStorage.length; i2++) {
        var q = "msg" + i2;
        var finalmsg = localStorage.getItem(q) + "<br><br>";

        var msgs = [];
        msgs[i2] = finalmsg

        // console.log(msgs);
        var temp = document.getElementById('messageBox').innerHTML = document.getElementById('messageBox').innerHTML + msgs.join("");
        document.getElementById('messageBox').innerHTML = "";
        document.getElementById('messageBox').innerHTML = temp;
    }

    scrollToBottom("messageBox");
    // alert()
}

var scrollToBottom = (messageBox) => {
    var element = document.getElementById(messageBox);
    element.scrollTop = element.scrollHeight;
}