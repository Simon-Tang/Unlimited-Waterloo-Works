(function () {
    // TODO: save the poems somewhere else, together with their authors
    var poems = [
        [
            'I am the Bone of my Co-op',
            'Disruption is my Body and Innovation is my Blood.',
            'I have created over a Thousand Side Projects,',
            'Unknown to Cali,',
            'But well-known to Bust.',
            'Have procrastinated on Assignments to create many Job Applications,',
            'Yet those will never lead to Offers.',
            'So, as I Pray--',
            'Unlimited WaterlooWorks.'
        ],
        [
            'I am the Bone of my GPA',
            'Resumes are my Body and Cover Letters are my Blood.',
            'I have created over a thousand Applications,',
            'Unknown to <a href="https://reddit.com/r/uwaterloo" target="_blank">/r/uwaterloo</a>,',
            'Nor known to Feridun.',
            'Have withstood PD to create many Work Experiences,',
            'Yet those Jobs will never hold Return Offers.',
            'So, as I Pray--',
            'Unlimited WaterlooWorks!'
        ]
    ];
    var poem = _.sample(poems);

    // TODO: Remove the padding when window shrunk.  WaterlooWorks uses Bootstrap 2.3.1?
    // $('body > div.container-fluid > div > div > div:nth-child(7) > div:nth-child(1)')

    // Insert our poetry
    var copyrightDiv = $('body > div.container-fluid > div > div > div:nth-child(7) > div:nth-child(2) > div');
    var copyrightElement = $('body > div.container-fluid > div > div > div:nth-child(7) > div:nth-child(2) > div > p:nth-child(1)');
    var poemElement = copyrightElement.clone();

    copyrightDiv.children().css('opacity', 0.5);

    poemElement.html(
        _(poem).map(function (line, index) {
            if (index == 0)
                return '<h1>' + line + '</h1>'
            if (index == poem.length - 1)
                return '<h2><strong><em>' + line + '</h2></strong></em>';
            return line + '<br>';
        }).sum()
    );
    copyrightDiv.prepend(poemElement);
})();
