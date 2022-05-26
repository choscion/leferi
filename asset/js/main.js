$(function(){
//헤더 스크롤


    
//상단 메인 배경 스크롤
    $(window).scroll(function(){
        crrt = $(this).scrollTop();
        trgt = $('.sc-visual').offset().top;
        ttop  = $('.sc-creator').offset().top;
        here = $('.creator05').offset().top;
        news = $('.sc-news').offset().top;

        if (crrt > trgt+60) {
            $('.white-bg').addClass('up');
            $('.txt-bg').addClass('up');
        } else {
            $('.white-bg').removeClass('up');
            $('.txt-bg').removeClass('up');
        }

        if (crrt > ttop) {
            $('.btn-top').addClass('show');
        } else {
            $('.btn-top').removeClass('show');
        }
        if (crrt > news) {
            $('.btn-top').addClass('up');
        } else {
            $('.btn-top').removeClass('up');
        }

        if (crrt > here-100) {
            $('.sc-business').addClass('over');
        } else {
            $('.sc-business').removeClass('over');
        }
    })
    $(window).trigger('scroll');



    

    arrColor = ['#8338fd','#ffcc00','#00cdbd','#3c9cff','#ff6062','#ff7800']  //notion 노션정리

    function shuffle(array) { 
        array.sort(() => Math.random() - 0.5); 
    }
    shuffle(arrColor);

    $('.creator-item').each(function(index,item){ //item = this로 생각하면 댐
        $($(this).find('.img-under')).css({'background-color':arrColor[index]})
        $($(this).find('.sub-title')).css({'background-color':arrColor[index]})
        $($(this).find('.part')).css({'background-color':arrColor[index]})
    })



// matchMedia
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () { // 1024px이상
        m1 = gsap.timeline({
            scrollTrigger:{
            trigger:'.title-area',
            start:'top top', //[트리거기준,윈도우기준]
            end:'+=200%',
            // markers:true,
            scrub:1,
            pin:true,
            },
        })
        m1.set('.busn-title .first-tit',{xPercent: 100})
        m1.set('.busn-title .second-tit',{xPercent: -100})
        m1.set('.busn-title .third-tit',{xPercent: 100})
        m1.addLabel('motion01') //모션을 한꺼번에 실행할수있다
        m1.to('.busn-title .first-tit',{xPercent: 0},'motion01')
        m1.to('.busn-title .second-tit',{xPercent: 0},'motion01')
        m1.to('.busn-title .third-tit',{xPercent: 0},'motion01')

    // busn-sub
        let busn = gsap.utils.toArray(".busn-sub");

        var total = 0;
        $('.busn-sub').each(function(){
            total += Number($(this).outerWidth());
        })
        gsap.set('.link-ask',{'top':$(window).height()-200})
        m2 = gsap.timeline({
            scrollTrigger: {
                trigger:'.busn-wrap',
                start:'top top',
                end:'+=1300%',
                pin:true,
                scrub:1,
                // markers:true,
                onEnter:()=>{gsap.set('.link-ask',{'position':'fixed'})},
                onLeaveBack:()=>{gsap.set('.link-ask',{'position':'absolute'})}
            },
        })
        m2.to('.busn-wrap',{x: -total-600})
        

        m3 = gsap.timeline({
            scrollTrigger: {
                trigger:'.collabo',
                start:'900% top',
                end:'1000% top',
                // pin:true,
                scrub:1,
                // markers:true,
            },
        })
        m3.to('.busn-outro .fixed',.8,{opacity:1})

    //sc-creator 스크롤시 커버 사라짐
        scrollMoCreator01 = gsap.timeline({
            scrollTrigger:{
                trigger:'.sc-creator',
                start:'top top', //[트리거기준,윈도우기준]
                // markers:true,
            },
        })
        scrollMoCreator01.to('.creator01 .cover, .creator02 .cover, .creator03 .cover',.3,{height:0,stagger:.12})
        
        scrollMoCreator02 = gsap.timeline({
            scrollTrigger:{
                trigger:'.creator01',
                start:'center top', //[트리거기준,윈도우기준]
                // markers:true,
            },
        })
        scrollMoCreator02.to('.creator04 .cover, .creator05 .cover, .creator06 .cover',.3,{height:0,stagger:.12})
        
        //sc-applic 스크롤 시 텍스트 움직임
        gsap.to('.bg-txt-under', {
            scrollTrigger: {
                trigger: '.sc-application',
                start: '-50% top', //[트리거기준,윈도우기준]
                end: 'bottom top', //[]
                // markers:true,
                scrub: 1,
            },
            left: "-15vw",
            bottom: "28vw"
        }) 
        gsap.to('.bg-txt-over', {
            scrollTrigger: {
                trigger: '.sc-application',
                start: '-50%  top', //[트리거기준,윈도우기준]
                end: 'bottom top', //[]
                // markers:true,
                scrub: 1,
            },
            left: "20vw",
            bottom: "35vw"
        }) //left: 20vw;bottom: 35vw;

        //sc-news 슬라이드
        var slide01 = new Swiper(".slide01", {
            slidesPerView: 2,
            // spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              type: "progressbar",
            },
            navigation: {
              nextEl: ".slide01 .next",
              prevEl: ".slide01 .prev",
            },
        });

    }, // 1024px이상 끝
    "(max-width: 1023px)": function (){ // 1023px이하
        //creator cover 사라짐
        scrollMoCreator01 = gsap.timeline({
            scrollTrigger:{
                trigger:'.sc-creator',
                start:'top center', //[트리거기준,윈도우기준]
                // markers:true,
            },
        })
        scrollMoCreator01.to('.creator-item .cover',.3,{height:0,stagger:.12})
        
        //creator 태블릿이하 슬라이드
        var mbSlide01 = new Swiper(".mbSlide01", {
            slidesPerView: 'auto',
            // spaceBetween: 30,
            freeMode: true,
          });

          //sc-news 슬라이드
          var slide01 = new Swiper(".slide01", {
            slidesPerView: 1,
            // loop:true,
            pagination: {
              el: ".swiper-pagination",
              type: "progressbar",
            },
            navigation: {
              nextEl: ".slide01 .next",
              prevEl: ".slide01 .prev",
            },
          });

        //busn-outro opacity
        gsap.to('.busn-outro .fixed',{
            scrollTrigger:{
                trigger:'.collabo',
                start:'55% top',
                end:'100% top',
                // markers:true,
                scrub:1,
            },
            opacity:1,visibility:'visual'
        })
        //link-ask fixed
        gsap.set('.link-ask',{'top':$(window).height()-200})
        gsap.to('.sc-business .link-ask',{
            scrollTrigger:{
                trigger:'.sc-business',
                start:'top top',
                end:'5% top',
                // markers:true,
                scrub:1,
                onEnter:()=>{gsap.set('.link-ask',{'position':'fixed'})},
                onLeaveBack:()=>{gsap.set('.link-ask',{'position':'absolute'})}
            },
            // 'top':$(window).height()-200,
            // 'position':'fixed',
        })
        
        //sc-applic 스크롤 시 텍스트 움직임
        gsap.to('.bg-txt-under', {
            scrollTrigger: {
                trigger: '.sc-application',
                start: '-50% top', //[트리거기준,윈도우기준]
                end: 'bottom top', //[]
                // markers:true,
                scrub: 1,
            },
            left: "-40vw",
            bottom: "15vw"
        }) //left: -40vw;bottom: 15vw;
        gsap.to('.bg-txt-over', {
            scrollTrigger: {
                trigger: '.sc-application',
                start: '-50%  top', //[트리거기준,윈도우기준]
                end: 'bottom top', //[]
                // markers:true,
                scrub: 1,
            },
            left: "0vw",
            bottom: "45vw"
        }) // left: 0vw;bottom: 45vw;

    }, // 1023px 이하 끝

    "all": function () { // 모든 구간
        ScrollTrigger.refresh();
    }

})
    
})