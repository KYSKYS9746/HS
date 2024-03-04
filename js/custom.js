$(function () {
    $('.Main').fullpage({
        anchors: ['01', '02', '03', '04', '05', '06'],
        navigation: true,
        onLeave: function (index, nextIndex, direction) {

            $('.section').removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on');

            if (direction == 'down') {
                document.querySelector('#header').classList.add('on')
            } else {
                document.querySelector('#header').classList.remove('on')
            }
        },
    });
})