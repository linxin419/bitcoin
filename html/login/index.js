$(function() {

    // 测试页码
    $('.pagination .btn').click(function(){
        var pagination_input = $('.pagination input').val()
        console.log(pagination_input)
    })

    // 会员资料
    $('.member-details .bar1-table .tab-tit li').click(function(){
        $(this).addClass('on').siblings('li').removeClass('on')
        $('.member-details .bar1-table .tab-cent li').eq($(this).index()).fadeIn().siblings('li').hide()
    })
})
