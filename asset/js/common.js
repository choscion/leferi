$(function(){
    // 스크롤시 헤더
    $('body').on('mousewheel',function(e){ //.on 없던 영역에 이벤트를 줄 수 있어 노션 정리~~~~!!!!!!!!!!!!!
        var wheel = e.originalEvent.wheelDelta;
        if(! $('body').hasClass('menuon')){//! 부정
            if (wheel > 0) { //wheel 양수가 스크롤다운, 음수가 스크롤업
                $('header').removeClass('hide');
            } else {
                $('header').addClass('hide');
            }
        } 
        
    })

    //gnb:hover
    $('.gnb-item').mouseover(function(e){
        e.preventDefault();
        $(this).find('.gnb-inside-list').addClass('show');
    })
    $('.gnb-item').mouseleave(function(e){
        e.preventDefault();
        $(this).find('.gnb-inside-list').removeClass('show');
    })

    //btn-top
    $('.btn-top').click(function(){
        $('html, body').animate({scrollTop:0},300);
        return false;
    });


    ////////////// matchMedia
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        "(max-width: 1023px)": function (){ // 1023px이하
            $('.mb-btn-gnb').click(function(e){
                e.preventDefault();
                // alert('1')
                $('header').toggleClass('on');
                $('body').toggleClass('noscroll');
                $('body').toggleClass('menuon');
            })
            $('.mb-gnb-title').click(function(e){
                e.preventDefault();
                if ($(this).hasClass('on')) {
                    $('.mb-gnb-sublist').stop().slideUp();
                    $('.mb-gnb-title').removeClass('on');
                    $(this).parent().siblings('.mb-gnb-item').removeClass('noactive');
                } else {
                    $('.mb-gnb-sublist').stop().slideUp();
                    $(this).siblings('.mb-gnb-sublist').stop().slideDown();
                    $(this).addClass('on');
                    $(this).parent().siblings('.mb-gnb-item').addClass('noactive');
                }
            })
        } // matchMedia 끝
    })
}) //지우지마세요