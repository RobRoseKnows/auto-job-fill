const linkedInPatternStr = '' +
  /^((https?:\/\/)?(?:www\.)?linkedin.com\/in\/)?/.source +
  /(?<usern>[A-Za-z0-9]{5,30})$/.source;
const githubPatternStr = '' +
  /^((https?:\/\/)?(?:www\.)?github.com\/)?/.source +
  /(?<usern>[A-Za-z\d](?:[A-Za-z\d]|-(?=[A-Za-z\d])){0,38})$/.source;
const devpostPattern = '' +
  /^((https?:\/\/)?(?:www\.)?devpost.com\/)?/.source +
  /(?<usern>[A-Za-z\d_-]{1,40})$/.source;

var linkedInRegExp = new RegExp(linkedInPatternStr, 'i');
var githubRegExp = new RegExp(githubPatternStr, 'i');
var devpostRegExp = new RegExp(devpostPattern, 'i');
var urlRegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(/([-+_~.\d\w] |%[a - fA - f\d]{2,2}) *)*(\?(&?([-+_~.\d\w] |%[a - fA - f\d]{2,2}) =?)*)?(#([-+_~.\d\w] |%[a - fA - f\d]{2, 2 })*)?$ / i;
var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
