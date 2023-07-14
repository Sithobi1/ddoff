const DDOFORUMFILTER = {urls: ["*://forums.ddo.com/*"]}
const DDOMAINTURL = "http://maintenance.daybreakgames.com/";

chrome.webRequest.onBeforeRedirect.addListener(
  function (details) {
    if (details.redirectUrl == DDOMAINTURL) {
      url = new URL(details.url);
      if (url.hostname == "forums.ddo.com" && url.pathname.startsWith("/forum")) {
        console.log("redirecting to forums-old");
        console.log(details);
        url.hostname = "forums-old.ddo.com";
        chrome.tabs.update(details.tabId, {url:url.toString()});
      }
    }
  },
  DDOFORUMFILTER
);