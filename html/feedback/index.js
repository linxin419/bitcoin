$(function() {

    // 意见反馈
    $('table .append .icon').click(function() {
        $('.problem-popup').fadeIn()
    })
    $('.problem .cent textarea').focus(function() {
        if ($(this).val() == '') {
            $(this).siblings('p').fadeOut()
        }
    })
    $('.problem .cent textarea').blur(function() {
        if ($(this).val() == '') {
            $(this).siblings('p').fadeIn()
        } else {
            $(this).siblings('p').fadeOut()
        }
    })
    $('.problem .hide').click(function() {
        $(this).parents('.problem-popup').fadeOut()
    })

    $('.problem .problem-down li').click(function() {
        $(this).addClass('on').siblings('li').removeClass('on')
        var problem = $(this).text()
        $(this).parent('ul').siblings('i').text(problem)
        $(this).parent('ul').stop().slideUp(500)
    })

    $('.problem .problem-down i').click(function() {
        $(this).siblings('ul').stop().slideDown(500)
    })

    $(document).click(function() {
        $(".problem-down ul").slideUp(500)
        $('.problem-popup').fadeOut()
    });

    $(".problem-down i,.problem-popup .problem,table .append .icon").click(function(event) {
        event.stopPropagation();
    });

    // time 
    function p(s) {
        return s < 10 ? '0' + s : s;
    }

    // 判断是否有评价
    if ($('.problem .cent li').length < 1) {
        var no_comment = '<p>Please give your opinion</p>'
        $('.problem .cent').append(no_comment)
    }

    // 模拟发送
    var textarea_val = $('.dialogue-popups textarea');

    $('.dialogue-popups .hide').click(function() {
        $(this).parents('.dialogue-popups').fadeOut()
        $(this).parents('.dialogue-popups').find('li').remove()
    })

    $('.problem-btn').click(function() {
        $(this).parents('.problem-popup').fadeOut()
            // $('.dialogue-popups').fadeIn()
        problemTable()
    })

    $('body').on('click', '.tab-cent tbody tr.append-tr', function() {
        $('.dialogue-popups').fadeIn()
        dialogue()
    })

    $('body').on('click', '.dialogue-popups .btn', function() {
        dialogue()
    })

    // Enter事件
    document.onkeydown = function(e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {
            dialogue()
        }
    }

    function dialogue() {
        var myDate = new Date();
        //获取当前年
        var year = myDate.getFullYear();
        //获取当前月
        var month = myDate.getMonth() + 1;
        //获取当前日
        var date = myDate.getDate();
        var h = myDate.getHours(); //获取当前小时数(0-23)
        var m = myDate.getMinutes(); //获取当前分钟数(0-59)
        var s = myDate.getSeconds();

        var time_now = year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
        var dialogue_li = '<li class="admin"><div class="portrait"><img src="../../img/feedback/popup_portrait.png" alt=""></div>' + '<div class="compile"><div class="name-time clearfix"><span class="name">admin</span>' + '<span class="time">' + time_now + '</span>' + '</div>' + '<div class="dialogueContent">' + textarea_val.val() + '</div>' + '</div>' + '</li>';
        if (!(textarea_val.val() == '')) {
            $('.dialogue-popups .cent ul').append(dialogue_li)
        }
        textarea_val.val('')
        var admin_length = $('.window li').length;
        $('.window ul').css('position', 'relative')
        $('.window').scrollTop($('.window')[0].scrollHeight);
        $('.window .breakup').css('position', 'relative')
    }

    function problemTable() {
        var len = $('table tr').length;
        for (var i = 1; i < len; i++) {
            var lengthTd = i - 1
        }
        var index = $('table td').index()
        index++
        var down = $('.problem-down i').text()
        var tableTd = '<tr class="append-tr"><td class="munber">' + lengthTd + '</td>' + '<td>December 12, 2014</td>' + '<td>' + down + '</td>' + '<td>Replied</td>' + '<td><div class="unread">Unread</div></td>' + '<td><div class="feedingBack">Feeding Back</div></td></tr>'
        $('table .append').after(tableTd)
    }
})
