$(document).ready(function(){
    /* 메뉴오픈 클릭시 header에 open 클래스 추가 */
    $('header .head_top .menu_open').on('click focusin', function(){
        $('header').addClass('open')
    })
    $('header .head_top .menu_close').on('click', function(){
        $('header').removeClass('open')
    })
    $('.visual').on('focusin', function(){
        $('header').removeClass('open')
    })
    /* 메뉴오픈 클릭시 header에 open 클래스 추가 */
})//맨끝