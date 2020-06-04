/* Open browser on a set interval */

function openBrowserTab(){
        var opn = require('opn');
        var url = ""; // site url goes here;
        // open browser with url
        opn(url, {app: ['google chrome', '--incognito']});
    }

function intervalFunc() {
        openBrowserTab();
        console.log("Browser opened, Time: "+Date().toString());

}

//15 Minute Interval
setInterval(intervalFunc,15*60*1000);

