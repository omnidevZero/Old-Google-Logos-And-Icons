'use strict';
var urls = {
    "gmail_favicon": chrome.runtime.getURL("/images/gmail/gmail_favicon.png"),
    "gmail_logo": chrome.runtime.getURL("/images/gmail/logo_gmail_lockup_default_2x_r2_old.png"),
    "drive_favicon": chrome.runtime.getURL("/images/drive/drive_favicon.png"),
    "drive_logo": chrome.runtime.getURL("/images/drive/drive_logo.png"),
    "calendar_favicon": chrome.runtime.getURL("/images/calendar/calendar_favicon.png"),
    "calendar_logo": chrome.runtime.getURL("/images/calendar/calendar_logo.png"),
    "meet_favicon": chrome.runtime.getURL("/images/meet/meet_favicon.png"),
    "meet_logo": chrome.runtime.getURL("/images/meet/meet_logo.png")
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