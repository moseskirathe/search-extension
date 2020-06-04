console.log("Search script v1 running...");
var resultsURL = ""; /* Results page url after search goes here */
var currentURL = window.location.href; 
var courseCodes = []; /* An array of courses to be searched for */
var randomInt = getRandomInt(0,2);
/* A random course from courseCodes */
var courseCode = courseCodes[randomInt];
/* An 2D array containing chosen subj and crsNo*/
var courseSubjAndCode = courseCode.split(" ");


searchCourse(courseSubjAndCode[0], courseSubjAndCode[1]);

function searchCourse(subj, crsno){
    if(currentURL != resultsURL){
    document.getElementById("subj").value = subj;
    document.getElementById("crsno").value= crsno;
    document.getElementsByName("submit")[0].click();
    }
    else {
        var status = document.getElementsByClassName('section1')[0].getElementsByTagName("td")[0].innerHTML;
        notify(status, subj, crsno);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function notify(status, subj, crsno){
    if(status == "&nbsp;"){
        alert("Course "+subj+crsno+" is available");
        sendMessage(subj, crsno);
    } else {
        console.log("Course "+subj+crsno+" is full");
        //close current tab
        window.close();
    }
}

/* Automatically send a text message if a course is available */
function sendMessage(subj, crsno){
    var accountSid = ''; /* Twilio accountSid goes here */
    var authToken = ''; /* Twilio authToken goes here */
    var client = require('twilio')(accountSid, authToken);

  client.messages.create({ 
    body: 'Course '+subj+crsno+' '+'is available now',
     from: '', /* Twilio 'from' phone number goes here */
     to: '' /* Recipient's number goes here */
  }, function(err, message) {
    console.log(message.sid);
  }); 
}
