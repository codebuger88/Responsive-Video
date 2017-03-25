(function ($) {
    $.fn.ResponsiveVideo = function (options) {
        var opts = $.extend({}, {
                containerClass: 'video-container'
            }, options);

        return this.each(function () {
            var elem = $(this),
                width = parseInt(elem.width(), 10),
                height = parseInt(elem.height(), 10),
                $wrapper = $('<div></div>'),
                $container = $('<div class="' + opts.containerClass + '"></div>');

            elem.wrap($wrapper.css({
                width: width,
                'max-width': '100%'
            })).wrap($container);
        });
    };
}(jQuery));