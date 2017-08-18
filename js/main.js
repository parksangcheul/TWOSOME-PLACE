(function ($) {
    'use strict';

    // _가 붙으면 건들이지 말아라
    var _ts = _ts || {};

    // Document Ready
    $(function () {
        _init();
        _initEvent();
    });

    // 정의를 내리는 부분
    function _init() {
        _ts.$header = $('header');
        _ts.headerHeight = _ts.$header.height();
        _ts.$search = $('.search');
        _ts.$searchInput = _ts.$search.find('input');
        _ts.$searchImg = _ts.$search.find('img');
        _ts.$searchValue = '';
        _ts.ENTER_KEY = 13;
        _ts.$secOneInner = $('.sec1 .inner')
        _ts.$innerMd = _ts.$secOneInner.find('.md ul')
        _ts.$innerStory = _ts.$secOneInner.find('.story ul')
        _ts.$innerDessert = _ts.$secOneInner.find('.dessert ul')
        _ts.$innerCake = _ts.$secOneInner.find('.cake ul')
        _ts.$innerCoffee = _ts.$secOneInner.find('.coffee ul')
        _ts.currentSecIndex = 0;
    }


    // 기능을 실행하는 부분
    function _initEvent() {
        megaMenuHandler();
        searchHandler();
        mdOver();
        storyOver();
        dessertOver();
        cakeOver();
        coffeeOver();
        firstAnimatons();
        sliderToggleHandler();
        posMenuClick();
        respondSliderHandler();
        windowScroll();
        checkSectionOffsetTop();
        setReturnToPositon();
        pluginNiceScroll();
    }

    function megaMenuHandler() {
        $('.main-menu > ul > li').on({
            mouseenter: function () {
                openMegaMenu($(this));
            },
            mouseleave: function () {
                closeMegaMenu($(this))
            }
        });
    }


    function openMegaMenu($this) {
        $this.addClass('on');

        var marHeight = $this.find('.mega-menu').height();
        _ts.$header
            .css({borderBottomColor: '#2c2a29'})
            .stop()
            .animate({
                height: _ts.headerHeight + marHeight
            }, 250);
    }

    function closeMegaMenu($this) {
        $this.removeClass('on');

        _ts.$header
            .css({borderBottomColor: '#c8c8c8'})
            .stop()
            .animate({
                height: _ts.headerHeight
            }, 250);
    }

    function searchHandler() {
        _ts.$searchInput.on({
            focus: function () {
                focusSearch();
            },
            blur: function () {
                blurSearch();
            },
            keydown: function (event) {
                submitSearch($(this), event);
            }
        });

        _ts.$searchImg.on({
            click: function () {
                _ts.$searchInput.focus();
            }
        });
    }


    function focusSearch() {
        _ts.$search
            .stop()
            .animate({width: 182}, 600);
        _ts.$searchInput
            .stop()
            .animate({width: 182}, 600)
            .attr({placeholder: '통합검색'});
        _ts.$searchImg.stop(false, true).fadeOut(600);
        if (_ts.$searchValue !== '') {
            _ts.$searchInput.val(_ts.$searchValue);
        }
    }



    function blurSearch() {
        _ts.$search
            .stop()
            .animate({width: 38}, 600);
        _ts.searchValue = _ts.$searchInput.val();
        _ts.$searchInput
            .stop()
            .animate({width: 38}, 600)
            .attr({placeholder: ''})
            .val('');
        _ts.$searchImg.stop(false, true).fadeIn(600);
    }

    function submitSearch($this, event) {
        switch (event.which) {
            case _ts.ENTER_KEY:
                event.preventDefault();
                console.log($this.val());
                break;
        }
    }

    function firstAnimatons() {
        $('.visual .fade-in').each(function (index) {
            TweenMax.to(this, 1, {opacity: 1, delay: (index + 1) * .4});
        });

    }

    function mdOver() {
        _ts.$secOneInner.find('.md').on({
            mouseenter: function () {
                _ts.$innerMd.addClass('on')
                    $('.md .fade-in').each(function (index) {
                        TweenMax.to(this, 1, {opacity: 1, delay: (index + 1) * .4});
                    });
            },
            mouseleave: function () {
                _ts.$innerMd.removeClass('on');
            }
        });
    }

    function storyOver() {
        _ts.$secOneInner.find('.story').on({
            mouseenter: function () {
                _ts.$innerStory.addClass('on')
                    $('.story .fade-in').each(function (index) {
                        TweenMax.to(this, 1, {opacity: 1, delay: (index + 1) * .4});
                    });
            },
            mouseleave: function () {
                _ts.$innerStory.removeClass('on');
            }
        });
    }
    function dessertOver() {
        _ts.$secOneInner.find('.dessert').on({
            mouseenter: function () {
                _ts.$innerDessert.addClass('on')
                    $('.dessert .fade-in').each(function (index) {
                        TweenMax.to(this, 1, {opacity: 1, delay: (index + 1) * .4});
                    });
            },
            mouseleave: function () {
                _ts.$innerDessert.removeClass('on');
            }
        });
    }
    function cakeOver() {
        _ts.$secOneInner.find('.cake').on({
            mouseenter: function () {
                _ts.$innerCake.addClass('on')
                    $('.cake .fade-in').each(function (index) {
                        TweenMax.to(this, 1, {opacity: 1, delay: (index + 1) * .4});
                    });
            },
            mouseleave: function () {
                _ts.$innerCake.removeClass('on');
            }
        });
    }
    function coffeeOver() {
        _ts.$secOneInner.find('.coffee').on({
            mouseenter: function () {
                _ts.$innerCoffee.addClass('on')
                    $('.coffee .fade-in').each(function (index) {
                        TweenMax.to(this, 1, {opacity: 1, delay: (index + 1) * .4});
                    });
            },
            mouseleave: function () {
                _ts.$innerCoffee.removeClass('on');
            }
        });
    }


    function sliderToggleHandler() {
        $('.copy-inner .copy-main-menu > ul > li').on({
           mouseenter: function () {
               sliderMbMegaDown($(this));
           },
           mouseleave: function () {
               sliderMbMegaUp($(this));
           }
        });
    }

    function sliderMbMegaDown($this) {
        $this.addClass('on');

    }

    function sliderMbMegaUp($this) {
        $this.removeClass('on');

    }

        function posMenuClick() {
            $('.copy-toggle-btn').on('click', function () {
                $('.copy-pos-menu').stop().slideToggle(400);
            });


    }


    function respondSliderHandler() {
        $(window).on('resize', function () {
            if ($(this).width() <= 400) {
                sliderHandler();
                subFourSliderHandler();
            } else {
                tabSliderHandler();

            }
                });



        function sliderHandler() {
                $('.slider ul').bxSlider({
                pager: false,
                controls: false,
                auto: true,
                pause: 3000,
                minSlides: 2,
                maxSlides: 2,
                moveSlides: 10,
                slideWidth: 380,
                slideMargin: 10
            });
        }
    }

    function tabSliderHandler() {
        $('.slider ul').bxSlider({
            pager: false,
            controls: false,
            auto: true,
            pause: 3000,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideWidth: 750,
            slideMargin: 10
        });
    }

    function subFourSliderHandler() {
                $('.sub4-slider ul').bxSlider({
                    pager: false,
                    controls: false,
                    auto: true,
                    mode: 'vertical',
                    pause: 3000,
                    minSlides: 0,
                    maxSlides: 1,
                    moveSlides: 1,
                    slideWidth: 380,
                    slideMargin: 10
                });
    }

    function windowScroll() {
        $(window).on('scroll', function () {
            _ts.scrollLocate = $(this).scrollTop() + ($(this).height() / 2);

            checkCurrentSection();
        });
    }

    function checkCurrentSection() {
        var secLength = _ts.secOffsetTop.length;

        for (var i = 0; i < secLength; i++) {
            if (_ts.scrollLocate >= _ts.secOffsetTop[i] && _ts.scrollLocate < _ts.secOffsetTop[i + 1]) {
                if (_ts.currentSecIndex === i ) {
                    return;
                } else {
                    _ts.currentSecIndex = i;


                    changeSectionHandler();
                }
            }
        }
    }

    function changeSectionHandler() {
        console.log('현재 섹션은' + _ts.currentSecIndex);

        returnToPosition('.sec1', 1, 1);
        returnToPosition('.sec2', 1.5, 2);
        returnToPosition('.sec3', 1.5, 3);
        returnToPosition('.sub1-sec1', 1.5, 1);
        returnToPosition('.sub1-sec2', 2.5, 1);
        returnToPosition('.sub2-sec1', 1.5, 1);
        returnToPosition('.sub2-sec2', 2.5, 1);
        returnToPosition('.sub3-sec1', 1.5, 1);

        returnToPosition('.sub4-sec1', 1, 1);
        returnToPosition('.sub4-sec2', 1.1, 2);
        returnToPosition('.sub4-sec3', 1.1, 3);
        returnToPosition('.sub4-sec4', 1.5, 4);



        resetReturnToPosition();
    }

    function checkSectionOffsetTop() {
        _ts.secOffsetTop = [];
        $('.section').each(function () {
            _ts.secOffsetTop.push(
                $(this).offset().top
            );
        });
        console.log(_ts.secOffsetTop);
    }


    function setReturnToPositon() {
        $('.return-to-position').each(function () {
            var x = 100;
            var y = 100;

            if ($(this).hasClass('to-right')) { //왼쪽에서 오른쪽으로
                // 음수
                x *= -1;
                y *= 0;
            } else if ($(this).hasClass('to-left')) { //오른쪽에서 왼쪽으로
                // 양수
                x = Math.abs(x);
                y *= 0;
            } else if ($(this).hasClass('to-bottom')) {
                y = Math.abs(y);
                x *= 0;

            }

            TweenMax.set(this, { x: x, y: y,  opacity: 0 });

        });
    }

    function returnToPosition(sectionSelector, duration, whichSectionIndex) {
        if (_ts.currentSecIndex === whichSectionIndex) {
            $(sectionSelector + ' .return-to-position').each(function (index) {
                TweenMax.to(this, duration, {
                    delay: index * .3,
                    x: 0,
                    y: 0,
                    opacity: 1
                });
            });
        }
    }

    function resetReturnToPosition() {
        if (_ts.currentSecIndex < 1) {
            setReturnToPositon();
        }
    }



    function pluginNiceScroll() {
        $('html').niceScroll({
            cursorcolor: 'rgba(0,0,0,.7)',
            cursorwidth: 10,
            cursorborder: 'none',
            cursorborderradius: 0,
            zindex: 9999
        });

        console.log('hello');
    }






}(jQuery));