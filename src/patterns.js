var linkedInRegExp = /^((https?:\/\/)?(?:www\.)?linkedin.com\/in\/)?(?<usern>[A-Za-z0-9]{5,30})$/i;
var githubRegExp = /^((https?:\/\/)?(?:www\.)?github.com\/)?(?<usern>[A-Za-z\d](?:[A-Za-z\d]|-(?=[A-Za-z\d])){0,38})$/i;
var devpostRegExp = /^((https?:\/\/)?(?:www\.)?devpost.com\/)?(?<usern>[A-Za-z\d_-]{1,40})$/i;
var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
