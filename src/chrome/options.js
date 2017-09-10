window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

/* Saves options to chrome.storage.sync.
// function save_options(event) {
//   var firstName = $('#fname').val();
//   var lastName = $('#lname').val();
//   alert("Hello %s %s" % (firstName, lastName));
//   event.preventDefault();
//   /*var likesColor = document.getElementById('like').checked;
//   chrome.storage.sync.set({
//     favoriteColor: color,
//     likesColor: likesColor
//   }, function () {
//     // Update status to let user know options were saved.
//     var status = document.getElementById('status');
//     status.textContent = 'Options saved.';
//     setTimeout(function () {
//       status.textContent = '';
//     }, 750);
//   });
// }
*/

const idByPropName = {
  'fnameVal': 'fname',
  'lnameVal': 'lname',
  'emailVal': 'email-entry',
  'cellPhoneNum': 'cell-phone',
  'linkedInUrl': 'linked-in-url',
  'githubUrl': 'github-url',
  'devpostUrl': 'devpost-url',
  'websiteUrl': 'website-url'
}

// Restores data for all the fields in browser.storage.
function restore_options() {
  browser.storage.sync.get(
    // Take the keys out of the idByPropName dictionary.
    Object.keys(idByPropName),
    // items is an object each of the keys as a 
    function (items) {
      jQuery.each(idByPropName, function (key, id) {
        if (!(items[key] === undefined)) {
          $(`#${id}`).val(items[key]);
        }
      });
    });
}

function check_validation(id) {
  var fieldVal = $(`#${id}`).val();
  var regExp = regExpDict[id];
  var regExpGroup = regExpGroups[id];

  var res = regExp.exec(fieldVal);
  if (res === null) {
    return false;
  } else {
    return `${canonicalFormat}${res[regExpGroups[id].UserName]}`
  }
}

function submit_options(event) {
  jQuery.each(idByPropName, function (key, id) {

  });

  console.log("submit_options triggered");
  event.preventDefault();
}

$(document).ready(function () {
  restore_options();
  $('#options-form').submit(submit_options);
});