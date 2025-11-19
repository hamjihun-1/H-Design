/**********************
* 파일명 : main.js
* 작성자 : 함지훈
* 작성일 : 25-10-23
* 설  명 : 메인페이지에서만 적용되는 js를 저장 (hedaer/footer 제외)
**********************/

$(document).ready(function(){
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },

    });
/*****실행버튼, 일시정지버튼******/
    $('.visual_ctrl .btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide();
        $('.visual_ctrl .btn_play').show();
    });

    $('.visual_ctrl .btn_play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide();
        $('.visual_ctrl .btn_stop').show();
    });
/*****실행버튼, 일시정지버튼******/

/********************visual 시작::드롭박스**********************/
    // 모든 드롭다운 섹션 (.reservation-select) 선택
    const dropdownSelects = document.querySelectorAll('.reservation-select');

    // 외부 클릭 시 모든 드롭다운 닫기
    document.addEventListener('click', (e) => {
        dropdownSelects.forEach(select => {
            // 클릭된 영역이 해당 드롭다운 섹션 안에 속하지 않으면 닫기
            if (!select.contains(e.target)) {
                select.classList.remove('is-open');
            }
        });
    });


    dropdownSelects.forEach(select => {
        // A. 드롭다운 열고 닫기 (토글) 기능
        select.addEventListener('click', (e) => {
            // 클릭된 요소가 A 태그(토글 버튼)와 관련 있다면
            if (e.target.closest('a')) { 
                e.preventDefault(); 
                
                // 다른 열린 드롭다운 닫기
                dropdownSelects.forEach(otherSelect => {
                    if (otherSelect !== select) {
                        otherSelect.classList.remove('is-open');
                    }
                });

                // 현재 요소에 'is-open' 클래스를 토글
                select.classList.toggle('is-open'); 
            }
        });

        // B. 항목 선택 시 값 업데이트 및 드롭다운 닫기
        const items = select.querySelectorAll('.dropdown-content ul > li > a');
        const displayElement = select.querySelector('strong em'); // 값을 표시하는 <em> 요소

        items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // 부모 클릭 이벤트 방지

                // 항목 텍스트에서 숫자 추출 (예: 'Room 1' -> '1')
                const rawText = item.textContent.trim();
                const selectedValue = (rawText.match(/\d+/) || [''])[0]; 

                // 1. 표시되는 값 업데이트
                if (displayElement && selectedValue) {
                    displayElement.textContent = selectedValue;
                }

                // 2. 드롭다운 닫기
                select.classList.remove('is-open');

                // 3. 선택된 항목에 'selected' 클래스 토글 (선택적)
                items.forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
            });
        });
    });
/********************visual 끝::드롭박스**********************/












})//맨끝