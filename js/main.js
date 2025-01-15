$(function () {

    //스크롤 시 배경색 & 헤더 변경
    let sectionTop = $('#section').offset().top;
    let footerTop = $('#footer').offset().top;

    //메뉴 클릭 시 스크롤 이동
    $('.header .nav .gnb li').click(function (e) {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });

     //모바일 메뉴
     $(function(){
        $('.nav_mobile').click(function(){
            $(this).find('ul').toggleClass('on')
        })//nav_mobile.click()
    });

    //메뉴바 이동
    let menuBar = $('.menu_bar');
    let menu = $('.nav .gnb li');
    let menuWidth = $('.nav .gnb li').outerWidth();

    $('.menu_bar').css({
        'width': menuWidth
    });
    $('.nav .gnb li').mouseenter(function () {
        let moveLeft = $(this).position().left;
        let moveWidth = $(this).outerWidth();

        $('.menu_bar').stop().animate({
            width: moveWidth,
            left: moveLeft
        });
    });

    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        console.log(scrollBar)

        //스크롤 시 배경색 & 헤더 변경
        if (scrollBar > sectionTop - 350) {
            $('body').addClass('on')
            $('.header').addClass('on');
        } else {
            $('body').removeClass('on')
            $('.header').removeClass('on');
        }
        if (scrollBar > footerTop) {
            $('body').removeClass('on')
            $('.header').addClass('active')
            menuBar.css({
                'background-color' : '#fff'
            })
        } else {
            $('.header').removeClass('active')
            menuBar.css({
                'background-color' : '#555'
            })
        }

        //스크롤 시 메뉴바 이동
        if ($('#intro').offset().top <= scrollBar) {
            menuBar.stop().animate({
                'width': menu.eq(0).outerWidth(),
                'left': menu.eq(0).position().left
            })
        }
        if ($('#about').offset().top - 50 <= scrollBar) {
            menuBar.stop().animate({
                'width': menu.eq(1).outerWidth(),
                'left': menu.eq(1).position().left
            })
        }
        if ($('#project').offset().top - 100 <= scrollBar) {
            menuBar.stop().animate({
                'width': menu.eq(2).outerWidth(),
                'left': menu.eq(2).position().left
            })
        }
        if ($('#design').offset().top - 150 <= scrollBar) {
            menuBar.stop().animate({
                'width': menu.eq(3).outerWidth(),
                'left': menu.eq(3).position().left
            })
        }
        if ($('#contact').offset().top - 150 <= scrollBar) {
            menuBar.stop().animate({
                'width': menu.eq(4).outerWidth(),
                'left': menu.eq(4).position().left,
            })
        } 
    });//scroll()

    //스킬 아이콘 호버 시 문장 나타남
    let skillIcon = $('.skill .icon li');
    let skillText = $('.skill .text li');

    $(skillIcon).mouseenter(function () {
        $(skillText).removeClass('on')
        $(skillText).eq($(this).index()).addClass('on')
    });

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });
});//script end