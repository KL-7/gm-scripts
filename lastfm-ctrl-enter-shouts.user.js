// ==UserScript==
// @name           Last.fm Ctrl+Enter Shout
// @version        1.0
// @date           04/06/2010
// @author         Kirill Lashuk aka KL-7
// @namespace      coverfm.appspot.com
// @description    Allow submiting shouts by pressing Ctrl+Enter.
// @include        http://www.last.fm/*
// @include        http://www.lastfm.*/*
// ==/UserScript==

(function () {
	var shoutmsg = document.getElementById('shoutmsg');
	if (shoutmsg) {
		shoutmsg.setAttribute('onkeypress',
			'if (this.value != "" && event.ctrlKey && event.keyCode==13) \
			{this.parentNode.submit.click();}');
	}
})();