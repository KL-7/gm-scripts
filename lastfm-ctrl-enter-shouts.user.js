// ==UserScript==
// @name           Last.fm Ctrl+Enter Shouts
// @version        1.3
// @date           05/04/2012
// @author         Kirill Lashuk aka KL-7
// @namespace      http://about.me/kl7
// @description    Allows submitting shouts by pressing Ctrl+Enter or Met+Enter (Meta is Cmd on Mac OS X).
// @include        http://www.last.fm/*
// @include        http://www.lastfm.*/*
// ==/UserScript==

(function() {
    var shoutmsg = document.getElementById('shoutmsg');
    if (shoutmsg) {
        shoutmsg.setAttribute(
            "onkeypress",
            "if (this.value != '' && (event.ctrlKey || event.metaKey) && event.keyCode == 13) { this.parentNode.submit.click(); }"
        );
    }
})();
