// ==UserScript==
// @name           Last.fm Images
// @version        1.1
// @date           02/06/2010
// @author         Kirill Lashuk aka KL-7
// @namespace      coverfm.appspot.com
// @description    Add link to album's covers on last.fm. Add full-size link on image page.
// @include        http://www.last.fm/music/*/*
// @include        http://www.lastfm.*/music/*/*
// @include        http://www.last.fm/music/*/+images/*
// @include        http://www.lastfm.*/music/*/+images/*
// @exclude        http://www.last.fm/music/+*
// @exclude        http://www.lastfm.*/music/+*
// @exclude        http://www.last.fm/music/*/_/*
// @exclude        http://www.lastfm.*/music/*/_/*
// ==/UserScript==

(function () {
	var GM_Debug = 0;
	if(GM_Debug) {
		var log = (unsafeWindow.console) ? unsafeWindow.console.log : GM_log;
	} else {
		var log = function(){};
	}

	var ru = window.location.host.match(/lastfm.ru$/) ? 1 : 0;

	// If album page
	var album_page = document.getElementsByClassName('current')[0]
			.firstChild.href.match(/albums$/);

	var view = document.getElementById('view');

	// If image view page
	if (view) {
		// Add full-size image link
		var art_src = view.getElementsByTagName('img')[0].src;
		var link = document.createElement('a');
		link.href = art_src.replace(/serve\/[^\/]*/, 'serve/_');
		link.innerHTML = new Array('Get full size', 'Скачать')[ru];

		var span = document.createElement('span');
		span.className = 'moduleOptions';
		span.appendChild(link);

		var uploadInfo = document.getElementsByClassName('uploadInfo')[0];
		uploadInfo.parentNode.insertBefore(span, uploadInfo);
		log('fullsize link added');

		// If album cover page add album covers page link
		if (album_page) {
			var p = document.getElementsByClassName('pagehead')[0]
					.getElementsByTagName('p')[0];
			var covers_link = document.createElement('a');
			covers_link.href = p.lastChild.href + '/+images';
			covers_link.innerHTML = new Array('Cover Arts', 'Обложки')[ru];
			p.appendChild(document.createTextNode(' » '));
			p.appendChild(covers_link);
			log('covers back-link added');
		}
	// If album main page
	} else if (album_page && document.getElementById('catalogueHead')) {
		var covers_link = document.createElement('a');
		covers_link.href = window.location.href + '/+images';
		covers_link.innerHTML = new Array('See all cover arts', 'Все обложки')[ru];
		var span = document.createElement('span');
		span.className = 'moduleOptions';
		span.appendChild(covers_link);

		document.getElementById('catalogueHead')
				.getElementsByClassName('albumCover')[0].appendChild(span);
		log('covers link added');
	}
})();