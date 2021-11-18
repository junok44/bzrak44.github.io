$(document).ready(function () {

    // // 위로가기 기능
    // $('.gotop').click(function () {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     });
    // });

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
            // href 를 일단 막아서 위치이동 못하게함.
            e.preventDefault();
            // 가야하는 곳의 위치를 파악한다.
            var tg = $(this).attr('href');
            var num;
            // 혹시 #아이디 가 없다면
            if (tg == '#') {
                num = 0;
            } else {
                // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
                num = $(tg).offset().top;
            }

            // 움직이자
            $('html, body').stop().animate({
                scrollTop: num
            }, 800);
        });
    });

    // 비주얼
    $('.visual-tit').waypoint(function (dir) {
        if (dir == "down") {
            $('.visual-tit').addClass('visual-tit-active');
        } else {
            // $('.visual-story').removeClass('visual-story-active');
        }
    }, {
        offset: '100%'
    });


    $('.visual-img').waypoint(function (dir) {
        if (dir == "down") {
            $('.visual-img').addClass('.visual-img-active');
        } else {
            // $('.visual-st ory').removeClass('visual-story-active');
        }
    }, {
        offset: '100%'
    });
    let sw_visual = new Swiper('.sw-visual', {
        effect: "fade",
        autoplay: {
            delay: 1500,
        },
    });

    // about-me
    $('.about-pic').waypoint(function (dir) {
        if (dir == "down") {
            $('.about-pic').addClass('about-pic-active');
        } else {
            // $('.visual-story').removeClass('visual-story-active');
        }
    }, {
        offset: '75%'
    });


    // 리디자인 슬라이드
    let sw_rede = new Swiper(".sw-rede", {
        effect: "fade",
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

    // // 말줄임 적용 (...)
    // $(".publ-desc").dotdotdot({
    //     wrapper: 'div',
    //     /*  콘텐트를 감쌀 요소. */
    //     ellipsis: '... ',
    //     /*  말줄임표를 뭘로 할지 */
    //     wrap: 'word',
    //     /*  자를 단위. 다음 옵션 중 하나 선택: 'word'/'letter'/'children' */
    //     after: null,
    //     /*  자르고 나서도 유지시킬 요소를 jQuery 선택자로 적는다. */
    //     watch: false,
    //     /*  윈도우가 리사이즈될 때 업데이트할 건지: true/'window' */
    //     height: null,
    //     /*  선택. max-height를 지정한다. 만약 null이면 알아서 잰다. */
    //     tolerance: 0 /*  글이 넘치면 이만큼쯤 height를 늘린다 */
    // });

    // $(".rede-box-desc p").dotdotdot({
    //     wrapper: 'div',
    //     /*  콘텐트를 감쌀 요소. */
    //     ellipsis: '... ',
    //     /*  말줄임표를 뭘로 할지 */
    //     wrap: 'word',
    //     /*  자를 단위. 다음 옵션 중 하나 선택: 'word'/'letter'/'children' */
    //     after: null,
    //     /*  자르고 나서도 유지시킬 요소를 jQuery 선택자로 적는다. */
    //     watch: false,
    //     /*  윈도우가 리사이즈될 때 업데이트할 건지: true/'window' */
    //     height: null,
    //     /*  선택. max-height를 지정한다. 만약 null이면 알아서 잰다. */
    //     tolerance: 0 /*  글이 넘치면 이만큼쯤 height를 늘린다 */
    // });

    // // 부드럽게 위치 이동하는 코드
    // var moveEl = $('.move');
    // // 클릭시 해당위치로 부드럽게 이동한다.
    // $.each(moveEl, function () {

    //     $(this).click(function (e) {
    //         // href 를 일단 막아서 위치이동 못하게함.
    //         e.preventDefault();
    //         // 가야하는 곳의 위치를 파악한다.
    //         var tg = $(this).attr('href');
    //         var num;
    //         // 혹시 #아이디 가 없다면
    //         if (tg == '#') {
    //             num = 0;
    //         } else {
    //             // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
    //             num = $(tg).offset().top;
    //         }

    //         // 움직이자
    //         $('html, body').stop().animate({
    //             scrollTop: num
    //         }, 500);
    //     });
    // });

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
    // 브라우저 고정

    // etc
    $('.gallery-item a').colorbox();

    // $('.count').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    // // 스크롤시 애니메이션 
    // $('.life-img').waypoint(function (dir) {
    //     if (dir == "down") {
    //         $('.life-img').addClass('life-img-active');
    //     } else {
    //         $('.life-img').removeClass('life-img-active');
    //     }
    // }, {
    //     offset: '100%'
    // });

    // $(".etc-sample").niceScroll({
    //     cursorwidth: "20px",
    //     cursoropacitymax: 0.5,
    //     boxzoom: true,
    //     background: "#000"
    // });

});



window.onload = function () {
    AOS.init();
}