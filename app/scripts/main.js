require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        moment: '../bower_components/momentjs/moment'
    }
});

require(['jquery', 'moment'], function ($, moment) {
    'use strict';
		var colorScheme = ["#5C4B51", "#83BEB1", "#F2EBBA", "#F2B654", "#ED645E"];
		$("#countdown").html(moment('20131128', 'YYYYMMDD').fromNow());
		$("body").css('background', colorScheme[Math.floor(Math.random() * colorScheme.length)]);
});
