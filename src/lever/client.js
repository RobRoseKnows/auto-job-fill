console.log(clientText);
$(document).ready(function(){
  var applicationForm = $('form');

  $.get(browser.extension.getURL('src/lever/instructions.html'), function(instructionsRet) {
    $('.application-form:first > h4:first', applicationForm).after(instructionsRet);
  });
});
