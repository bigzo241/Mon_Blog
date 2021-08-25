$(function () {
    var jcarousel = $('.jcarousel');
    var jcarouselY = jcarousel.offset().top;
    // var jcarouselY = jcarouselCoord.top;
    var jcarouselX = jcarouselCoord.left;
    var height = jcarousel.height();
    var width = jcarousel.width();


    jcarousel
        .on('reload')
        .jcarousel({
            wrap: 'circular'
        })


    $('.jcarousel-control-prev').click(function () {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-control-next').click(function () {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });


    $('.jcarousel-control-prev').css('top', jcarouselY)
    $('.jcarousel-control-prev').css('left', -$('.jcarousel-control-prev').width() + 15)
    $('.jcarousel-control-next').css('top', jcarouselY)
    $('.jcarousel-control-next').css('left', width + 15)

});