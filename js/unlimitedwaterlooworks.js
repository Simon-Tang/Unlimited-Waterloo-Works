(function () {
    // Apply our css last
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('css/unlimitedwaterlooworks.css');
    (document.head || document.documentElement).appendChild(style);

    $('a.brand').text('﻿ＵＮＬＩＭＩＴＥＤ ＷＡＴＥＲＬＯＯ ＷＯＲＫＳ');
})();
