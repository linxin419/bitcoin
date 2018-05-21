$(function() {
    
    $('body').on("click", ".login .operation .label", function() {
        if ($(this).find('input').attr("checked")) {
            $(this).find('input').removeAttr('checked');
        } else {
            $(this).find('input').attr('checked', '');
        }
        $(this).toggleClass('checked');
    })

    // btn
    var login_Email = $('.login .email input'),
        login_password = $('.login .password input'),
        login_verificationCode = $('.login .verificationCode input');
    $('.login .btn').click(function() {
        if (login_Email.val() == '') {
            layer.msg("邮箱为空！")
        } else if (!checkEmail(login_Email.val())) {
            layer.msg("邮箱格式不正确！")
        } else if (login_password.val() == '') {
            layer.msg("密码为空！")
        } else if (login_password.val().length < 6 || login_password.val().length > 14) {
            layer.msg("密码格式不正确！")
        } else if (login_verificationCode.val() == '') {
            layer.msg('验证码为空！')
        } else if (!(login_verificationCode.val().length == 4)) {
            layer.msg('验证码错误！')
        } else {
            location.href = "../login/member.html";
        }
    })

    // 邮箱正则
    function checkEmail(str) {
        var re = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
        if (re.test(str)) {
            return true
        } else {
            return false
        }
    };

    $('.register1 .btn').click(function() {
        $(this).parents('.register1').fadeOut().siblings('.paymentPassword').fadeIn()
    })

    $('.paymentPassword .btn').click(function() {
        $(this).parents('.paymentPassword').fadeOut().siblings('.broker1').fadeIn()
    })

    $('.broker1 .btn').click(function() {
        $(this).parents('.broker1').fadeOut().siblings('.broker2').fadeIn().delay(3000).fadeOut().siblings('.broker3').delay(3000).fadeIn()
    })

    $('.broker3 .btn').click(function() {
        $(this).parents('.broker3').fadeOut().siblings('.broker4').fadeIn()
    })

    $('.broker4 .btn').click(function() {
        $(this).parents('.broker4').fadeOut().siblings('.register2').fadeIn()
        time()
    })

    $('.register2 .btn').click(function() {
        time()
    })

    function time() {
        var time = parseInt($(".popup.register2 .btn span").text());
        setTime = setInterval(function() {
            if (time <= 0) {
                clearInterval(setTime);
                return;
            }
            time--;
            $(".popup.register2 .btn span").text(time);
        }, 1000);
    }

    $('.register3 .btn').click(function() {
        location.href = "../index/index.html";
    })
})
