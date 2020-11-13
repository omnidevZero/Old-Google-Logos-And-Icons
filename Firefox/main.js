'use strict';
var urls = {
    "gmail_favicon": browser.runtime.getURL("/images/gmail/gmail_favicon.png"),
    "gmail_logo": browser.runtime.getURL("/images/gmail/logo_gmail_lockup_default_2x_r2_old.png"),
    "drive_favicon": browser.runtime.getURL("/images/drive/drive_favicon.png"),
    "drive_logo": browser.runtime.getURL("/images/drive/drive_logo.png"),
    "calendar_favicon": browser.runtime.getURL("/images/calendar/favicons/favicon_v2014_31.ico"),
    "calendar_logo": browser.runtime.getURL("/images/calendar/calendar_logo.png"),
    "meet_favicon": browser.runtime.getURL("/images/meet/meet_favicon.png"),
    "meet_logo": browser.runtime.getURL("/images/meet/meet_logo.png")
}

function change(page){
    switch (page) {
        case "gmail":
            document.querySelector('link[rel="shortcut icon"]').href = urls.gmail_favicon;
            break;
        case "drive":
            document.querySelector('link[rel="icon"]').href = urls.drive_favicon;
            break;
        case "calendar":
            document.querySelectorAll('link[type="image/x-icon"]')[0].href = urls.calendar_favicon;
            document.querySelectorAll('link[type="image/x-icon"]')[1].href = urls.calendar_favicon;
            changeDynamics();
            break;
        case "meet":
            var links = document.querySelectorAll('link[rel="shortcut icon"]');
            links.forEach(element => {
                element.href = urls.meet_favicon;
            });
        default:
            break;
    }
}

function changeDynamics(){
    var day = new Date().getDate();
    document.querySelectorAll('link[type="image/x-icon"]')[0].href = browser.runtime.getURL(`/images/calendar/favicons/favicon_v2014_${day}.ico`);
    document.querySelectorAll('link[type="image/x-icon"]')[1].href = browser.runtime.getURL(`/images/calendar/favicons/favicon_v2014_${day}.ico`);
    var dayZeroed = ("0" + day).slice(-2);
    var logo = document.querySelector('img[src*="//ssl.gstatic.com/calendar/images/dynamiclogo/lUkwQcfJg4wWmQhhAFLWO0z3HjG6yOs9/"]');
    logo.src = browser.runtime.getURL(`/images/calendar/logos/cal_${dayZeroed}_v2.png`);
    logo.srcset = browser.runtime.getURL(`/images/calendar/logos/cal_${dayZeroed}_v2.png`);
}

if (window.location.href.includes("mail.google.com")){
    change("gmail");
}
if (window.location.href.includes("drive.google.com")){
    change("drive");
}
if (window.location.href.includes("calendar.google.com")){
    change("calendar");
}
if (window.location.href.includes("meet.google.com")){
    change("meet");
}