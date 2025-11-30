/**********************
* 파일명 : main.js
* 작성자 : 함지훈
* 작성일 : 25-11-28
* 설  명 : 메인페이지에서만 적용되는 js를 저장 (hedaer/footer 제외)
**********************/

$(document).ready(function(){
    let visual_name = ['역사를 만나는 문턱에서', '한 점의 유물이 전하는 깊은 순간', '유산이 살아 숨 쉬는 전시의 중심']
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 5000,
			disableOnInteraction: true,
		},

		effect: "fade", /* fade 효과 */

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.visual .paging ul', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			// type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
			renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
				return '<li class="'+ className +'"><span>'+ visual_name[index] +'</span></li>';
			},
		},
	});

	const special_swiper = new Swiper('.special .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			450: {    /* 640px 이상일때 적용 */
				slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 16,
			},
			768: {    /* 640px 이상일때 적용 */
				slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
			1024: {    /* 640px 이상일때 적용 */
				slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
		},
		scrollbar: {
			el: ".special .ctrl_wrap .scrollbar",
			hide: false,
			draggable: true, // 스크롤바 드래그 가능
			dragSize: 'auto', // 스크롤바 사이즈
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		autoplay: {  /* 팝업 자동 실행 */
			delay: 2500,
			disableOnInteraction: true,
		},
		navigation: {
			nextEl: '.special .ctrl_wrap .ctrl_btn .ctrl_next',
			prevEl: '.special .ctrl_wrap .ctrl_btn .ctrl_prev',
		},
	});
	/*special 팝업슬라이드 정지, 플레이 버튼*/
	$('.special .ctrl_wrap .ctrl_btn .ctrl_stop').on('click', function(){
        special_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.special .ctrl_wrap .ctrl_btn .ctrl_play').css('display', 'flex')
    })
    $('.special .ctrl_wrap .ctrl_btn .ctrl_play').on('click', function(){
        special_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.special .ctrl_wrap .ctrl_btn .ctrl_stop').css('display', 'flex')
        updateCurrent()
    })
	/*special 팝업슬라이드 정지, 플레이 버튼*/

})//맨끝