$(function() {

    // $('.notice li .btn').click(function() {
    //     var notice_pHeigth = $(this).siblings('.cent').find('p').height(),
    //         notice_plength = $(this).siblings('.cent').find('p').length,
    //         notice_cent = notice_plength * notice_pHeigth;
    //     $(this).siblings('.cent').animate({
    //         'height': notice_cent
    //     })
    //     $(this).parents('li').siblings('li').find('.cent').animate({
    //         'height': '109px'
    //     })
    // })

    $('.notice li .btn').click(function() {
        var h1Text = $(this).siblings('.cent').find('h1').text(),
            titText = $(this).siblings('.time').text(),
            pText = $(this).siblings('.cent').html();
        $('.popup').fadeIn()
        $('.popup h1').text(h1Text)
        $('.popup .tit').text(titText)
        x = $(this).siblings('.cent').find(' p').toArray()
        for (i = 0; i <= x.length; i++) {
            // alert(x[i].innerHTML);
            var pHtml = '<p>' + x[i].innerHTML + '</p>';
            $('.popup .cent').append(pHtml)
        }
    })
    $(document).click(function() {
        $('.popup').fadeOut()
    });
    $('body').on('click', '.popup .view,.notice li .btn', function(event) {
        event.stopPropagation();
    })
})
