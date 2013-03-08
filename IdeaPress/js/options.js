﻿/*
IdeaPress Version 2.0
File: options.js
Author: IdeaNotion
Description: Configures the application and the modules.  Please go to https://github.com/ideanotion/ideapress for how to apply the options
*/
(function () {
    "use strict";

    ideaPress.importModulesAndSetOptions(
        /* import module */
        ["/modules/wordpress/js/wp.module.js", "/modules/wordpressCom/js/wpcom.module.js"],

        function() {
            ideaPress.options = {
                appTitleImage: null,                      // App title image (approx. 600px x 80px)
                appTitle: "IdeaPress",                    // App title text
                cacheTime: 3600000,                       // Global cache time to try fetch   
                mainUrl: "http://ideanotion.net",         // Main promoting site
                privacyUrl: "http://ideanotion.net",      // Privacy URL
                modules: [
                    { name: wordpressModule, options: { apiUrl: 'http://ideanotion.net/', title: "Pages", typeId: wordpressModule.PAGES, pageIds: [2, 546, 565] } },
                    { name: wordpressModule, options: { apiUrl: 'http://ideanotion.net/', title: "Recent News", typeId: wordpressModule.MOSTRECENT, hubItemsCount : 7 } },
                    { name: wordpressModule, options: { apiUrl: 'http://ideanotion.net/', title: "Bookmark", typeId: wordpressModule.BOOKMARKS } },
                    { name: wordpresscomModule, options: { siteDomain: 'wordpressmetro.wordpress.com', title: "Pages", typeId: wordpresscomModule.PAGES, pageIds: [2, 9], clientId: '2131', clientSecret: 'b8OEIPyqH113smvoCpgrShM3wakwYALgPOoFUn3X8PA9Y3l2hslQCCKev51VvHsR' } },
                    { name: wordpresscomModule, options: { siteDomain: 'wordpressmetro.wordpress.com', title: "Recent News", typeId: wordpresscomModule.MOSTRECENT, clientId: '2131', clientSecret: 'b8OEIPyqH113smvoCpgrShM3wakwYALgPOoFUn3X8PA9Y3l2hslQCCKev51VvHsR' } },
                    { name: wordpresscomModule, options: { siteDomain: 'wordpressmetro.wordpress.com', title: "Tech", typeId: wordpresscomModule.CATEGORY, categoryId: "tech", clientId: '2131', clientSecret: 'b8OEIPyqH113smvoCpgrShM3wakwYALgPOoFUn3X8PA9Y3l2hslQCCKev51VvHsR' } },
                    { name: wordpresscomModule, options: { siteDomain: 'wordpressmetro.wordpress.com', title: "Bookmark", typeId: wordpresscomModule.BOOKMARKS, clientId: '2131', clientSecret: 'b8OEIPyqH113smvoCpgrShM3wakwYALgPOoFUn3X8PA9Y3l2hslQCCKev51VvHsR' } }
                ],
                searchModule: { name: wordpressModule, options: { apiUrl: 'http://ideanotion.net/', title: "Search" } },
                liveTileModule: { name: wordpressModule, options: { apiUrl: 'http://ideanotion.net/', title: "Live Tile" } },
            };
        });
})();
