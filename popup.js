$(document).ready(function() {
  
  var queryInfo = {
    active: true,
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    
      tabs.forEach(function(tab) {
        console.log('title: ', tab.title);
    });

  
});
