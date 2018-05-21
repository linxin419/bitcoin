$(function(){

	// banner动画
	$('.banner-text').delay(600).animate({
		'top':'-420px',
		'opacity':'1'
	},1000)

	// tab
	$('.main li').click(function(){
		$('.bar1').fadeIn()
		// $(this).addClass('on').siblings('li').removeClass('on')
		// $(this).stop().animate({
		// 	'top':'-32px'
		// })
		// $(this).find('.team-img').stop().animate({
		// 	'width':'200px',
		// 	'height':'200px'
		// })
		// $(this).siblings('li').stop().animate({
		// 	'top':'0px'
		// },5000)
		// $(this).siblings('li').stop().find('.team-img').animate({
		// 	'width':'181px',
		// 	'height':'181px'
		// })
		$('.bar1 .bar1-view').eq($(this).index()).fadeIn().siblings('.bar1-view').hide()
		$("body").animate({ scrollTop: $(".bar1").scrollTop() + 1150 }, 1000);
	})

	$('.main li').hover(function(){
		$(this).find('.team-img').stop().animate({
			'width':'200px',
			'height':'200px'
		})
		$(this).animate({
			'top':'32px'
		})
	},function(){
		$(this).find('.team-img').stop().animate({
			'width':'181px',
			'height':'181px'
		})
		$(this).animate({
			'top':'0px'
		})
	})
})