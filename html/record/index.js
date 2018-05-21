$(function(){

	// banner动画
	$('.banner-text').delay(600).animate({
		'top':'-420px',
		'opacity':'1'
	},1000)

	// tab
	$('.main .foot .tab li').click(function(){
		$(this).addClass('tab-on').siblings('li').removeClass('tab-on')
		$('.main .foot .tab-view li').eq($(this).index()).fadeIn().siblings('li').hide()
	})
})