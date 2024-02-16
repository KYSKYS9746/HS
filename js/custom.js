$(function () {
    $('.Main').fullpage({
        anchors: ['01', '02', '03', '04', '05'],
        // navigation: true,
        onLeave: function (index, nextIndex, direction) {

            $('.section .footer').removeClass('on');
            $('.section .footer').eq(nextIndex - 1).addClass('on');
        },
    });
})