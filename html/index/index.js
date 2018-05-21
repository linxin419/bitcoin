$(function() {
    // 轮播调用
    // $('.unslider').unslider({
    //     dots: true
    // });

    // hover事件 
    $('.bar1 li').hover(function() {
        $(this).find('.icon').stop().animate({
            'left': '-50px'
        })
        $(this).find('h5').fadeOut().siblings('p').fadeIn()
    }, function() {
        $(this).find('.icon').stop().animate({
            'left': '0px'
        })
        $(this).find('p').fadeOut().siblings('h5').fadeIn()
    })

    // 获取长度
    var select_length = $('.table-data .select li').length;
    $('.table-data .select ul').css('width', select_length * 193 + 'px')

    // 日期选择
    $('.table-data .tit .arrowl').click(function() {
        $('.table-data .tit .arrowr').fadeIn()
        var index = $(".table-data .tit li").index($(".table-data .tit li.show"));
        if (index == 1) {
            $(this).hide()
            $('.table-data .tit .arrowl').hide()
        }
        $(".table-data .tit li").hide();
        $(".table-data .tit li").eq(index - 1).fadeIn().addClass("show").siblings().hide().removeClass("show");
    })

    $('.table-data .tit .arrowr').click(function() {
        $('.table-data .tit .arrowl').show()
        var index = $(".table-data .tit li").index($(".table-data .tit li.show"));
        if (index == 5) {
            $(this).hide()
            $('.table-data .tit .arrowr').hide()
        }
        $(".table-data .tit li").hide();
        $(".table-data .tit li").eq(index + 1).fadeIn().addClass("show").siblings().hide().removeClass("show");
    })

    function table_cent() {
        var carousel_ul = $('.table-cent ul');
        var len = $('.table-cent ul li').length;
        var lw = $('.table-cent ul li').width() + parseInt($('.table-cent ul li').css("margin-left"));
        var w = lw * len;
        carousel_ul.html(carousel_ul.html() + carousel_ul.html() + carousel_ul.html());
        len = $('.table-cent ul li').length;
        carousel_ul.css("width", '999999999999px');
        carousel_ul.css("left", -w - 2 + "px");
        var left = null;
        $('.table-cent .arrowl').click(function() {
            left = parseInt($('.table-cent ul').css('left'))
            if (!$(".table-cent ul").is(":animated")) {
                $('.table-cent ul').stop(false, true).animate({
                    left: left - 250
                }, function() {
                    left = parseInt($('.table-cent ul').css('left'))
                    if (left <= 2 * (-w) - 20) {
                        $('.table-cent ul').css('left', -w - 2 + 'px')
                    }
                })
            }
        })

        $('.table-cent .arrowr').click(function() {
            if (!$(".table-cent ul").is(":animated")) {
                left = parseInt($('.table-cent ul').css('left'));
                $('.table-cent ul').stop(true).animate({
                    left: left + 250
                }, function() {
                    left = parseInt($('.table-cent ul').css('left'));
                    if (left >= -20) {
                        $('.table-cent ul').css('left', -w - 2 + 'px')
                    }
                })
            }
        })
    }

    table_cent();

    var bar3_length = $('.bar3 .ovhi li').length
    $('.bar3 ul').css('width', bar3_length * 192 + 'px')
    $('.bar3 .bar3-arrowr').click(function() {
        var left = parseInt($('.bar3 ul').css('left'));
        if (left < 0) {
            $('.bar3 ul').animate({
                'left': '0'
            })
        }
    })

    $('.bar3 .bar3-arrowl').click(function() {
        var left = parseInt($('.bar3 ul').css('left'));
        if (left >= 0) {
            $('.bar3 ul').animate({
                'left': '-527px'
            })
        }
    })
})
