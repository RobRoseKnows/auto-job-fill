window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();
var clientText = "sup";
console.log("Hey in client.");