require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        moment: '../bower_components/momentjs/moment'
    }
});

require(['jquery', 'moment'], function ($, moment) {
    'use strict';
		var colorScheme = ["#5C4B51", "#83BEB1", "#F2EBBA", "#F2B654", "#ED645E"];
		var countDown = moment('201311282000', 'YYYYMMDDhhmm').fromNow();
		$("#countdown").html(countDown);
		$("meta[property='og:title']").attr("content", countDown);
		$("body").css('background', colorScheme[Math.floor(Math.random() * colorScheme.length)]);
});
