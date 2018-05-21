$(function() {

    function diagram1() {
        var myChart = echarts.init(document.getElementById('diagram'));
        // 指定图表的配置项和数据
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        fontSize: '8px'
                    }
                },
                axisLabel: {
                    interval: 0
                },
                data: ['April 01', 'April 02', 'April 03', 'April 04', 'April 05', 'April 06', 'April 07', 'April 08', 'April 09', 'April 10', 'April 11', 'April 12', 'April 13', 'April 14', 'April 15', 'April 16', 'April 17', 'April 18', 'April 19', 'April 20', 'April 21', 'April 22', 'April 23', 'April 24', 'April 25', 'April 26', 'April 27', 'April 28', 'April 29', 'April 30', 'April 31']
            }],
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    fontSize: '8px'
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        fontSize: '8px'
                    }
                },
                axisLabel: { //调整x轴的lable  
                    textStyle: {
                        fontSize: 10.85 // 让字体变大
                    }
                }
            },
            series: [{
                name: '日走势',
                type: 'line',
                showAllSymbol: true,
                itemStyle: {
                    normal: {
                        color: '#11dfa9',
                        textStyle: {
                            fontsize: '8px',
                            color: '#fff'
                        }
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 50]
            }, ]
        };
        myChart.setOption(option);
    }

    function diagram2() {
        var myChart = echarts.init(document.getElementById('diagram1'));
        // 指定图表的配置项和数据
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        fontSize: '8px'
                    }
                },
                axisLabel: {
                    interval: 0
                },
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        fontSize: '8px'
                    }
                },
                axisLabel: { //调整x轴的lable  
                    textStyle: {
                        fontSize: 10.85 // 让字体变大
                    }
                }
            }],
            series: [{
                name: '周走势',
                type: 'line',
                showAllSymbol: true,
                itemStyle: {
                    normal: {
                        color: '#11dfa9',
                        textStyle: {
                            fontsize: '8px',
                            color: '#fff'
                        }
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            }, ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    function diagram3() {
        var myChart = echarts.init(document.getElementById('diagram2'));
        // 指定图表的配置项和数据
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        fontSize: '8px'
                    }
                },
                axisLabel: {
                    interval: 0
                },
                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        fontSize: '8px'
                    }
                },
                axisLabel: { //调整x轴的lable  
                    textStyle: {
                        fontSize: 10.85 // 让字体变大
                    }
                }
            }],
            series: [{
                name: '月走势',
                type: 'line',
                showAllSymbol: true,
                itemStyle: {
                    normal: {
                        color: '#11dfa9',
                        textStyle: {
                            fontsize: '8px',
                            color: '#fff'
                        }
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 120, 132]
            }, ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    diagram1()

    // 数据切换
    $('.diagram li').click(function() {
        $(this).addClass('on').siblings('li').removeClass('on')
        $('.bar1-diagram .diagram').eq($(this).index()).fadeIn().siblings('.diagram').fadeOut()
        var index = $(this).index()
        if (index == 0) {
            diagram1()
            $('.diagram-arrowr').show()
        } else if (index == 1) {
            diagram2()
            $('.diagram-arrowr').hide()
        } else if (index == 2) {
            diagram3()
            $('.diagram-arrowr').hide()
        }
    })

    // 左右
    $('.diagram-arrowr').click(function() {
        $('.diagram-arrowl').show()
        left = parseInt($('#diagram').css('left'))
        if (!$("#diagram").is(":animated")) {
            $('#diagram').stop(false, true).animate({
                left: left - 200
            }, function() {
                left = parseInt($('#diagram').css('left'))
                if (left < -1551) {
                    $('.diagram-arrowr').hide()
                }
            })
        }
    })

    $('.diagram-arrowl').click(function() {
        $('.diagram-arrowr').show()
        left = parseInt($('#diagram').css('left'))
        if (!$("#diagram").is(":animated")) {
            $('#diagram').stop(false, true).animate({
                left: left + 200
            }, function() {
                left = parseInt($('#diagram').css('left'))
                if (left > -421) {
                    $('.diagram-arrowl').hide()
                }
            })
        }
    })
})
