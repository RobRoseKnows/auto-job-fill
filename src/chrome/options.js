// Saves options to chrome.storage.sync.
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
//   });*/
// }

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true
  }, function (items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
}

function submitOptions(event) {
  var firstName = $('#fname').val();
  var lastName = $('#lname').val();
  alert(`Hello ${firstName} ${lastName}`);
  console.log(`Hello ${firstName} ${lastName}`)
  event.preventDefault();
}

$(document).ready(function () {
  //restore_options();
  $('#options-form').submit(submitOptions);
});