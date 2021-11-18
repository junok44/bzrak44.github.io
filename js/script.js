$(document).ready(function () {

    // 주메뉴 fadeout
    let header = $('.header');
    $(window).scroll(function () {
        let scrollbar = $(window).scrollTop();
        // console.log(scrollbar);
        if (scrollbar > 100) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }
    });


    // 주메뉴 이동
    var moveEl = $('.move');
    $.each(moveEl, function () {
        $(this).click(function (e) {
            e.preventDefault();
            var tg = $(this).attr('href');
            var num;
            if (tg == '#') {
                num = 0;
            } else {
                num = $(tg).offset().top;
            }
            $('html, body').stop().animate({
                scrollTop: num
            }, 800);
        });
    });

    // 비주얼
    $('.visual-tit').waypoint(function (dir) {
        if (dir == "down") {
            $('.visual-tit').addClass('visual-tit-active');
        } else {}
    }, {
        offset: '100%'
    });


    let sw_visual = new Swiper('.sw-visual', {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 2000,
        },
    });

    // about-me
    $('.about-pic').waypoint(function (dir) {
        if (dir == "down") {
            $('.about-pic').addClass('about-pic-active');
        } else {}
    }, {
        offset: '75%'
    });
    // 비주얼이동
    var move_visual = $('.move-visual');
    $.each(move_visual, function () {
        $(this).click(function (e) {
            e.preventDefault();
            var tg = $(this).attr('href');
            var num;
            if (tg == '#') {
                num = 0;
            } else {
                num = $(tg).offset().top;
            }
            $('html, body').stop().animate({
                scrollTop: num
            }, 800);
        });
    });


    // 리디자인 슬라이드
    let sw_rede = new Swiper(".sw-rede", {
        effect: "fade",
        // loop: true,
    });

    let rede_bot_a = $('.rede-bot a');
    $.each(rede_bot_a, function (index, item) {
        $(this).click(function (e) {
            e.preventDefault();
            sw_rede.slideTo(index)
        });
    });
    // 퍼블리싱 슬라이드
    let sw_publ = new Swiper('.sw-publ', {
        effect: "fade",
        loop: true,
    });
    let sw_publ_bot = new Swiper('.sw-publ-bot', {
        slidesPerView: 4,
        spaceBetween: 32,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,

        },
    });
    let publ_bot_a = $('.sw-publ-bot-slide a');
    $.each(publ_bot_a, function (index, item) {
        $(this).click(function (e) {
            e.preventDefault();
            let temp = $(this).find('img').attr('date-index');
            temp = parseInt(temp) + 1;
            sw_publ.slideTo(temp)
        });
    });


    // 성격 프로그레스바
    var list1 = new ProgressBar.Line(char_list1, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#D1D1C2',
        trailWidth: 4,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#BADDD3',
        },
        to: {
            color: '#8eb5f0',
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });


    var list2 = new ProgressBar.Line(char_list2, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#D1D1C2',
        trailWidth: 4,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#BADDD3',
        },
        to: {
            color: '#8eb5f0',
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });


    var list3 = new ProgressBar.Line(char_list3, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#D1D1C2',
        trailWidth: 4,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#BADDD3',
        },
        to: {
            color: '#8eb5f0',
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });


    // photoshop_성취율
    var html = new ProgressBar.Circle(skill_html, {
        color: '#BADDD3',
        trailColor: '#D1D1C2',
        trailWidth: 9,
        duration: 2000,
        easing: 'bounce',
        strokeWidth: 9,
        from: {
            color: '#BADDD3',
            a: 0
        },
        to: {
            color: '#8eb5f0',
            a: 1
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    // css_성취율
    var css = new ProgressBar.Circle(skill_css, {
        color: '#FFEA82',
        trailColor: '#D1D1C2',
        trailWidth: 9,
        duration: 2000,
        easing: 'bounce',
        strokeWidth: 9,
        from: {
            color: '#BADDD3',
            a: 0
        },
        to: {
            color: '#8eb5f0',
            a: 1
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });


    // jquery_성취율
    var jquery = new ProgressBar.Circle(skill_jquery, {
        color: '#FFEA82',
        trailColor: '#D1D1C2',
        trailWidth: 9,
        duration: 2000,
        easing: 'bounce',
        strokeWidth: 9,
        from: {
            color: '#BADDD3',
            a: 0
        },
        to: {
            color: '#8eb5f0',
            a: 1
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });


    // photoshop_성취율
    var photoshop = new ProgressBar.Circle(skill_photoshop, {
        color: '#FFEA82',
        trailColor: '#D1D1C2',
        trailWidth: 9,
        duration: 2000,
        easing: 'bounce',
        strokeWidth: 9,
        from: {
            color: '#BADDD3',
            a: 0
        },
        to: {
            color: '#8eb5f0',
            a: 1
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });


    // photoshop_성취율
    var illust = new ProgressBar.Circle(skill_illust, {
        color: '#FFEA82',
        trailColor: '#D1D1C2',
        trailWidth: 9,
        duration: 2000,
        easing: 'bounce',
        strokeWidth: 9,
        from: {
            color: '#BADDD3',
            a: 0
        },
        to: {
            color: '#8eb5f0',
            a: 1
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });




    // 스크롤을 했을 때 모션 시작
    var sc_y = $(window).scrollTop();
    $(window).scroll(function () {

        sc_y = $(window).scrollTop();

        if (sc_y >= 800) {

            css.animate(0.85); // Number from 0.0 to 1.0
            html.animate(0.9); // Number from 0.0 to 1.0
            list3.animate(0.9); // Number from 0.0 to 1.0
            list2.animate(0.85); // Number from 0.0 to 1.0
            list1.animate(0.8); // Number from 0.0 to 1.0
            jquery.animate(0.8); // Number from 0.0 to 1.0
            photoshop.animate(0.8); // Number from 0.0 to 1.0
            illust.animate(0.75); // Number from 0.0 to 1.0
        }

    });

    // etc
    $('.gallery-item a').colorbox();

});



window.onload = function () {
    AOS.init();
}