"use strict";
(function () {
    function saveOptions() {
        chrome.storage.sync.set({
            // TODO
        }, function () {
            var status = $('#status');
            status.text('Options saved.');
            status.fadeIn();
            setTimeout(function () {
                status.fadeOut();
            }, 1000);
        });
    }

    function restoreOptions() {
        chrome.storage.sync.get({
            // TODO
        }, function (data) {
            // TODO
        });
    }

    $(document).ready(function () {
        restoreOptions();
        $('#save').click(saveOptions);
    });
})();
