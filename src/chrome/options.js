window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

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
    }
  );
}

function check_validation(id) {
  var fieldVal = $(`#${id}`).val();

  if(regExpDict.hasOwnProperty(id)){
    var regExp = regExpDict[id];
    var regExpGroup = regExpGroups[id];
  
    var res = regExp.exec(fieldVal);
    if (res === null) {
      return false;
    } else {
      return `${canonicalFormat[id]}${res[regExpGroups[id].UserName]}`;
    }
  } else {
    return fieldVal;
  }
  
}

function submit_options(event) {
  console.log("submit_options triggered");  
  event.preventDefault();

  var fieldVals = {};

  jQuery.each(idByPropName, function (key, id) {
    var valid = check_validation(id);

    if(valid === false) {
      console.log("Someone messed up, bad input.");
    } else {
      fieldVals[key] = valid;
    }
  });
  
  jQuery.each(fieldVals, function (key, value) {
    $(`#${idByPropName[key]}`).val(value);
  });

  browser.storage.sync.set(fieldVals, function() {
    Materialize.toast('Updated settings.', 4000);
  });
}

$(document).ready(function () {
  restore_options();
  $('#options-form').submit(submit_options);
});