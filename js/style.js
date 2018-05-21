$(function() {


    // // header
    function header() {
        var head = '<div class="header c3f"><div class="view clearfix"><div class="top-logo top_on"></div>' + '<div class="logo fl"></div>' + '<div class="head-right fr"><div class="nav fl"><ul class="clearfix"><li><a href="../../html/index/index.html">Home</a></li>' + '<li><a href="../../html/our_advantage/index.html">Our Advantages</a></li>' + '<li><a href="../../html/Introducing_Broker/index.html">Broker</a></li>' + '<li>About Us<div class="subordinate"><i><img src="../../img/index/head_nav_icon.png" alt=""></i>' + '<p><a href="../../html/corporate_history/index.html">Company History</a></p>' + '<p><a href="../../html/record/index.html">Founder‘s Resume</a></p>' + '<p><a href="../../html/team_management/index.html">Management Team</a></p></div><li><ul></div>' + '<div class="head-login fl"><a href="../../html/register/login.html" class="login">LOG IN</a>' + '<a href="../../html/register/index.html" class="register">Register</a></div>' + '<div class="head-tab fl"><div class="icon">language</div>' + '<ul><li>English</li></ul></div></div></div></div>';
        $('body').prepend(head)
        $('.header .top-logo').animate({
            'top': '0px',
            'width': '107px',
            'height': '118px'
        }, 1000)
    }

    header()

    // footer
    function footer() {
        var foot = '<div class="footer"><div class="view clearfix"><div class="nav clearfix"><ul class="fl"><li><h5>About Us</h5>' + '<p><a href="">Company Profile</a></p>' + '<p><a href="../../html/corporate_history/index.html">Company History</a></p>' + '<p><a href="../../html/record/index.html">Founder’s Resume</a></p>' + '<p><a href="../../html/team_management/index.html">Management Team</a></p>' + '<p><a href="../../html/our_advantage/index.html">Our Advantages</a></p>' + '<p><a href="">Capital Security</a></p></li>' + '<li><h5>Website Terms</h5>' + '<p><a href="">Privacy Policy</a></p>' + '<p><a href="">Terms of Service</a></p>' + '<p><a href="">Disclaimer</a></p>' + '<p><a href="">Risk Disclosure</a></p>' + '<p><a href="">User Trading Notice</a></p></li>' + '<li><h5>Partnership</h5>' + '<p><a href="">Introducing Broker</a></p>' + '<p><a href="">Fund Manager</a></p></li>' + '<li><h5>Partners</h5>' + '<div class="franchisee"><img src="../../img/footer/footer_icon1.png" alt=""></div>' + '<div class="franchisee"><img src="../../img/footer/footer_icon2.png" alt=""></div>' + '<div class="franchisee"><img src="../../img/footer/footer_icon3.png" alt=""></div>' + '<div class="franchisee"><img src="../../img/footer/footer_icon4.png" alt=""></div></li></ul>' + '<div class="foot-icon fl"><h5>Awards</h5>' + '<div class="trademark clearfix"><div class="trademark-li"><i><img src="../../img/footer/footer_icon5.png" alt=""></i>' + '<p>1990 The Most Potential Enterprise</p></div>' + '<div class="trademark-li"><i><img src="../../img/footer/footer_icon6.png" alt=""></i>' + '<p>2012 The Most Valuable Investment Dealer</p></div>' + '<div class="trademark-li"><i><img src="../../img/footer/footer_icon7.png" alt=""></i>' + '<p>2013 The Best Financial Service Award</p></div>' + '<div class="trademark-li"><i><img src="../../img/footer/footer_icon8.png" alt=""></i>' + '<p>2016 The Best Innovative Enterprise Award</p></div></div></div></div>' + '<div class="illustrate"><p>Risk warning: there is a high risk of forex margin trading, which may not be suitable for every investor. Before applying for and signing any forex margin trading and CFDs, you should carefully consider your objectives, financial status, demand and experience, and consult independent professional advisers when necessary. Forex margin and CFDs leverage plays a role in enlarging your profit and loss. Please ensure that you fully understand the risk before formal trading, including the possibility that loss of principal is far more than your initial investment. If you cannot afford the loss, please don’t invest hastily. Please browse the relevant pages of legal documents before you decide to use our services.</p>' + '<span>Influenced by <i>Markets in Financial Instruments Directive</i>' + '<em>(MiFID)</em>PHION is a member of the <i>Financial Market Regulatory Commission.</i></span>' + '<span>Copyright © 2016 The United Kingdom PHION Group. All rights reserved.</span></div></div></div>'
        $('body').append(foot)
    }

    footer()

    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            $('.header .logo').stop().animate({
                'opacity': '1'
            }, 1000)
            $(".header .top-logo").stop().animate({
                'top': '-118px'
            }, 300);
            $('.header').stop().animate({
                'height': '64px'
            })
            $('.header .nav li').css('line-height', '64px')
            $('.header .head-login a').addClass('top')
            $('.header .head-tab').addClass('top')
            $('.header .head-login').addClass('top')
            $('.header .subordinate').css('top', '62px')
            $('.header .head-tab ul').addClass('top')
            $('.header .head-tab .icon').addClass('top')
        } else if ($(window).scrollTop() < 1) {
            $('.header .top-logo').stop().animate({
                'top': '0px'
            }, 300)
            $('.header').stop().animate({
                'height': '90px'
            })
            $('.header .logo').stop().animate({
                'opacity': '0'
            }, 1)
            $('.header .head-login').removeClass('top')
            $('.header .nav li').css('line-height', '90px')
            $('.header .head-login a').removeClass('top')
            $('.header .head-tab').removeClass('top')
            $('.header .subordinate').css('top', '85px')
            $('.header .head-tab ul').removeClass('top')
            $('.header .head-tab .icon').removeClass('top')
        }
    })

    // 二级菜单
    $('.header .nav li').hover(function() {
        $(this).find('.subordinate').stop().slideDown()
    }, function() {
        $(this).find('.subordinate').stop().slideUp()
    })

    // 记住登录状态
    $('body').on("click", ".agreement", function() {
        if ($(this).find('input').attr("checked")) {
            $(this).find('input').removeAttr('checked');
        } else {
            $(this).find('input').attr('checked', '');
        }
        $(this).toggleClass('checked');
    })

    // popup
    function invest() {
        var invest = '<div class="user-popup invest"><div class="view"><h1>Invest<span></span></h1>' + '<div class="explain"><p>Please enter your investment amount</p>' + '<p>Your current available balance : <span>$12121</span></p></div>' + '<div class="input"><p class="clearfix"><span>Investment amount</span>' + '<input type="text" name="">' + '<i>Dollars</i><p>' + '<p class="clearfix"><span>Security password</span>' + '<input type="text" name=""><p></div>' + '<div class="agreement checked"><input type="checkbox" name="setcookie" checked="checked">' + ' I have read and agreed to the user agreement <span>Confirm investment</span></div>' + '<div class="btn clearfix"><div class="confirm">Confirm</div>' + '<div class="cancel">Cancel</div></div></div></div>'
        $('body').append(invest)

    }

    function withdraw() {
        var withdraw = '<div class="user-popup withdraw"><div class="view"><h1>Withdraw<span></span></h1>' + '<div class="explain"><p>X% Commission will be deducted from the withdrawal</p>' + '<p>Your current available balance : <span>$12121</span></p></div>' + '<div class="money-input clearfix"><input type="text" placeholder="请输入您提现金额" name="">' + '<span>Dollars</span>' + '<i class="btn-money">Confirm</i></div>' + '<div class="conversion"><span>Current latest exchange rateBTC/USD:404</span>' + '<p>Currency Exchange</p>' + '<i>20USD=<strong>1.2231BTC</strong></i></div>' + '<div class="address-input"><p>We will send XXBTC to your bitcoin address</p>' + '<p class="clearfix"><input type="text" name="">' + '<span>Copy</span></p></div>' + '<div class="btn clearfix"><div class="confirm">Confirm withdrawal</div>' + '<div class="cancel">Cancel</div></div></div></div>'
        $('body').append(withdraw)
    }

    function recharge() {
        var recharge = '<div class="user-popup recharge"><div class="view"><h1>Recharge<span></span></h1>' + '<div class="explain">Enter the amount of dollars you want to recharge, which will be converted to BTC and sent to the following address. Click "I have paid." The funds to be deposited have to wait for at least 3 confirmation in the blockchain (approximately 30-60 minutes)</div>' + '<div class="money-input clearfix"><input type="text" placeholder="Enter the amount you want to recharge" name="">' + '<span>Dollars</span>' + '' + '<i class="btn-money">Confirm</i></div>' + '<div class="conversion"><span>Current latest exchange rateBTC/USD:404</span>' + '<p>Currency Exchange</p>' + '<i>20USD=<strong>1.2231BTC</strong></i></div>' + '<div class="address-input"><div class="address-input"><p>Please send <i>XXXBTC</i> to the following bitcoin address</p>' + '<p class="clearfix"><input type="text" name="">' + '<span>Copy</span></p></div>' + '<div class="btn clearfix">' + '<div class="confirm">I have paid</div>' + '<div class="cancel">Cancel</div></div></div></div>'
        $('body').append(recharge)
    }

    function suspension() {
        var suspension = '<div class="suspension disnone"><ul><li class="top"></li>' + '<li class="notice"><a href="../notice/index.html"></a></li>' + '<li class="feedback"><a href="../feedback/index.html"></a></li></ul></div>'
        $('body').append(suspension)
    }
    suspension()
    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        if (sc > 100) {
            $('.suspension').fadeIn(1500)
        } else {
            $('.suspension').fadeOut(function() {
                $('.suspension').fadeOut(1500)
            })
        }
    })

    suspension()
    $('body').on('click', '.suspension li.top', function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    })

    $('body').on('click', '.user-popup .cancel', function() {
        $(this).parents('.user-popup').remove()
    })

    $('body').on('click', '.user-activity li', function() {
        var index = $(this).index()
        if (index == 0) {
            recharge()
            $('.withdraw').remove()
            $('.invest').remove()
        } else if (index == 1) {
            withdraw()
            $('.recharge').remove()
            $('.invest').remove()
        } else if (index == 2) {
            invest()
            $('.recharge').remove()
            $('.withdraw').remove()
        }
        var invest_heigth = parseInt($('.invest .view').css('height')),
            invest_top = (invest_heigth + 71) / 2;
        $('.invest .view').css('margin-top', '-' + invest_top + 'px')

        var withdraw_heigth = parseInt($('.withdraw .view').css('height')),
            withdraw_top = (withdraw_heigth + 71) / 2;
        $('.withdraw .view').css('margin-top', '-' + withdraw_top + 'px')

        var recharge_heigth = parseInt($('.recharge .view').css('height')),
            recharge_top = (recharge_heigth + 71) / 2;
        $('.recharge .view').css('margin-top', '-' + recharge_top + 'px')
    })

    // 语言
    $('body').on('click', '.header .head-tab .icon', function() {
        $(this).siblings('ul').slideDown()
    })

    $('body').on('click', '.header .head-tab .li', function() {
        $(this).parents('ul').slideUp()
    })

    $(document).click(function() {
        $(".header .head-tab ul").stop().slideUp(500)
    });

    $('body').on('click', '.header .head-tab li', function() {
        var text = $(this).text()
        $(this).parent('ul').siblings('.icon').text(text)
        $(this).parent('ul').stop().slideUp(500)
    })

    $('body').on('click', '.head-tab .icon', function(event) {
        event.stopPropagation();
    })


    // 会员全局
    if ((screen.width == 1366) && (screen.height == 768)) {
        $('.login_user .arrowl').click(function() {
            $('.login_user .login_bar1').animate({
                'left': '-80.5%'
            })
            $('.login_user .user_bar1').animate({
                'left': '0%'
            })
            $(this).hide()
        })

        $('.login_user .arrowr').click(function() {
            $('.login_bar1').animate({
                'left': '0%'
            })
            $('.user_bar1').animate({
                'left': '70.5%'
            })
            $(this).siblings('.arrowl').show()
        })
    } else if ((screen.width == 1920) && (screen.height == 1080)) {
        $('.user_bar1').css('left', '64.5%')
        $('.user_bar1 .arrowl').css('left', '20.3%')
        $('.user_bar1 .arrowl').click(function() {
            $('.login_bar1').animate({
                'left': '-80.5%'
            })
            $('.user_bar1').animate({
                'left': '0%'
            })
            $(this).hide()
        })
        $('.login_user .arrowr').click(function() {
            $('.login_bar1').animate({
                'left': '0%'
            })
            $('.user_bar1').animate({
                'left': '64.5%'
            })
            $(this).siblings('.arrowl').show()
        })
    } else {
        $('.login_user .arrowl').click(function() {
            $('.login_user .login_bar1').animate({
                'left': '-80.5%'
            })
            $('.login_user .user_bar1').animate({
                'left': '0%'
            })
            $(this).hide()
        })

        $('.login_user .arrowr').click(function() {
            $('.login_bar1').animate({
                'left': '0%'
            })
            $('.user_bar1').animate({
                'left': '70.5%'
            })
            $(this).siblings('.arrowl').show()
        })
    }

    $('.member-foot li').eq(0).find('a').attr('href', '../../html/investmentPlan/index.html')
    $('.member-foot li').eq(1).find('a').attr('href', '../../html/myDeal/index.html')
    $('.member-foot li').eq(2).find('a').attr('href', '../../html/agent/index.html')
    $('.member-foot li').eq(3).find('a').attr('href', '../../html/login/member_details.html')
    $('.user_bar1 .user-name a').attr('href', '../../html/realName/index.html')
})
