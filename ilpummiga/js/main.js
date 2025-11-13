/**********************
* 파일명 : main.js
* 작성자 : 함지훈
* 작성일 : 25-10-23
* 설  명 : 메인페이지에서만 적용되는 js를 저장 (hedaer/footer 제외)
**********************/

$(document).ready(function(){
	let visual_time = 5000 //변수
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: visual_time,
			disableOnInteraction: true,
		},

		effect: "fade", /* fade 효과 */

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	});
	
	$('.visual .ctrl_btn .stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .play').css('display', 'flex')
        $('.visual .ctrl_btn .paging .bar span').stop()
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .stop').css('display', 'flex')
        updateCurrent()
    })
          
    // 전체 슬라이드 개수 (loop 상태에서도 실제 슬라이드 개수만)
    const totalSlides = $('.visual .swiper .swiper-slide').not('.swiper-slide-duplicate').length;
    $('.visual .paging .total').text(totalSlides); // 총 개수 표시

    // 현재 슬라이드 번호 표시 함수
    function updateCurrent() {
        let realIndex = visual_swiper.realIndex + 1; // 실제 인덱스 (0부터 시작하므로 +1)
        $('.visual .paging .current').text(realIndex);
        // 슬라이드가 교체되면 제일 먼저 넓이를 0으로 초기화
        $('.visual .ctrl_btn .paging .bar span').stop() //animate 종료
        $('.visual .ctrl_btn .paging .bar span').width(0)
        $('.visual .ctrl_btn .paging .bar span').animate({
            width : '100%'
        }, visual_time)
    }

    // 처음 로드 시 한번 실행
    updateCurrent();

    // 슬라이드 변경될 때마다 실행
    visual_swiper.on('slideChange', function () {
        updateCurrent();
    });
    /****************company 시작 ********************/
    /**********************
	* .company .list ul li에 마우스를 오버하면
	* 오버한 li에 active 클래스
	* .company .list에는 over 클래스 추가
	* ---- 언제 out
	**********************/
	$('.company .list ul li').on('mouseenter', function(){
		$(this).addClass('active')
		$('.company .list').addClass('over')
	})
	$('.company .list ul li').on('mouseleave', function(){
		$(this).removeClass('active')
		$('.company .list').removeClass('over')
	})
    /****************company 종료 ********************/
    /************찾습니다 tab::시작***********
     * .product .tab_list ul li를 클릭했을 때 1번째를 클릭하면 active 클래스를 주고 
     * li에서 어떤 tab_item을 보이게 해야하는 지 단서를 줘야함
     * .product .tab_content .tab_item에서 1번째 요소에 active 클래스 줌
     * 
    */
    let tab_name
    $('.product .tab_list ul li').on('click', function(){
        // 클릭한 li에만 active 클래스 추가
        $('.product .tab_list ul li').removeClass('active')
        $(this).addClass('active')

        // 클릭한 li에만 button에다가 선택됨이라고 글자쓰기
        $('.product .tab_list ul li button span').text('')
        $(this).find('button span').text('선택됨')
        
        //클릭한 li와 관련된 tab_content tab_item에 active 클래스 추가
        tab_name = $(this).attr('data-tab')
        $('.product .tab_content .tab_item').removeClass('active')
        //find로 찾을 때는 클래스명이면 .이 추가되어야함, 내가 가져온 이름은 .이 없음
        $('.product .tab_content').find('.' + tab_name).addClass('active')

        //선택됨 tab_item의 title에만 '선택됨'이라고 써주기
        $('.product .tab_content .tab_item').attr('title', '')
        $('.product .tab_content').find('.' + tab_name).attr('title', '선택됨')
    })
    /************찾습니다 tab::끝************/




})//맨끝