var linkedInRegExp = /^((https?:\/\/)?(?:www\.)?linkedin.com(?:\/in)?\/)?([A-Za-z0-9]{5,30})$/i;
var githubRegExp = /^((https?:\/\/)?(?:www\.)?github.com\/)?([A-Za-z\d](?:[A-Za-z\d]|-(?=[A-Za-z\d])){0,38})$/i;
var devpostRegExp = /^((https?:\/\/)?(?:www\.)?devpost.com\/)?([A-Za-z\d_-]{1,40})$/i;
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var regExpDict = {
  'email-entry': emailRegExp,
  'linked-in-url': linkedInRegExp,
  'github-url': githubRegExp,
  'devpost-url': devpostRegExp
};

var regExpGroups = {
  'email-entry': { 
    Whole: 0,
    UserName: 0   // This isn't technically correct, but close enough.
  },
  'linked-in-url': {
    Whole: 0,
    LeftOfName: 1,
    Protocol: 2,
    UserName: 3
  },
  'github-url': {
    Whole: 0,
    LeftOfName: 1,
    Protocol: 2,
    UserName: 3
  },
  'devpost-url': {
    Whole: 0,
    LeftOfName: 1,
    Protocol: 2,
    UserName: 3
  }
};

var canonicalFormat = {
  'email-entry': '',
  'linked-in-url': 'https://linkedin.com/in/',
  'github-url': 'https://github.com/',
  'devpost-url': 'https://devpost.com/'
};