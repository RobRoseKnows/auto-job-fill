const idByPropName = {
  'fnameVal': 'fname',
  'lnameVal': 'lname',
  'emailVal': 'email-entry',
  'cellPhoneNum': 'cell-phone',
  'linkedInUrl': 'linked-in-url',
  'githubUrl': 'github-url',
  'devpostUrl': 'devpost-url',
  'websiteUrl': 'website-url'
};

console.log(clientText);
$(document).ready(function(){
  var applicationForm = $('form');

  browser.storage.sync.get(
    Object.keys(idByPropName), 
    function(items) {
      $("input[name='name']").val(`${items.fnameVal} ${items.lnameVal}`);
      $("input[name='email']").val(items.emailVal);
      $("input[name='phone']").val(items.cellPhoneNum);
      $("input[name='urls\[LinkedIn\]'").val(items.linkedInUrl);
      $("input[name='urls\[GitHub \]'").val(items.githubUrl);
      $("input[name='urls\[Portfolio\]'").val(items.devpostUrl);
  });
});
