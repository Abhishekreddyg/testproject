chrome.tabs.query({}, function(tabs) {
    var title= "titles:";
  
      tabs.forEach(function(tab) {
        console.log('title: ', tab.title);
         title +=  tab.title + '<br>'; 
    }); 
   
  tDisplay = document.getElementById('showtitle');
  tDisplay.innerHTML = title;
});
