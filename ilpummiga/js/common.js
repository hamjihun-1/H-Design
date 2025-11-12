$(document).ready(function(){
    /*************시작 :: 지금 pc버전인지 모바일인지 체크 (메뉴상태) ************/
    let mobile_size = 1024
    let window_w
    let device_status //pc, 모바일인지

    function device_chk(){ //함수를 정의한다 (선언)
        window_w = $(window).width()
        if(window_w > mobile_size){ //브라우저 넓이가 1024보다 클 때
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk() //html의 로딩이 완료된 이후 단 1번 실행
    $(window).resize(function(){ //브라우저가 리사이즈 될때 마다 실행
        device_chk()
    })

    /************header 메뉴 over::시작***********
     * 메뉴에 마우스를 오버 했을 때 (header .gnb)
     * header에 menu_pc 클래스 추가
     * 마우스를 오버한 메뉴의 1차 메뉴 li에 over 클래스 추가 (header .gnb .gnb_wrap ul.depth1 > li)
     * --> 오버한 li에만 over클래스 줌
     * ---> 모든 li에서 over를 빼고 오버한 li에만 over클래스 줌
     * pc버전에서만...
     * 메뉴를 오버해서 바뀐 색상의 영역 내부에서는 오버가 유지되고 그 밖에 나갈 때 아웃
    */
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){ // PC일 때만 동작
            // console.log('over')
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $(this).removeClass('over')
    })
    $('header').on('mouseleave', function(){
        $(this).removeClass('menu_pc')
    })
    $('header .util .search .sch_open').on('focusin', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })
    /************header 메뉴 over::끝************/




})//맨끝